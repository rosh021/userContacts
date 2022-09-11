import React from "react";
import { Sidebar } from "../sidebar/Sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="sidebar">
      <Sidebar />
      <div className="list">
        <div className="ContactList">{children}</div>
      </div>
    </div>
  );
};
