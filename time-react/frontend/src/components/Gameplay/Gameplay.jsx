import React, { useState, useEffect } from "react";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons"; */
import "./Gameplay.css";
import Button from "../Button/Button";
import userPic from "../../assets/userpic.svg";
import placeAlienOnGrid from "../../../src/utilits/placeAlienOnGrid";
import alienImage from "../../assets/alienbob.png";
import lockIcon from "../../assets/icons8-lock-64.png";
import settingsIcon from "../../assets/icons8-settings.svg";
import Modal from '../Modal/Modal';

const gameplayFields = [116, 73, 200, 48, 212, 106, 191, 52, 165, 82, 223, 140]; // Playable fields

function Gameplay({ onLogOut }) {
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);
  const [riddle, setRiddle] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);//modal is closed by default
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [rewards, setRewards] = useState([]);

  // Initialize the avatar at the starting grid
  useEffect(() => {
    const startingFieldId = `${gameplayFields[0]}`; // Get the starting grid ID
    placeAlienOnGrid(startingFieldId, alienImage); // Place the alien on the grid
  }, []);

  const handleMoveNext = () => {
    const nextIndex = (currentFieldIndex + 1) % gameplayFields.length;
    const nextFieldId = `${gameplayFields[nextIndex]}`;
    placeAlienOnGrid(nextFieldId, alienImage); // Move the alien to the next grid
    setCurrentFieldIndex(nextIndex);
    setUserAnswer(""); // Reset the answer input
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
          <div>
            <Button
              text="Next riddle"
              onClick={openModal}
            />
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              handleMoveNext={handleMoveNext}
              setRewards={setRewards}
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
