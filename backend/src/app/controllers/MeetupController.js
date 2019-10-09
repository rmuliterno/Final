import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore } from 'date-fns';
import Meetup from '../models/Meetup';
import File from '../models/File';
import User from '../models/User';

class MeetupController {
	async index(req, res) {
		const { page } = req.query;

		//  Listing every non cancelled Meetup
		const meetups = await Meetup.findAll({
			where: { canceled_at: null },
			order: ['date'],
			attributes: [
				'id',
				'title',
				'description',
				'date',
				'banner_id',
				'location',
				'provider_id',
			],
			limit: 10,
			offset: (page - 1) * 10,
			include: [
				{
					model: File,
					as: 'avatar',
					attributes: ['id', 'path', 'url'],
				},
			],
		});
		return res.json(meetups);
	}

	async store(req, res) {
		const schema = Yup.object().shape({
			title: Yup.string().required(),
			description: Yup.string().required(),
			location: Yup.string().required(),
			banner_id: Yup.number().required(),
			provider_id: Yup.number().required(),
			date: Yup.date().required(),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation failed' });
		}

		const {
			title,
			description,
			location,
			provider_id,
			date,
			banner_id,
		} = req.body;

		const checkIsProvider = await User.findOne({
			where: { id: provider_id, provider: true },
		});

		if (!checkIsProvider) {
			return res.status(401).json({
				error: 'You can only create meetups with a provider account',
			});
		}

		const hourStart = startOfHour(parseISO(date));

		if (isBefore(hourStart, new Date())) {
			return res
				.status(400)
				.json({ error: 'Past dates are not permitted' });
		}

		const checkAvailable = await Meetup.findOne({
			where: { provider_id, canceled_at: null, date: hourStart },
		});

		if (checkAvailable) {
			return res.status(400).json({ error: 'Meetup date not available' });
		}

		const meetup = await Meetup.create({
			title,
			description,
			location,
			banner_id,
			provider_id,
			date,
		});

		return res.json(meetup);
	}

	async update(req, res) {
		const schema = Yup.object().shape({
			title: Yup.string(),
			description: Yup.string(),
			location: Yup.string(),
			date: Yup.date(),
			banner_id: Yup.number(),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Error on validation' });
		}

		const meetup = await Meetup.findByPk(req.params.id);

		const hourStart = startOfHour(meetup.date);

		if (isBefore(hourStart, new Date())) {
			return res
				.status(401)
				.json({ error: 'You cannot edit past meetups' });
		}

		const checkProvider = meetup.provider_id === req.userId;

		if (!checkProvider) {
			return res.status(401).json({
				error: "Only this meetup's providers can edit this meetup",
			});
		}

		const {
			title,
			description,
			location,
			date,
			banner_id,
		} = await meetup.update(req.body);

		return res.json({
			title,
			description,
			location,
			date,
			banner_id,
		});
	}

	async delete(req, res) {
		const meetup = await Meetup.findByPk(req.params.id);

		const hourStart = startOfHour(meetup.date);

		if (isBefore(hourStart, new Date())) {
			return res
				.status(401)
				.json({ error: 'You cannot delete past meetups' });
		}

		const checkProvider = meetup.provider_id === req.userId;

		if (!checkProvider) {
			return res.status(401).json({
				error: "Only this meetup's providers can delete this meetup",
			});
		}

		await meetup.destroy();

		return res.json({ message: 'Meetup deleted succesfully' });
	}
}

export default new MeetupController();
