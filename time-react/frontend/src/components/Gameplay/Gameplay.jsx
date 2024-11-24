import "./Gameplay.css";
import Button from "../Button/Button";

function Gameplay({ onLogOut }) {
  return (
    <main>
      <div className="boxForTitle">
        <h1>Time Link</h1>
      </div>
      <div className="boxForGameplayAndMenu">
        <div className="boxForGameplay">
          <div className="playboard-img">
            <img src="assets/playboard1.png" alt="game playboard" />
          </div>
          <div className="playboard-grid" id="playboard-grid">
            <div id="p1" className="field">
              1
            </div>
            <div id="p2" className="field">
              2
            </div>
            <div id="p3" className="field">
              3
            </div>
            <div id="p4" className="field">
              4
            </div>
            <div id="p5" className="field">
              5
            </div>
            <div id="p6" className="field">
              6
            </div>
            <div id="p7" className="field">
              7
            </div>
            <div id="p8" className="field">
              8
            </div>
            <div id="p9" className="field">
              9
            </div>
            <div id="p10" className="field">
              10
            </div>
            <div id="p11" className="field">
              11
            </div>
            <div id="p12" className="field">
              12
            </div>
            <div id="p13" className="field">
              13
            </div>
            <div id="p14" className="field">
              14
            </div>
            <div id="p15" className="field">
              15
            </div>
            <div id="p16" className="field">
              16
            </div>
            <div id="p17" className="field">
              17
            </div>
            <div id="p18" className="field">
              18
            </div>
            <div id="p19" className="field">
              19
            </div>
            <div id="p20" className="field">
              20
            </div>
          </div>

          <div id="itemList" className="itemList">
            <div id="item1" className="item">
              Item 1
            </div>
            <div id="item2" className="item">
              Item 2
            </div>
            <div id="item3" className="item">
              Item 3
            </div>
            <div id="item4" className="item">
              Item 4
            </div>
            <div id="item5" className="item">
              Item 5
            </div>
            <div id="item6" className="item">
              Item 6
            </div>
            <div id="item7" className="item">
              Item 7
            </div>
            <div id="item8" className="item">
              Item 8
            </div>
          </div>
        </div>
        <aside className="boxForMenu">
          <div id="user" className="user">
            <img src="assets/userpic.svg" alt="little Alien" />
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
