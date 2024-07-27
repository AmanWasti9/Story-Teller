// StoryTeller.jsx
import React, { useState } from "react";
import { StoryTellerService } from "../Services/StoryTellerService";

export default function StoryTeller() {
  const [inputValue, setInputValue] = useState("");
  const [story, setStory] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleStoryClick = async (e) => {
    e.preventDefault();
    const res_story = await StoryTellerService(inputValue);
    setStory(res_story);
  };

  return (
    <div
      id="askstory"
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Apply the container class */}
      <h1>Ask your Story</h1>
      <form
        onSubmit={handleStoryClick}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ask your Stories here!!"
          className="in-f"
        />
        <br />
        <div>
          <button className="my-btn">ASK</button>
        </div>
      </form>
      <pre>{story}</pre>
    </div>
  );
}
