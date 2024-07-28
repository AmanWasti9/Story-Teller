import { useEffect } from 'react';
import './App.css';
import HomePage from './Components/HomePage';
// import StoryTeller from './Components/StoryTeller';
import "aos/dist/aos.css";
import AOS from "aos";


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
