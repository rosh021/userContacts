import { fetchAllUsers } from "../helpers/axiosHelper";
import { setUsers } from "./reduxSlice";

export const fetchUsersAction = () => async (dispatch) => {
  const results = await fetchAllUsers();
  console.log(results);
  dispatch(setUsers(results));
};
