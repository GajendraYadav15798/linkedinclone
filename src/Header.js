import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import AppsIcon from '@mui/icons-material/Apps';
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <div className="header_logo">
          <img
            src="data:image/png;base64,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"
            alt="linkedin-logo"
          />
        </div>
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={PeopleIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={MessageIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notification" />
        <HeaderOptions avatar={Avatar} title="Me" />
        <HeaderOptions  title="|" style={{ fontSize: '24px' }} />
        <HeaderOptions Icon={AppsIcon} title="For Business" />
        
      </div>
    </div>
  );
}

export default Header;
