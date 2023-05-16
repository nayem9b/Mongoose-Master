import { HydratedDocument, Model } from "mongoose";

export interface IUser {
  id: string;
  role: string;
  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: "male" | "female";
  email?: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
}

//instance methods
export interface IUserMethods {
  fullName(): string;
}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}

// Statics
// interface UserModel extends Model<IUser> {
//   getAdminUsers(): IUser[];
// }