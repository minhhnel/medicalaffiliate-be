// src/seeders/staffSeeder.ts
import bcrypt from 'bcrypt';
import Staff from '@/models/staffs';

export async function seedStaff() {
  const exists = await Staff.findOne({ where: { email: 'admin@medicalaffiliate.com' } });
  if (exists) return;

  await Staff.create({
    staffCode: 'STF001',
    fullName: 'Nguyen Van A',
    email: 'admin@medicalaffiliate.com',
    department: 'IT',
    position: 'admin',
    isActive: true,
    phoneNumber: '0901234567',
    dateOfBirth: '1990-01-01',
    gender: 'male',
    password: await bcrypt.hash(process.env.ADMIN_PASSWORD || '123456', 10),
  } as any);
}
