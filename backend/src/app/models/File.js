import Sequelize, { Model } from 'sequelize';

class File extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				path: Sequelize.STRING,
				url: {
					type: Sequelize.VIRTUAL,
					get() {
						return `http://localhost:3434/files/${this.path}`;
					},
				},
			},
			{
				sequelize,
			}
		);

		return this;
	}

	static associate(models) {
		this.belongsTo(models.File, { foreignKey: 'banner_id', as: 'avatar' });
	}
}

export default File;
