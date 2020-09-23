export type UserState = {
  isLoggedIn: boolean;
  username: string;
  accessToken?: string;
  refreshToken?: string;
};

export const defaultState: UserState = {
  isLoggedIn: true,
  username: "",
};
