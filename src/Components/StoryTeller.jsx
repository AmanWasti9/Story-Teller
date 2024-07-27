// import React, { useState } from "react";
// import { StoryTellerService } from "../Services/StoryTellerService";
// import loader from '../Video/infinite-spinner.svg';

// export default function StoryTeller() {
//   const [inputValue, setInputValue] = useState("");
//   const [story, setStory] = useState("");
//   const [imageURL, setImageURL] = useState("");
//   const [loading, setLoading] = useState(false); // State for loading

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleStoryClick = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Set loading to true when fetching starts
//     try {
//       const res = await StoryTellerService(inputValue);
//       setStory(res.story);
//       setImageURL(res.imageURL);
//     } catch (error) {
//       console.error("Error fetching story:", error);
//     } finally {
//       setLoading(false); // Set loading to false when fetching is complete
//     }
//   };

//   return (
//     <div
//       id="askstory"
//       className="container"
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <h1>Ask your Story</h1>
//       <form
//         onSubmit={handleStoryClick}
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column",
//         }}
//       >
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Ask your Stories here!!"
//           className="in-f"
//         />
//         <br />
//         <div>
//           <button className="my-btn">ASK</button>
//         </div>
//       </form>
//       {loading ? (
//         <div
//           style={{
//             width: '70%',
//             height: '50vh',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             flexDirection: 'column',
//           }}
//         >
//           <img src="/path/to/loading-image.gif" alt="Loading" style={{ width: '50px', height: '50px' }} />
//           <p>Loading story...</p>
//         </div>
//       ) : (
//         <>
//           <div style={{
//             width: '70%',
//             height: '50vh',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center'
//           }}>
//             {imageURL && <img src={imageURL} alt="Generated Image" style={{ marginTop: '20px', maxWidth: '100%', height: '100%' }} />}
//           </div>
//           <pre>{story}</pre>
//         </>
//       )}
//     </div>
//   );
// }



import React, { useState } from "react";
import { StoryTellerService } from "../Services/StoryTellerService";
import loader from '../Video/infinite-spinner.svg';

export default function StoryTeller() {
  const [inputValue, setInputValue] = useState("");
  const [story, setStory] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false); // State for loading

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleStoryClick = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when fetching starts
    try {
      const res = await StoryTellerService(inputValue);
      setStory(res.story);
      setImageURL(res.imageURL);
    } catch (error) {
      console.error("Error fetching story:", error);
    } finally {
      setLoading(false); // Set loading to false when fetching is complete
    }
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
        <br />
      </form>
      {loading ? (
        <div
          style={{
            width: '70%',
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <img src={loader} alt="Loading" style={{ width: '100px', height: '100px' }} />
        </div>
      ) : (
        <>
          <div style={{
            width: '70%',
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}>
            {imageURL && <img src={imageURL} alt="Generated Image" style={{ marginTop: '20px', maxWidth: '100%', height: '100%', borderRadius:'10px' }} />}
          </div>
          <pre>{story}</pre>
        </>
      )}
    </div>
  );
}
