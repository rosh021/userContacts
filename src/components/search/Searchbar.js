import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./Searchbar.css";

export const Searchbar = ({ handleOnSearch }) => {
  return (
    <div>
      <div className="searchbar">
        <input
          type="text"
          className="input"
          onChange={({ target: { value } }) => handleOnSearch(value)}
        />
        <span>
          <SearchRoundedIcon className="searchIcon" />
        </span>
      </div>
    </div>
  );
};
