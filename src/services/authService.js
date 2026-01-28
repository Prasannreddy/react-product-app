import axios from "axios";

const LOGIN_URL = "https://fakestoreapi.com/auth/login";

export const loginUser = (credentials) => {
  return axios.post(LOGIN_URL, credentials);
};
