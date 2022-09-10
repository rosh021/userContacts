import React from "react";
import "./UserInfo.css";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { useDispatch, useSelector } from "react-redux";
import { setClick } from "../../redux/reduxSlice";
import { ContactsList } from "../contactslist/ContactsList";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export const UserInfo = () => {
  const dispatch = useDispatch();
  const { click } = useSelector((state) => state.users);
  console.log(click);
  const handelOnClick = (e) => {};
  return (
    <div>
      <div className="userInfo__btn">
        <button onClick={handelOnClick} className="contact__btn">
          <ArrowBackIosRoundedIcon fontSize="small" />
          <span>Contacts</span>
        </button>
      </div>
      <div className="userInfo__name">
        <div className="username">{click[0].name?.charAt(0)}</div>
        <div className="name">{click[0].name}</div>
        <p>{click[0].username}</p>
      </div>
      <div className="userInfo__icons">
        <a href="sms:">
          <div className="userInfo__icons__icon">
            <SmsOutlinedIcon />
            <h6>message</h6>
          </div>
        </a>
        <a href={`tel:${click[0].phone}`}>
          <div className="userInfo__icons__icon">
            <LocalPhoneOutlinedIcon />
            <h6>call</h6>
          </div>
        </a>
        <a href={`http://${click[0].website}`} target="_blank">
          <div className="userInfo__icons__icon">
            <OpenInNewOutlinedIcon />
            <h6>website</h6>
          </div>
        </a>
        <a href={`mailto:${click[0].email}`}>
          <div className="userInfo__icons__icon">
            <EmailOutlinedIcon />
            <h6>mail</h6>
          </div>
        </a>
      </div>
    </div>
  );
};
