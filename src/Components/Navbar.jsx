import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Aman - The Story Teller</h1>
      <hr />
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <li className="c-p">Home</li>
        <li className="c-p">
          <ScrollLink
            to="askstory"
            spy={true}
            smooth={true}
            offset={-20}
            duration={1000}
            className="c-p"
          >
            Ask Story
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-20}
            duration={1000}
            className="c-p"
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
}
