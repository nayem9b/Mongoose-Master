import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async () => {
  // creating a new user
  const user = new User({
    id: "54721",
    role: "student",
    password: "joss",
    name: {
      firstName: "johnh",
      middleName: "doe",
      lastName: "john",
    },

    gender: "male",
    email: "abc@gmail.com",
    contactNo: "012122",
    emergencyContactNo: "15125",
    presentAddress: "abc",
    permanentAddress: "xyz",
  });
  await user.save();
  console.log(user);
  // console.log(user.fullName());

  return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 });
  return user;
};

// export const getAdminUsersFromDB = async () => {
//   const admins = await User.getAdminUsers();
//   console.log(admins);
//   return admins;
// };

//Class -> Attach -> Method -> Directly call using Class
// user = new User
// user.   instance methods
// User.getAdminUsers()
