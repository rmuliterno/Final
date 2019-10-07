import Meetup from '../models/Meetup';
import File from '../models/File';

class MeetupController {
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
