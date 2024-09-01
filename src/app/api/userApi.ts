import axios from "axios";
import { UserProps } from "@/lib/types/user";

export async function signUp({ email, username, password }: UserProps) {
  return axios
    .post(`/api/users/signup`, {
      email: email,
      username: username,
      password: password,
    })
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log(error.response);
      return error.response.status;
    });
}
