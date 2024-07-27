import { useEffect } from 'react';
import './App.css';
import HomePage from './Components/HomePage';
// import StoryTeller from './Components/StoryTeller';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      {/* <StoryTeller /> */}
      <HomePage />
    </>
  )
}

export default App
