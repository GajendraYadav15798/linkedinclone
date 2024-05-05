import React from "react";
import "./Sidebar.css";
import Avatar from '@mui/material/Avatar';
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"
          alt="background-image"
        />
        <div className="profile__details">
        < Avatar/>
        <h4>Gajendra Yadav</h4>
        <p>Web Developer</p>
        </div>

        <div className="profile__stats">
        <span>who viewed your profile</span>
         <span className="stat__number">100000000</span>
        </div>
        <div className="profile__stats">
        <span>Connection<br/><b>Grow Your Network</b></span>
         <span className="stat__number">15000</span>
        </div>
      </div>

      <div className="sidebar__recent">
      <p>Recent</p>
      <p className="hash"><span>#</span>Branding</p>
      <p className="hash"><span>#</span>Marketing</p>
      <p className="hash"><span>#</span>WebDevelopment</p>
      <p className="hash"><span>#</span>Programing</p>
      <p className="hash"><span>#</span>Reactjs</p>
      <p className="hash"><span>#</span>Business</p>
      </div>
    </div>
  );
}

export default Sidebar;
