import { QueryInterface, DataTypes } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface): Promise<void> {
    await queryInterface.createTable('staff', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: true,
        unique: true,
      },
      staff_code: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      full_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: true,
      },
      department: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      position: {
        type: DataTypes.ENUM('agent', 'supervisor', 'admin'),
        defaultValue: 'agent',
        allowNull: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      date_of_birth: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      gender: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    });
  },

  async down(queryInterface: QueryInterface): Promise<void> {
    await queryInterface.dropTable('staffs');
  },
};
