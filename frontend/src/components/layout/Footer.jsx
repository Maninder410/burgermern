import React from "react";
import { AiFillYoutube, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Rapid Crave</h2>

        <p>Clean and Authentic food next to your door </p>
        <br />

        <em>We would love your feedback at sample@gmail.com </em>

        <strong>All right reserved @rapidcrave</strong>
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
