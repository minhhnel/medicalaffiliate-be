export interface StaffInterface {
  id: string;
  userId?: string | null;
  staffCode: string;
  fullName: string;
  email?: string | null;
  department?: string | null;
  position: 'agent' | 'supervisor' | 'admin';
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  phoneNumber?: string | null;
  dateOfBirth?: string | null;
  gender?: string | null;
  password?: string;
}
