import React from "react";
import { AiFillYoutube, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>MBA Burger Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @mbaburgerwala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>
        <a href="https://github.com/Maninder410" target={"blank"}>
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/maninder-singh-7947241bb/" target={"blank"}>
          <AiFillLinkedin />
        </a>
        <a href="https://www.youtube.com/channel/UCAIdIX2_H5aroRcCeDUYMWQ" target={"blank"}>
          <AiFillYoutube />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
