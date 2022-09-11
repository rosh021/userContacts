import React from "react";
import "./UserInfo.css";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { useDispatch, useSelector } from "react-redux";
import { setClick, setShowComp } from "../../redux/reduxSlice";
import { ContactsList } from "../contactslist/ContactsList";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Layout } from "../layout/Layout";

export const UserInfo = () => {
  const dispatch = useDispatch();
  const { click } = useSelector((state) => state.users);
  console.log(click);

  return (
    <Layout>
      <div className="userInfo__btn_contacts">
        <button
          onClick={() => dispatch(setShowComp("list"))}
          className="contact__btn"
        >
          <ArrowBackIosRoundedIcon fontSize="small" />
          <span>Contacts</span>
        </button>
      </div>
      <div className="userInfo__name">
        <div className="username">{click[0].name?.charAt(0)}</div>
        <div className="name">{click[0].name}</div>
        {click[0].username}
      </div>
      <div className="userInfo__icons">
        <a href="sms:">
          <div className="userInfo__icons__icon__message">
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
      <div className="phone">
        <h5>Phone</h5>
        {click[0].phone}
      </div>
      <div className="address">
        <h5>Address</h5>
        {click[0].address.suite}/{click[0].address.street}/
        {click[0].address.city}/{click[0].address.zipcode}
      </div>
      <div className="company">
        <h5>Company</h5>
        <span className="company__span">Name:</span> {click[0].company.name}
        <br />
        <span className="company__span">Cath Phrase: </span>
        {click[0].company.catchPhrase}
        <br />
        <span className="company__span">BS: </span>
        {click[0].company.bs}
      </div>
      <div>
        <button className="userInfo__btn">Add to favorite</button>
      </div>
    </Layout>
  );
};
