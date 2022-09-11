import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactsList } from "../components/contactslist/ContactsList";
import { Sidebar } from "../components/sidebar/Sidebar";
import { UserInfo } from "../components/userInfo/UserInfo";
import { fetchUsersAction } from "../redux/reduxAction";

export const LandingPage = () => {
  const { showComp } = useSelector((state) => state.users);
  console.log("first", showComp);

  const showComponent = {
    list: <ContactsList />,
    selected: <UserInfo />,
  };
  return (
    <div>
      <div>{showComponent[showComp]}</div>
    </div>
  );
};
