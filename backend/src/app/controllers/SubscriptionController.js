import * as Yup from 'yup';
import User from '../models/User';
import Meetup from '../models/Meetup';
import Subscription from '../models/Subscription';

import Mail from '../../lib/Mail';

class SubscriptionController {
	// Listing every meetup that the user has subscribed to and that have not happened yet
	async index(req, res) {
		const user_id = req.userId;

		const meetups = await Subscription.findAll({
			where: { user_id, past: false },
		});

		return res.json(meetups);
	}

	async store(req, res) {
		const meetup_id = req.params.id;
		const user_id = req.userId;

		// Validations

		const checkExists = await Meetup.findOne({ where: { id: meetup_id } });
		if (!checkExists) {
			return res.status(404).json({ error: 'Meetup not found' });
		}

		const { title, date, provider_id, past } = await Meetup.findOne({
			where: { id: meetup_id },
		});

		if (provider_id === req.userId) {
			return res
				.status(401)
				.json({ error: 'You cannot subscribe to your own meetups' });
		}

		if (past) {
			return res
				.status(401)
				.json({ error: 'You cannot subscribe to past meetups' });
		}

		const checkSubscribed = await Subscription.findOne({
			where: { user_id: req.userId, meetup_id: req.params.id },
		});

		if (checkSubscribed) {
			return res.status(400).json({
				error: 'You are already subscribed to this meetup',
			});
		}

		const checkDate = await Subscription.findOne({
			where: {
				user_id: req.userId,
			},
			include: [
				{
					model: Meetup,
					as: 'meetup',
					where: {
						date,
					},
				},
			],
		});

		if (checkDate) {
			return res.status(401).json({
				error: 'Cannot subscribe to another meetup at the same time',
			});
		}

		const subscription = await Subscription.create({
			meetup_id,
			user_id,
		});

		const { name, email } = await User.findByPk(provider_id);

		// First we got every information we needed to send the email
		// Now we use nodemailer to actually send an email with that information
		// The styling is declared on a template file

		await Mail.sendMail({
			to: `${name} <${email}>`,
			subject: 'New subscription!',
			template: 'subscription',
			context: {
				provider: name,
				meetup: title,
				// date: format(),
			},
		});

		return res.json(subscription);
	}
}

export default new SubscriptionController();
