import { role } from "./role";

export interface User
{
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  phoneNumber: string,
  password: string,
  role?: role

}

