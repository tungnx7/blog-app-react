import React from "react";

import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="top-left">
        <i className="top-icon fa-brands fa-facebook-square" ></i>
        <i className="top-icon fa-brands fa-twitter-square" ></i>
        <i className="top-icon fa-brands fa-pinterest-square" ></i>
        <i className="top-icon fa-brands fa-instagram-square" ></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">HOME</li>
          <li className="top-list-item">ABOUT</li>
          <li className="top-list-item">CONTACT</li>
          <li className="top-list-item">WRITE</li>
          <li className="top-list-item">LOGOUT</li>
        </ul>
      </div>
      <div className="top-right">
        <img
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="top-img"
        />
        <i className="top-icon-search fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
