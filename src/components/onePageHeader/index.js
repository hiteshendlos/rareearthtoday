import React, { useState } from "react";
import "./onePageHeader.scss";
import Logo from "../../assets/images/logo.png";
import HamMenu from "../../assets/icons/ham-menu.png";
import { NavLink } from "react-router-dom";

export default function OnePageHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const nextSection = (currentPage) => {
    let navDots = document.getElementsByClassName("nav-dot");
    navDots = Array.prototype.slice.call(navDots);
    navDots[Number(currentPage) - 1]?.classList.remove("dot-active1");
    navDots[Number(currentPage)]?.classList.add("dot-active1");
    let pages = document.getElementById("all-pages");
    let Top = -document.documentElement.clientHeight * Number(currentPage);
    Top = Number(currentPage) === 10 ? Top + 969 : Top;
    pages.style.top = Top + "px";
  };

  return (
    <div>
      <div className="one-page-header-content-alignment">
        <div className="first-section-header-alignment">
          <div className="logo">
            <a href="/" onClick={() => nextSection(0)}>
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="text">
            <p>
              {" "}
              <a>EN</a>
            </p>
          </div>
          <div
            className="mobile-menu"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <img src={HamMenu} alt="HamMenu" />
          </div>
        </div>
      </div>
      <div
        className={
          sidebarOpen
            ? "mobile-header-design mobile-header-show"
            : "mobile-header-design mobile-header-hidden"
        }
      >
        <div className="mobile-header-alignment">
          <div onClick={() => nextSection(0)}>
            <img src={Logo} alt="Logo" />
          </div>
          <div onClick={() => setSidebarOpen(false)} className="close-button">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="mobile-body-content-alignment">
          <div>
            <a onClick={() => nextSection(0)}>home</a>
            <a onClick={() => nextSection(5)}>about</a>
            <a onClick={() => nextSection(0)}>say helllo</a>
          </div>
        </div>
        <div className="mobile-body-footer-text">
          <div className="text">
            <p>
              {" "}
              <a>EN</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
