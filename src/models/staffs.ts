import { Model, Sequelize, DataTypes, ModelValidateOptions, ModelScopeOptions, Op, ValidationErrorItem } from 'sequelize';
import { StaffAttributes } from '@/attributes/staff.attribute';
import { StaffInterface } from '@/interfaces/staff.interface';

class Staff extends Model<StaffInterface> implements StaffInterface {
    public id!: string;
    public userId?: string | null;
    public staffCode!: string;
    public fullName!: string;
    public email?: string | null;
    public department?: string | null;
    public position!: 'agent' | 'supervisor' | 'admin';
    public isActive!: boolean;
    public createdAt!: Date;
    public updatedAt!: Date;
    public phoneNumber?: string | null;
    public dateOfBirth?: string | null;
    public gender?: string | null;

    // Khai báo validate
    // static validations: ModelValidateOptions = {
    //   async emailUnique() {
    //     if (this.email) {
    //       const exist = await Staff.findOne({
    //         where: {
    //           email: this.email,
    //           id: { [Op.ne]: this.id },
    //         },
    //       });
    //       if (exist) {
    //         throw new ValidationErrorItem("Email already exists", "unique violation", "email", this.email);
    //       }
    //     }
    //   },
    // };

    // Khai báo scopes
    static scopes: ModelScopeOptions = {
      active: {
        where: { isActive: true },
      },
      byDepartment (dept: string) {
        return {
          where: { department: dept },
        };
      },
    };

    public static initialize (sequelize: Sequelize) {
      this.init(StaffAttributes, {
        // hooks: UserModel.hooks,
        // scopes: UserModel.scopes,
        // validate: UserModel.validations,
        sequelize,
        tableName: 'staff',
        modelName: 'staff',
        timestamps: true,
      });
    }

    public static associate () {

    }
}

export default Staff;
