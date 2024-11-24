import "./Gameplay.css";
import Button from "../Button/Button";
import userPic from "../../assets/userpic.svg";

import boardImage from "../../assets/board.png";

function Gameplay({ onLogOut }) {
  return (
    <main>
      <div className="boxForTitle">
        <h1>Time Link</h1>
      </div>
      <div className="boxForGameplayAndMenu">
        <div className="boxForGameplay">
          <div className="playboard-img">
            {/* <img className="playboard-img" src={boardImage} alt="game playboard" /> */}
          </div>

          <div className="playboard-grid" id="playboard-grid">
            {[...Array(60)].map((_, index) => (
              <div key={index} id={`p${index + 1}`} className="field">
                {index + 1}
              </div>
            ))}
          </div>

          <div id="itemList" className="itemList">
            {[...Array(8)].map((_, index) => (
              <div key={index} id={`item${index + 1}`} className="item">
                Item {index + 1}
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
            <p>Show something here, maybe a diagram</p>
          </div>
          <div className="boxForSound">
            <p>Player here</p>
          </div>
          <button id="nextRiddle">Play next</button>
          <Button
            text="Exit"
            onClick={onLogOut}
            data-role="primary"
            type="button"
          />
          {/* <button id="settings">gearwheel</button> */}
          <div id="settings">
            <a href="#">
              <img src="assets/icons8-settings.svg" alt="" />
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Gameplay;
