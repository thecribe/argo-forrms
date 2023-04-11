import React from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import site_logo from "../../assets/cropped-ARGO-logo23.webp";
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
                  About us
                </NavLink>
                <div className="menu_dropdown">
                  <li>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      ARGO History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      Certifications
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      Nigeria Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      MSK-GCDI Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      Institutional Partners
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      Newsletters
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      Copyright Notice
                    </NavLink>
                  </li>
                </div>
              </li>
              <li>
                <NavLink className="nav_links">Research</NavLink>
                <div className="menu_dropdown">
                  <li>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      ARGO Standard Operating Procedures
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      Colorectal Cancer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      Biobanking
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      Breast Cancer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      Other Research
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="nav_links"
                      to="https://www.argo-research.org/"
                    >
                      Future Research
                    </NavLink>
                  </li>
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
