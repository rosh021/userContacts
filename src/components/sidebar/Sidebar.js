import React from "react";
import StarIcon from "@mui/icons-material/Star";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VoicemailOutlinedIcon from "@mui/icons-material/VoicemailOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DialpadTwoToneIcon from "@mui/icons-material/DialpadTwoTone";
import { ContactsList } from "../contactslist/ContactsList";
import "./Sidebar.css";
import { Searchbar } from "../search/Searchbar";

export const Sidebar = () => {
  return (
    <div className="contactIcons">
      <div className="icons">
        <StarIcon />
        <h6>Favorite</h6>
      </div>
      <div className="icons">
        <AccessTimeIcon />
        <h6>Recent</h6>
      </div>
      <div className="icons">
        <AccountCircleIcon />
        <h6>Contacts</h6>
      </div>
      <div className="icons">
        <DialpadTwoToneIcon />
        <h6>Keypad</h6>
      </div>
      <div className="icons">
        <VoicemailOutlinedIcon />
        <h6>Voicemail</h6>
      </div>
    </div>
  );
};
