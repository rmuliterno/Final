import * as Yup from 'yup';
import Meetup from '../models/Meetup';
import File from '../models/File';
import User from '../models/User';

class MeetupController {
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

	async index(req, res) {
		const meetups = await Meetup.findAll({
			attributes: ['id', 'title', 'description', 'date', 'banner_id'],
			include: [
				{
					model: File,
					as: 'avatar',
					attributes: ['name', 'path', 'url'],
				},
			],
		});
		return res.json(meetups);
	}
}

export default new MeetupController();
