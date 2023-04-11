import React from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import site_logo from "../../assets/cropped-ARGO-logo23.webp";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
const Navigation = () => {
  return (
    <>
      <div className="navigation_bar">
        <div className="container">
          <div className="site_logo">
            <img src={site_logo} alt="Argo" width="100%" />
          </div>
          <nav className="site_navbar">
            <ul>
              <li>
                <NavLink
                  className="nav_links"
                  to="https://www.argo-research.org/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav_links  "
                  to="https://www.argo-research.org/"
                >
                  About us <FaCaretDown className="icons" />
                </NavLink>
                <div className="menu_dropdown">
                  <div>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      ARGO History
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      Certifications
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      Nigeria Team
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      MSK-GCDI Team
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      Institutional Partners
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      Newsletters
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      Copyright Notice
                    </NavLink>
                  </div>
                </div>
              </li>
              <li>
                <NavLink className="nav_links">
                  Research <FaCaretDown className="icons" />{" "}
                </NavLink>
                <div className="menu_dropdown">
                  <div>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      ARGO Standard Operating Procedures
                      <FaCaretRight className="icons" />
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      Colorectal Cancer
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      Biobanking
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      Breast Cancer
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      Other Research
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      Future Research
                    </NavLink>
                  </div>
                </div>
              </li>
              <li>
                <NavLink
                  className="nav_links"
                  to="https://www.argo-research.org/"
                >
                  Publications
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav_links"
                  to="https://www.argo-research.org/fellowships/"
                >
                  Fellowships
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav_links"
                  to="https://www.argo-research.org/affiliates/"
                >
                  Affiliates
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav_links"
                  to="https://www.argo-research.org/meetings/"
                >
                  Meetings
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav_links"
                  to="https://www.argo-research.org/news/"
                >
                  News
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav_links"
                  to="https://www.argo-research.org/elementor-4448/  "
                >
                  Newsletter
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
