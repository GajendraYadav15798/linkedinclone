import React from "react";
import "./Widget.css";
import InfoIcon from "@mui/icons-material/Info";
function Widget() {
  return (
    <div>
      <div className="widget">
        <div className="widget__top">
          <div 
          className="widget__header">
            <h4>Linkedin Update</h4>
            <InfoIcon />
          </div>
          <div 
          className="widget__body">
            <ul 
            className="widget__o
            ptions">
              <li>
                <h4>Searching Jobs in Newton School</h4>
                <p> I think they will provide us Job </p>
              </li>
              <li>
                <h4>Searching Jobs in Newton School</h4>
                <p> I think they will provide us Job </p>
              </li>
              <li>
                <h4>Searching Jobs in Newton School</h4>
                <p> I think they will provide us Job </p>
              </li>
              <li>
                <h4>Searching Jobs in Newton School</h4>
                <p> I think they will provide us Job </p>
              </li>
              <li>
                <h4>Searching Jobs in Newton School</h4>
                <p> I think they will provide us Job </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="widget__bottom">
        <div className="widget__header">
          <h4>Linkedin Update</h4>
          <InfoIcon />
        </div>
        <div className="widget__body">
          <ul className="widget__options">
            <li>
              <h4>Searching Jobs in Newton School</h4>
              <p> I think they will provide us Job </p>
            </li>
            <li>
              <h4>Searching Jobs in Newton School</h4>
              <p> I think they will provide us Job </p>
            </li>
            <li>
              <h4>Searching Jobs in Newton School</h4>
              <p> I think they will provide us Job </p>
            </li>
            <li>
              <h4>Searching Jobs in Newton School</h4>
              <p> I think they will provide us Job </p>
            </li>
            <li>
              <h4>Searching Jobs in Newton School</h4>
              <p> I think they will provide us Job </p>
            </li>
          </ul>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Widget;
