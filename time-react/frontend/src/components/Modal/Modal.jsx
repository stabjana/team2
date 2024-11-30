import React, { useEffect, useState } from 'react';
import './Modal.css';
import Button from "../Button/Button";
import ShowRiddle from "../ShowRiddle/ShowRiddle";

const Modal = ({ isOpen, onClose, handleMoveNext, setRewards  }) => {
    const [riddle, setRiddle] = useState([]);
    const [userAnswer, setUserAnswer] = useState("");

    useEffect(() => {
        if (isOpen) {
          fetchRiddle();
        }
    }, [isOpen]);

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

    const handleAnswerSubmit = () => {
        if (
          userAnswer.trim().toLowerCase() === riddle?.answer?.trim().toLowerCase()
        ) {
          alert("Correct! You earned a gem.");
          setRewards((prevRewards) => [...prevRewards, "Gem"]); // Add gem to rewards
          handleMoveNext(); // Automatically move the avatar to the next grid
        } else {
          alert("Incorrect answer. Try again.");
        }
    };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <div className="riddle-section">
            {riddle ? (
                <>
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
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>     
      </div>
    </div>
  );
};

export default Modal;