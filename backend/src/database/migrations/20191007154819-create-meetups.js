module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('meetups', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			description: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			location: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			date: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			user_id: {
				type: Sequelize.ARRAY(Sequelize.INTEGER),
				allowNull: true,
			},
			provider_id: {
				type: Sequelize.INTEGER,
				references: { model: 'users', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
				allowNull: true,
			},
			canceled_at: {
				type: Sequelize.DATE,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: queryInterface => {
		return queryInterface.dropTable('meetups');
	},
};
