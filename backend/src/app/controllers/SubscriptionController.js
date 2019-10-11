import * as Yup from 'yup';
import User from '../models/User';
import Meetup from '../models/Meetup';
import Subscription from '../models/Subscription';

class SubscriptionController {
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

		const checkExists = await Meetup.findOne({ where: { id: meetup_id } });
		if (!checkExists) {
			return res.status(404).json({ error: 'Meetup not found' });
		}

		const { date, provider_id, past } = await Meetup.findOne({
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

		return res.json(subscription);
	}
}

export default new SubscriptionController();
