'use strict';

import React, { useState, useEffect } from "react";
import Riddle from "./Riddle";
import './Gameplay.css';
/* import playerImage from "../assets/logo.svg"; */

const AlienImg = () => {

    const [position, setPosition] = useState(1);
    const [riddleActive, setRiddleActive] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const path = [1, 5, 7, 9, 15, 17, 20];

    const startRiddle = () => {
        setRiddleActive(true);
    };

    const handleRiddleSolved = () => {

        if (currentStep < path.length - 1) {
            setPosition(path[currentStep + 1]);
            setCurrentStep(currentStep + 1);
        }
        setRiddleActive(false);
    };

    useEffect(() => {
        if (currentStep < path.length) {
            startRiddle();
        }
    }, [currentStep]);

    return (
        <div className="boxForGameplay">
            <div className="playboard-grid">
                <div
                    className={`figure-position p${position}`}
                    id={`p${position}`}
                    style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        zIndex: 10,
                    }}
                >
                    <img src="../assets/logo.svg" alt="Little Alien" className="alien-image" />
                </div>
            </div>

            {riddleActive && (
                <div className="riddle-container">
                    <Riddle onSolve={handleRiddleSolved} />
                </div>
            )}

            <div className="solveRiddleButton">
                {riddleActive && (
                    <button onClick={handleRiddleSolved} className="solve-riddle-btn">
                        Submit Answer
                    </button>
                )}
            </div>
        </div>
    );
};

export default AlienImg;
