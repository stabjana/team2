import React from "react";

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
