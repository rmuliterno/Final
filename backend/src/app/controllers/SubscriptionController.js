// import * as Yup from 'yup';

import User from '../models/User';
import Meetup from '../models/Meetup';
import Subscription from '../models/Subscription';


import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore } from 'date-fns';
import Meetup from '../models/Meetup';
import File from '../models/File';
import User from '../models/User';

class MeetupController {
	async store(req, res) {
		const meetup_id = req.params.id;
		const user_id = req.userId;

		console.log(meetup_id, 'id da meetup');
		console.log(user_id, 'id do user');

		// const checkExists = await Meetup.findOne({ where: { id: meetup_id } });
		// if (!checkExists) {
		// 	return res.status(404).json({ error: 'Meetup not found' });
		// }

		// const checkOrganizer = await Meetup.findOne({
		// 	where: { provider_id: user_id, id: meetup_id },
		// });

		// if (checkOrganizer) {
		// 	return res
		// 		.status(401)
		// 		.json({ error: 'You cannot subscribe to your own meetups' });
		// }

		const subscription = await Subscription.create({
			meetup_id,
			user_id,
		});

		return res.json(subscription);
	}
}

export default new MeetupController();
