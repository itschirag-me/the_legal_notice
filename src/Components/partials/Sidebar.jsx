import React from "react";
import NavbarItems from "./NavItems";

const Sidebar = ({ toggle, onLink, links, currentRoute, onLinkToggle }) => {
  return (
    <div className={toggle ? "d-lg-none" : "toggle d-lg-none"} id="wrapper">
      <div
        className={toggle ? "p-3 fixed-top" : "p-3 fixed-top toggle"}
        id="sidebar"
      >
        <NavbarItems
          onLinkToggle={onLinkToggle}
          currentRoute={currentRoute}
          links={links}
          onLink={onLink}
        />
      </div>
    </div>
  );
};

export default Sidebar;
