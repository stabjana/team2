import React, { useEffect, useState } from 'react';
import './Modal.css';
import Button from "../Button/Button";
import ShowRiddle from "../ShowRiddle/ShowRiddle";

const Modal = ({ isOpen, onClose, handleMoveNext, setRewards  }) => {
    const [riddle, setRiddle] = useState(null);
    const [answers, setAnswers] = useState([]);
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

          const incorrectAnswers = ["some answer", "another answer", "one more answer"];//answers for debugging
          const allAnswers = shuffleArray([data.answer, ...incorrectAnswers]);

          setRiddle(data); // Set the full API response
          setAnswers(allAnswers); // Set the answers array
        } catch (error) {
          console.error("Failed to fetch riddle:", error);
          setRiddle({
            riddle: "Error fetching riddle. Please try again later.",
            answer: "",
          });
          setAnswers([]);
        }
    };

    const handleAnswerSubmit = (selectedAnswer) => {
        if (selectedAnswer.trim().toLowerCase() === riddle?.answer?.trim().toLowerCase()) {
            alert("Correct! You earned a gem.");
            onClose(); // Close the modal
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
                    {answers.map((answer, index) => (
                    <Button
                        key={index} onClick={() => handleAnswerSubmit(answer)} text = {answer}>
                    </Button>
                    ))}
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>     
      </div>
    </div>
  );
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

export default Modal;