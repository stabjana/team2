'use strict';

import React, { useState } from "react";

const Riddle = ({ onSolve }) => {
    const riddles = [
        { question: "What is 5 + 3?", answer: "8" },
        { question: "What color is the sky on a clear day?", answer: "blue" },
        { question: "How many legs does a spider have?", answer: "8" },
        { question: "What is the capital of France?", answer: "paris" },
        { question: "What is 2 + 2?", answer: "4" },
        { question: "What is the opposite of 'up'?", answer: "down" },
        { question: "How many continents are there?", answer: "7" },
    ];

    const randomIndex = Math.floor(Math.random() * riddles.length);
    const [riddle] = useState(riddles[randomIndex]);
    const [userAnswer, setUserAnswer] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userAnswer.trim().toLowerCase() === riddle.answer.toLowerCase()) {
            onSolve(true);
        } else {
            onSolve(false);
        }
    };

    return (
        <div className="riddle-container">
            <p className="riddle-question">{riddle.question}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    className="riddle-input"
                />
                <button type="submit" className="riddle-submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Riddle;
