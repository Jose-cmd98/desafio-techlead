export interface IauthUser {
  token: string;
  user: string;
  msg: string
}

export interface InewUser {
  name: string,
  email: string,
  password: string,
  confirmpassword: string
}

export interface IgetUser{
  _id: string,
  name: string,
  email: string
}
