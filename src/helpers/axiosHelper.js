import axios from "axios";

const rootUrl = "https://jsonplaceholder.typicode.com/users";

const apiProcessor = async (method, url) => {
  const response = await axios({
    method,
    url,
  });

  return response.data;
};

export const fetchAllUsers = () => {
  return apiProcessor("get", rootUrl);
};
