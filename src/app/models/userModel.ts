import { role } from "./role";
import { Travel } from "./travel";


export interface UserModel {
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  phoneNumber: string,
  role?: role,
  travels?: Travel[]
}

