import React from "react";
import img1 from "@/src/Assets/ieee-logo.png";
import "./TopNav.css";
function TopNav() {
  return (
    <div>
      <div className='meta-nav'>
        <p id='ieee-meta-a'>
          <a href='https://www.ieee.org/index.html'>IEEE.org</a> &#160;|&#160;{" "}
          <a href='https://www.ieeexplore.ieee.org/Xplore/guesthome.jsp'>
            IEEE <em>Xplore</em> Digital Library
          </a>{" "}
          &#160;|&#160; <a href='https://standards.ieee.org/'>IEEE Standards</a>{" "}
          &#160;|&#160; <a href='https://spectrum.ieee.org/'>IEEE Spectrum</a>{" "}
          &#160;|&#160;{" "}
          <a href='https://www.ieee.org/sitemap.html'>More Sites</a>
        </p>

        <p id='meta-ieee-logo'>
          <a href='https://www.ieee.org/'>
            <img src='/ieee-logo.png' />
            {/* <Image /> */}
          </a>
          <a href='https://www.ieee.org/join' className='joinIEEE'>
            Join IEEE
          </a>
        </p>
      </div>
    </div>
  );
}

export default TopNav;
