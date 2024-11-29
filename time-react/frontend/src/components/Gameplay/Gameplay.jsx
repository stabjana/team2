import "./Gameplay.css";
import React, { useState } from "react";
import Button from "../Button/Button";
import userPic from "../../assets/userpic.svg";
import placeAlienOnGrid from '../../../src/utilits/placeAlienOnGrid';
import alienImage from '../../assets/alienbob.png';
import lockIcon from '../../assets/icons8-lock-64.png';
import settingsIcon from '../../assets/icons8-settings.svg';

const gameplayFields = [116, 73, 200, 48, 212, 106, 191, 52, 165, 82, 223, 140]; // Playable fields

function Gameplay({ onLogOut }) {
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);
  const handleMoveNext = () => {
    const nextIndex = (currentFieldIndex + 1) % gameplayFields.length; // Loop back to the start
    const nextFieldId = `${gameplayFields[nextIndex]}`; // Get the next field ID
    placeAlienOnGrid(nextFieldId, alienImage); // Move the alien
    setCurrentFieldIndex(nextIndex); // Update the current index
  };
  return (
    <main>
      <div className="boxForGameplayAndMenu">
        <div className="boxForGameplay">
          <div className="playboard-img">
            {/* <img className="playboard-img" src={boardImage} alt="game playboard" /> */}
          </div>

          <div className="playboard-grid" id="playboard-grid">
            {[...Array(294)].map((_, index) => (
              <div key={index} id={index + 1} className="field">
                {index + 1}
              </div>
            ))}
          </div>

          <div id="itemList" className="itemList">
            {[...Array(10)].map((_, index) => (
              <div key={index} id={`item${index + 1}`} className="item">
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
          </div>
          <div className="boxForSound">
            <p>Player here</p>
          </div>
          <Button
            text="Play next"
            onClick={handleMoveNext} // Call the function to move to the next field
            data-role="primary"
            type="button"
          />
          <Button
            text="Exit"
            onClick={onLogOut}
            data-role="primary"
            type="button"
          />
          {/* <button id="settings">gearwheel</button> */}
          <div id="settings">
            <a href="#">
              <img src={settingsIcon} className="settingsIcon" alt="settings icon" />
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Gameplay;
