import { myAxios } from "../Api's/Axios";

export const signup = (user) => {
  return myAxios
    .post("/api/users/adduser", user)
    .then((response) => response.user);
};
