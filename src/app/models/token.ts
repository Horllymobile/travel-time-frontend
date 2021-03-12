import { UserModel } from "./userModel";

export interface Token{
  accessToken: string,
  refreshToken: string,
  user: UserModel,
}
