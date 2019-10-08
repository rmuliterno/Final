import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';

import Meetup from '../models/Meetup';
import User from '../models/User';

class ScheduleController {
	async index(req, res) {
		const checkProvider = await User.findOne({
			where: {
				id: req.userId,
				provider: true,
			},
		});

		if (!checkProvider) {
			return res.status(401).json({ error: 'User is not a provider' });
		}

		const { date } = req.query;
		const parsedDate = parseISO(date);

		const meetups = await Meetup.findAll({
			where: {
				provider_id: req.userId,
				canceled_at: null,
				date: {
					[Op.between]: [
						startOfDay(parsedDate),
						endOfDay(parsedDate),
					],
				},
			},
			order: ['date'],
		});

		return res.json(meetups);
	}
}

export default new ScheduleController();
