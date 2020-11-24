export class Users {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  img?: string;
  agree?: boolean;
  role?: string;
  message?:number = 0;
  accessToken?:string
}