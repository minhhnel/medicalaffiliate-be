import { DataTypes } from 'sequelize';

export const StaffAttributes = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: true,
    unique: true,
    field: 'user_id',
  },
  staffCode: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    field: 'staff_code',
  },
  fullName: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'full_name',
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: true,
    unique: true,
    field: 'email',
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'password',
  },
  department: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'department',
  },
  position: {
    type: DataTypes.ENUM('agent', 'supervisor', 'admin'),
    defaultValue: 'agent',
    allowNull: false,
    field: 'position',
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: 'is_active',
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: 'updated_at',
  },
  phoneNumber: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'phone_number',
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'date_of_birth',
  },
  gender: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'gender',
  },
};
