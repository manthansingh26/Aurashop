type RegisterUserInput = {
  email: string;
  password: string;
  fullName: string;
  phoneNumber?: string;
};

type RegisterUserResult = {
  userId: string;
};

type LoginResult = {
  token: string;
  user: Record<string, unknown>;
};

export class AuthService {
  async registerUser(_input: RegisterUserInput): Promise<RegisterUserResult> {
    throw new Error("Not implemented");
  }

  async verifyUserOTP(_email: string, _otp: string): Promise<void> {
    throw new Error("Not implemented");
  }

  async resendOTP(_email: string): Promise<void> {
    throw new Error("Not implemented");
  }

  async loginUser(_email: string, _password: string): Promise<LoginResult> {
    throw new Error("Not implemented");
  }
}
