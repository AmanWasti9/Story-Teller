import React from "react";
import bg from "../Video/bg.mp4";
import Navbar from "./Navbar";
import StoryTeller from "./StoryTeller";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="homepage">
      <video loop muted autoPlay>
        <source src={bg} />
      </video>
      <div className="nav-bar">
        <Navbar />
      </div>
      <br />
      <br />
      <div className="nav-bar">
        <StoryTeller />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
