import axios from "axios";
import { handleError, startUser, successUser } from "./userSlice";

// Redux-Thunk will be used
export const fetchUser = async (user, dispatch) => {
  dispatch(startUser());

  await axios
    .post("http://localhost:5000/api/users", user)
    .then((res) => {
      console.log(res);
      dispatch(successUser(res.data));
    })
    .catch((err) => {
      dispatch(handleError());
    });
};
