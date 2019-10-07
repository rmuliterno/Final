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
}

export default new MeetupController();
