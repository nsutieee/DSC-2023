import React, { useEffect } from "react";
import "./Footer.css";
import SocialFollow from "./Socials";
import { FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ backgroundColor: "black" }}>
      <div className='row'>
        <div className='col'>
          <div className='logos_wrap'>
            <div>
              <img src='/ieee-logo.png' className='logo' alt='' />
            </div>
            <div></div>
          </div>
          <div>
            &copy; Copyright IEEE - All rights reserved. A not-for-profit
            organization, IEEE is the world&apos;s largest technical
            professional organization dedicated to advancing technology for the
            benefit of humanity.
          </div>
        </div>
        <div className='col brd'>
          <h3 className='footerhead'>
            Address{" "}
            <div className='underline'>
              <span></span>
            </div>
          </h3>
          <div>Netaji Subhas University of Technology</div>
          <div>Sector -3,Dwarka</div>
          <div>New Delhi - 110078</div>
          <div className='email'>
            <a href='mailto:techweek.ieeensut@gmail.com'>ieee@nsut.ac.in</a>
          </div>
          <b>Prerna Yadav</b>
          <br />
          Section Student Representative : +91 99999 99999
          <br />
          <b>Ashmita</b>
          <br />
          Section Student Representative : +91 99999 99999
        </div>
        <div className='col brd'>
          <h3>
            Links{" "}
            <div className='underline'>
              <span></span>
            </div>
          </h3>
          <ul id='util'>
            <li>
              <a href='http://www.ieee.org/index.html' id='u-home'>
                Home
              </a>{" "}
            </li>
            <li>
              <a href='http://www.ieee.org/sitemap.html' id='u-home'>
                Sitemap/More Sites
              </a>{" "}
            </li>
            <li>
              <a
                href='http://www.ieee.org/about/contact_center/index.html'
                id='u-contact'
              >
                Contact
              </a>{" "}
            </li>
            <li>
              <a
                href='http://www.ieee.org/accessibility_statement.html'
                id='u-accessibility'
              >
                Accessibility
              </a>{" "}
            </li>
            <li>
              <a href='http://www.ieee.org/p9-26.html' id='u-non'>
                Nondiscrimination Policy
              </a>
            </li>
            <li>
              <a
                href='http://ieee-ethics-reporting.org/'
                id='u-ethics-reporting'
              >
                IEEE Ethics Reporting
              </a>
            </li>
            <li>
              <a
                href='http://www.ieee.org/security_privacy.html'
                id='u-privacy'
              >
                IEEE Privacy Policy
              </a>
            </li>

            <li>
              <a
                href='https://www.ieee.org/about/help/site-terms-conditions.html'
                id='u-terms'
              >
                Terms
              </a>
            </li>
          </ul>
        </div>
        <div className='col'>
          {/* <div
            className="apply-button"
            data-hackathon-slug="hacknsut-5"
            data-button-theme="dark"
            style={{ height: 44 + "px", width: 312 + "px" }}
          ></div> */}
          <a
            href='https://discord.gg/KX52TkVMsW'
            target={"_blank"}
            className='discord_wrap'
          >
            <FaDiscord className='discord_icon' />
            <div className='discord_txt'>Join Discord</div>
          </a>
          <div className='social'>
            <SocialFollow />
          </div>
          <div style={{ marginTop: "30px" }}>
            <div className='insu'>Interested in sponsoring us?</div>
            <a href='https://forms.gle/XWa6phMgNug75kPq7' target={"_blank"}>
              <button
                className='btn btn1 brochure'
                style={{ marginTop: "20px" }}
              >
                Sponsor Us
              </button>
            </a>
          </div>
        </div>
      </div>
      <hr></hr>

      <a
        href={"https://devfolio.co/code-of-conduct"}
        target={"_blank"}
        style={{ textDecoration: "none", color: "white" }}
      >
        <p className='copyright'>Code of Conduct</p>{" "}
      </a>
      <p className='copyright'>IEEE © 2023 - All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
