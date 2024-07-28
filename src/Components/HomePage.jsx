import React from "react";
// import bg from "../Video/bg.mp4";
import Navbar from "./Navbar";
import StoryTeller from "./StoryTeller";
import Footer from "./Footer";
import Hero from "./Hero";
import DesignSection from "./DesignSection";
import { AnimatedBackground } from 'animated-backgrounds';

export default function HomePage() {
  return (
    <div className="homepage">
      {/* <video loop muted autoPlay>
        <source src={bg} />
      </video> */}
            <AnimatedBackground animationName="starryNight" />

      <div className="nav-bar">
        <Navbar />
      </div>
      <br />
      <br />
      <div>
        <Hero />
      </div>
      <div className="nav-bar">
        <StoryTeller />
      </div>
      <div>
        <DesignSection />
      </div>
      <br />
      <br />
      <div className="footer">
        <Footer />
      </div>
      <br />
    </div>
  );
}