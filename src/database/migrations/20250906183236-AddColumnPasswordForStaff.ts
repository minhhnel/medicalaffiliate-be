import { QueryInterface, DataTypes } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface): Promise<void> {
    await queryInterface.addColumn('staff', 'password', {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: '', 
    });
  },

  async down(queryInterface: QueryInterface): Promise<void> {
    await queryInterface.removeColumn('staff', 'password');
  },
};
