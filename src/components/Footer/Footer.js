import React from "react";
import "./Footer.scss";
import { IoLocationSharp } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaPhoneSquareAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="section_footer">
        <div className="container">
          <div className="widget widget-1">
            <NavLink
              to="https://www.google.com.sg/maps/place/Ilesa%20road,%20Ile-Ife,%20Nigeria"
              className="footer_links"
            >
              <IoLocationSharp />
            </NavLink>

            <p>Ilesa road, Ile-Ife, Nigeria</p>
          </div>
          <div className="widget widget-2">
            <NavLink
              to="https://mailto:Argo.mskcc@gmail.com"
              className="footer_links"
            >
              <GrMail />
            </NavLink>
            <NavLink className="footer_links">
              <p>Argo.mskcc@gmail.com</p>
            </NavLink>
            <NavLink className="footer_links">
              <p>argo.nigeria@gmail.com</p>
            </NavLink>
          </div>
          <div className="widget widget-3">
            <NavLink className="footer_links">
              <FaPhoneSquareAlt />
            </NavLink>
            <p>08145792378</p>
            <p>08033859387</p>
            <p>08137731718</p>
          </div>
          <div className="widget widget-4">
            <NavLink
              to="https://twitter.com/ArgoResearch"
              className="footer_links"
            >
              <BsTwitter />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/in/argo-research-793810264/"
              className="footer_links"
            >
              <FaLinkedinIn />
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
