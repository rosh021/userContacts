import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Sidebar } from "../components/sidebar/Sidebar";
import { fetchUsersAction } from "../redux/reduxAction";

export const LandingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsersAction());
  }, []);
  return (
    <div>
      <div>
        <Sidebar />
      </div>
    </div>
  );
};
