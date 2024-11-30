import React from "react";
import "./ShowRiddle.css";

function ShowRiddle({ riddle }) {
  return (
    <div className="show-riddle">
      {riddle ? (
        <p>
          <strong>Riddle:</strong> {riddle.riddle}
        </p>
      ) : (
        <p>Loading riddle...</p>
      )}
    </div>
  );
}

export default ShowRiddle;