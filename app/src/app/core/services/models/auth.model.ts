export interface IauthUser {
  token: string,
  user: string,
  msg: string,
  isAdmin: boolean
}

export interface InewUser {
  name: string,
  email: string,
  password: string,
  confirmpassword: string,
  isAdmin: boolean
}

export interface IgetUser{
  _id: string,
  name: string,
  email: string
}
