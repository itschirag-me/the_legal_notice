import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tippy";

class NavItems extends Component {
  state = {
    dropdown: false,
  };

  handlerDropDown = () => {
    let { dropdown } = this.state;
    this.setState({ dropdown: !dropdown });
  };
  render() {
    const { dropdown } = this.state;
    const { onLinkToggle } = this.props;
    return (
      <div className="m-lg-auto m-2">
        <ul className="navbar-nav">
          <li className="nav-item bg-white text-center col-lg-3 p-lg-0 mx-lg-0 my-lg-2 p-2 mx-2 my-2 rounded">
            <NavLink
              onClick={onLinkToggle}
              className="nav-link mx-lg-0 mx-3 text-secondary d-flex"
              to=""
            >
              <span className="material-icons-outlined px-1">home</span>Home
            </NavLink>
          </li>
          <li className="nav-item bg-white text-center col-lg-4 p-lg-0 mx-lg-0 my-lg-2 p-2 mx-2 my-2 rounded">
            <div className="dropdown">
              <a
                style={{ cursor: "pointer" }}
                onClick={this.handlerDropDown}
                className="nav-link mx-lg-0 mx-3 text-secondary d-flex"
              >
                <span className="material-icons-outlined px-1">apps</span>Our
                Work
              </a>
              <div
                onMouseLeave={this.handlerDropDown}
                className={
                  dropdown
                    ? "dropdown-menu border-0 shadow rounded p-0 show"
                    : "dropdown-menu border-0 shadow rounded p-0"
                }
              >
                <a
                  onClick={onLinkToggle}
                  onClick={this.handlerDropDown}
                  className="dropdown-item p-3 focus text-secondary rounded-bottom d-flex"
                  target="_blank"
                  href="https://drive.google.com/drive/folders/1TkdhW9bHV4nDGRsKjP0hFI4pfaXb7QCH?usp=sharing"
                >
                  <span className="material-icons-outlined px-1">layers</span>
                  Legal Drafting
                </a>
                <NavLink
                  onClick={onLinkToggle}
                  onClick={this.handlerDropDown}
                  className="dropdown-item p-3 focus text-secondary rounded-top d-flex"
                  to="blogs"
                >
                  <span className="material-icons-outlined px-1">
                    assignment
                  </span>
                  Blogs
                </NavLink>
                <NavLink
                  onClick={onLinkToggle}
                  onClick={this.handlerDropDown}
                  className="dropdown-item p-3 focus text-secondary d-flex"
                  to="client-councelling"
                >
                  <span className="material-icons-outlined px-1">
                    accessibility
                  </span>
                  Client Councelling
                </NavLink>
                <NavLink
                  onClick={onLinkToggle}
                  onClick={this.handlerDropDown}
                  className="dropdown-item p-3 focus text-secondary rounded-bottom d-flex"
                  to="legal-maxims"
                >
                  <span className="material-icons-outlined px-1">
                    assessment
                  </span>
                  Legal Maxims
                </NavLink>
                <NavLink
                  onClick={onLinkToggle}
                  onClick={this.handlerDropDown}
                  className="dropdown-item p-3 focus text-secondary rounded-bottom d-flex"
                  to="legal-updates"
                >
                  <span className="material-icons-outlined px-1">explore</span>
                  Legal Updates
                </NavLink>
                <NavLink
                  onClick={onLinkToggle}
                  onClick={this.handlerDropDown}
                  className="dropdown-item p-3 focus text-secondary rounded-bottom d-flex"
                  to="legal-adivce"
                >
                  <span className="material-icons-outlined px-1">healing</span>
                  Legal Aid
                </NavLink>
              </div>
            </div>
          </li>
          <li className="nav-item bg-white text-center col-lg-3 p-lg-0 mx-lg-0 my-lg-2 p-2 mx-2 my-2 rounded">
            <NavLink
              onClick={onLinkToggle}
              className="nav-link mx-lg-0 text-center mx-3 text-secondary d-flex"
              to="/about"
            >
              <span className="material-icons-outlined px-1">group_work</span>
              About
            </NavLink>
          </li>
          <li className="nav-item bg-white text-center col-lg-3 p-lg-0 mx-lg-0 my-lg-2 p-2 mx-2 my-2 rounded">
            <NavLink
              onClick={onLinkToggle}
              className="nav-link mx-lg-0 text-center mx-3 text-secondary d-flex"
              to="/contact-us"
            >
              <span className="material-icons-outlined px-1">group_work</span>
              Contact Us
            </NavLink>
          </li>
          <Tooltip
            theme="light"
            position="top"
            arrow="true"
            title="Follow us on Instagram"
          >
            <li className="nav-item text-center p-lg-0 mx-lg-1 my-lg-2 p-2 mx-2 my-2 rounded">
              <a
                style={{ cursor: "pointer" }}
                className="nav-link mx-lg-1 mx-3 text-secondary d-flex"
                href="https://www.instagram.com/thelegalnotice/"
              >
                <span className="fa fa-instagram icons-size"></span>
              </a>
            </li>
          </Tooltip>
          <Tooltip
            theme="light"
            position="top"
            arrow="true"
            title="Subscribe our Channel"
          >
            <li className="nav-item text-center p-lg-0 mx-lg-1 my-lg-2 p-2 mx-2 my-2 rounded">
              <a
                style={{ cursor: "pointer" }}
                className="nav-link mx-lg-1 mx-3 text-secondary d-flex"
                href="https://www.youtube.com/channel/UCEQDaR7SaWaGkoj6_rYM2Bg/featured"
              >
                <span className="fa fa-youtube-play icons-size"></span>
              </a>
            </li>
          </Tooltip>
          <Tooltip
            theme="light"
            position="top"
            arrow="true"
            title="Like us on LinkedIn"
          >
            <li className="nav-item text-center p-lg-0 mx-lg-1 my-lg-2 p-2 mx-2 my-2 rounded">
              <a
                style={{ cursor: "pointer" }}
                className="nav-link mx-lg-1 mx-3 text-secondary d-flex"
                href="https://www.linkedin.com/company/thelegalnotice"
              >
                <span className="fa fa-linkedin icons-size"></span>
              </a>
            </li>
          </Tooltip>
          <Tooltip
            theme="light"
            position="top"
            arrow="true"
            title="Follow us on Facebook"
          >
            <li className="nav-item text-center p-lg-0 mx-lg-1 my-lg-2 p-2 mx-2 my-2 rounded">
              <a
                style={{ cursor: "pointer" }}
                className="nav-link mx-lg-1 mx-3 text-secondary d-flex"
                href="http://www.facebook.com/thelegalnotice/"
              >
                <span className="fa fa-facebook icons-size"></span>
              </a>
            </li>
          </Tooltip>
        </ul>
      </div>
    );
  }
}

export default NavItems;
