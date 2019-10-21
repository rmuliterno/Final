import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class ScheduleController {
	async index(req, res) {
		// Here its listing every non canceled meetup that the provider has created
		const checkProvider = await User.findOne({
			where: {
				id: req.userId,
				provider: true,
			},
		});

		if (!checkProvider) {
			return res.status(401).json({ error: 'User is not a provider' });
		}

		const meetups = await Meetup.findAll({
			where: {
				provider_id: req.userId,
				canceled_at: null,
			},
			order: ['date'],
		});

		return res.json(meetups);
	}

	async show(req, res) {
		const { id } = req.params;
		const provider_id = req.userId;

		try {
			const meetup = await Meetup.findOne({
				where: { id, provider_id },
				include: [
					{
						model: File,
						as: 'banner',
						attributes: ['id', 'path', 'url'],
					},
				],
			});

			if (!meetup) {
				return res
					.status(400)
					.json({ error: "You are not this meetup's providers" });
			}

			return res.json(meetup);
		} catch (err) {
			return res
				.status(400)
				.json({ error: 'Could not locate this meetup' });
		}
	}
}

export default new ScheduleController();
