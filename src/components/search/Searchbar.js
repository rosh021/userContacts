import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./Searchbar.css";

export const Searchbar = () => {
  return (
    <div>
      <div className="searchbar">
        <input type="text" className="input" />
        <span>
          <SearchRoundedIcon className="searchIcon" />
        </span>
      </div>
    </div>
  );
};
