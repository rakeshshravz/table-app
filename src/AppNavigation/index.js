import React, { useState } from "react";
import ContactIcon from "../Icons/ContactIcon";
import LeadsIcon from "../Icons/LeadsIcon";
import DealsIcon from "../Icons/DealsIcon";
import InboxIcon from "../Icons/InboxIcon";
import ActivityIcon from "../Icons/ActivityIcon";
import PinIcon from "../Icons/PinIcon";
import NavbarCollapseIcon from "../Icons/NavbarCollapseIcon";
import NavBarExpandIcon from "../Icons/NavBarExpandIcon";

const menuItems = [
  {
    id: 1,
    icon: ContactIcon,
    text: "Contacts",
  },
  {
    id: 2,
    icon: LeadsIcon,
    text: "Leads",
  },
  {
    id: 3,
    icon: DealsIcon,
    text: "Deals",
  },
  {
    id: 4,
    icon: InboxIcon,
    text: "Sales Inbox",
  },
  {
    id: 5,
    icon: ActivityIcon,
    text: "Activities",
  },
];

const AppNavigation = ({ isCollapsed, setIsCollapsed }) => {
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className={`app-nav ${isCollapsed ? "collapsed" : ""}`}>
      {isCollapsed && (
        <div className={`navbar-actions ${!isCollapsed ? "flex-style" : ""}`}>
          <div className="navbar-action-icon">
            <PinIcon />
          </div>
          <div className="navbar-action-icon" onClick={toggleNavbar}>
            <NavBarExpandIcon />
          </div>
        </div>
      )}
      <div className="navbar-actions-box">
        <div className="platform-name">CRM</div>
        {!isCollapsed && (
          <div className="navbar-actions flex-style">
            <div className="navbar-action-icon">
              <PinIcon />
            </div>
            <div className="navbar-action-icon" onClick={toggleNavbar}>
              <NavbarCollapseIcon />
            </div>
          </div>
        )}
      </div>
      {!isCollapsed && <div className="modules-header">MODULES</div>}
      <div className="menu-container">
        {menuItems.map((item) => (
          <div className="menu-item" key={item.id}>
            <div className="menu-icon">
              <item.icon />
            </div>
            {!isCollapsed && <div className="menu-text">{item.text}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppNavigation;
