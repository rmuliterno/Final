import Mail from '../../lib/Mail';

class SubscriptionMail {
	get key() {
		return 'SubscriptionMail';
	}

	async handle({ data }) {
		const { name, email, title } = data;

		console.log('A fila executou');

		await Mail.sendMail({
			to: `${name} <${email}>`,
			subject: 'New subscription!',
			template: 'subscription',
			context: {
				provider: name,
				meetup: title,
			},
		});
	}
}

export default new SubscriptionMail();
