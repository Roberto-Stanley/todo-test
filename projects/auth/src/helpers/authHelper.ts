import { IUser } from "../types/UserType";

const loginHelper = (user: IUser) => {
  window.history.pushState(null, null, "/");
  localStorage.setItem("token", "here would be the token");
  localStorage.setItem("user", JSON.stringify(user));
};

export { loginHelper };
