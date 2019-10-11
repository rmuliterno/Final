import { isBefore } from 'date-fns';
import Sequelize, { Model } from 'sequelize';

class Meetup extends Model {
	static init(sequelize) {
		super.init(
			{
				title: Sequelize.STRING,
				description: Sequelize.STRING,
				location: Sequelize.STRING,
				date: Sequelize.DATE,
				past: {
					type: Sequelize.VIRTUAL,
					get() {
						return isBefore(this.date, new Date());
					},
				},
				canceled_at: Sequelize.DATE,
			},
			{
				sequelize,
			}
		);

		return this;
	}

	static associate(models) {
		this.belongsTo(models.User, {
			foreignKey: 'provider_id',
			as: 'provider',
		});
		this.belongsTo(models.File, { foreignKey: 'banner_id', as: 'avatar' });
	}
}

export default Meetup;
