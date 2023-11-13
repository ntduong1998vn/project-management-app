export interface ICreateAccountInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ICreateAccountResponse {
  success: boolean;
  message?: string;
}

export interface ILoginInput {
  email: string;
  password: string;
}

export interface ILoginResponse {
  success: boolean;
  message?: string;
  token?: string;
}
