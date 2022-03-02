import React from "react";
import { Link } from "react-router-dom";

import "./topbar.css";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="top-left">
        <i className="top-icon fa-brands fa-facebook-square"></i>
        <i className="top-icon fa-brands fa-twitter-square"></i>
        <i className="top-icon fa-brands fa-pinterest-square"></i>
        <i className="top-icon fa-brands fa-instagram-square"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="top-list-item">
            <Link to="/" className="link">
              ABOUT
            </Link>
          </li>
          <li className="top-list-item">
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>
          <li className="top-list-item">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="top-list-item">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <img
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="top-img"
          />
        ) : (
          <ul className="top-list">
            <li className="top-list-item">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="top-list-item">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="top-icon-search fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
