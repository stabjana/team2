import React, { useState, useEffect } from "react";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons"; */
import "./Gameplay.css";
import Button from "../Button/Button";
import ShowRiddle from "../ShowRiddle/ShowRiddle";
import userPic from "../../assets/userpic.svg";
import placeAlienOnGrid from "../../../src/utilits/placeAlienOnGrid";

import alienImage from '../../assets/alienbob.png';


const gameplayFields = [116, 73, 200, 48, 212, 106, 191, 52, 165, 82, 223, 140]; // Playable fields

function Gameplay({ onLogOut }) {
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);
  const [riddle, setRiddle] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [rewards, setRewards] = useState([]);

  // Initialize the avatar at the starting grid
  useEffect(() => {
    const startingFieldId = `${gameplayFields[0]}`; // Get the starting grid ID
    placeAlienOnGrid(startingFieldId, alienImage); // Place the alien on the grid
    fetchRiddle(); // Fetch the first riddle
  }, []);

  // Fetch a new riddle from the API
  const fetchRiddle = async () => {
    try {
      const response = await fetch("https://riddles-api.vercel.app/random");
      const data = await response.json();
      console.log("Fetched Riddle:", data); // Debugging the response
      setRiddle(data); // Set the full API response
    } catch (error) {
      console.error("Failed to fetch riddle:", error);
      setRiddle({
        riddle: "Error fetching riddle. Please try again later.",
        answer: "",
      });
    }
  };

  const handleMoveNext = () => {
    const nextIndex = (currentFieldIndex + 1) % gameplayFields.length;
    const nextFieldId = `${gameplayFields[nextIndex]}`;
    placeAlienOnGrid(nextFieldId, alienImage); // Move the alien to the next grid
    setCurrentFieldIndex(nextIndex);
    fetchRiddle(); // Fetch a new riddle when moving to the next stage
    setUserAnswer(""); // Reset the answer input
  };

  const handleAnswerSubmit = () => {
    if (
      userAnswer.trim().toLowerCase() === riddle?.answer?.trim().toLowerCase()
    ) {
      alert("Correct! You earned a gem.");
      setRewards([...rewards, "Gem"]); // Add gem to rewards
      handleMoveNext(); // Automatically move the avatar to the next grid
    } else {
      alert("Incorrect answer. Try again.");
    }
  };

  return (
    <main>

      <div className="boxForTitle">
      </div>

      <div className="boxForGameplayAndMenu">
        <div className="boxForGameplay">
          <div className="playboard-grid" id="playboard-grid">
            {[...Array(294)].map((_, index) => (
              <div key={index} id={index + 1} className="field">
                {index + 1}
              </div>
            ))}
          </div>
          <div id="itemList" className="itemList">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="item flex justify-center items-center"
              >
                <img src={lockIcon} className="lockIcon" alt="lock icon" />
              </div>
            ))}
          </div>
        </div>
        <aside className="boxForMenu">
          <div id="user" className="user">
            <img src={userPic} alt="little Alien" />
            <h3 id="userName">Username</h3>
          </div>
          <div id="gameProgress" className="gameProgress">
            <h3>Progress</h3>
            <p>Current Field: {gameplayFields[currentFieldIndex]}</p>
          </div>
          <div className="riddle-section">
            <ShowRiddle riddle={riddle} />
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Enter your answer"
            />
            <Button
              text="Submit Answer"
              onClick={handleAnswerSubmit}
              data-role="secondary"
            />
          </div>
          <Button text="Exit" onClick={onLogOut} data-role="primary" />
          <div id="settings">
            <a href="#">
              <img
                src={settingsIcon}
                className="settingsIcon"
                alt="settings icon"
              />
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Gameplay;
