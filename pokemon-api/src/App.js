import './App.css';

function App() {
  return (
    <div id="pokedex">
      {/* Left side panel */}
      <div id="left-panel">
        <div className="left-top-container">
          <svg height="100" width="225" className="left-svg">
            <polyline points="0,75 70,75 90,38 224,38" style={{fill: "none", stroke: "black", strokeWidth: "3"}} />
          </svg>
          <div className="lights-container">
            <div className="big-light-border">
              <div className="big-light blue">
                <div className="big-dot light-blue"></div>
              </div>
            </div>
            <div className="small-lights-container">
              <div className="small-light red">
                <div className="dot light-red"></div>
              </div>
              <div className="small-light yellow">
                <div className="dot light-yellow"></div>
              </div>
              <div className="small-light green">
                <div className="dot light-green"></div>
              </div>
            </div>
          </div>
        </div>
        {/* center screen  */}
        <div className="screen-container">
          <div className="screen">
            <div className="top-screen-lights">
              <div className="mini-light red"></div>
              <div className="mini-light red"></div>
            </div>
            <div id="main-screen"></div>
            <div className="bottom-screen-lights">
              <div className="small-light red">
                <div className="dot light-red"></div>
              </div>
              <div className="burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
        {/* bottom buttons  */}
        <div className="buttons-container">
          <div className="upper-buttons-container">
            <div className="big-button"></div>
            <div className="long-buttons-container">
              <div className="long-button red"></div>
              <div className="long-button light-blue"></div>
            </div>
          </div>
          <div className="nav-buttons-container">
            <div className="dots-container">
              <div>.</div>
              <div>.</div>
            </div>
            <div className="green-screen">
              <span id="name-screen">bulbasaur</span>
            </div>
            <div className="right-nav-container">
              <div className="nav-button">
                <div className="nav-center-circle"></div>
                <div className="nav-button-vertical"></div>
                <div className="nav-button-horizontal">
                  <div className="border-top"></div>
                  <div className="border-bottom"></div>
                </div>
              </div>
              <div className="bottom-right-nav-container">
                <div className="small-light red">
                  <div className="dot light-red"></div>
                </div>
                <div className="dots-container">
                  <div className="black-dot">.</div>
                  <div className="black-dot">.</div>
                  <div className="black-dot">.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right panel */}
      <div id="right-panel">
        {/* white space */}
        <div className="empty-container">
          <svg height="100%" width="100%">
            <polyline points="0,0 0,40 138,40 158,75 250,75 250,0 0,0" style={{fill: "#f2f2f2", stroke: "none", strokeWidth: "3"}} />
            <polyline points="0,40 138,40 158,75 250,75" style={{fill: "none", stroke: "black", strokeWidth: "3"}} />
          </svg>
        </div>
        {/* top screen */}
        <div className="top-screen-container">
          <div id="about-screen" className="right-panel-screen">
            Height: 70cm Weight: 6.9kg
          </div>
        </div>
        {/* blue buttons */}
        <div className="square-buttons-container">
          <div className="blue-squares-container">
            <div className="blue-square"></div>
            <div className="blue-square"></div>
            <div className="blue-square"></div>
            <div className="blue-square"></div>
            <div className="blue-square"></div>
            <div className="blue-square"></div>
            <div className="blue-square"></div>
            <div className="blue-square"></div>
            <div className="blue-square"></div>
            <div className="blue-square"></div>
          </div>
        </div>
        {/* center buttons */}
        <div className="center-buttons-container">
          <div className="center-left-container">
            <div className="small-reds-container">
              <div className="small-light red">
                <div className="dot light-red"></div>
              </div>
              <div className="small-light red">
                <div className="dot light-red"></div>
              </div>
            </div>
            <div className="white-squares-container">
              <div className="white-square"></div>
              <div className="white-square"></div>
            </div>
          </div>
          <div className="center-right-container">
            <div className="thin-buttons-container">
              <div className="thin-button"></div>
              <div className="thin-button"></div>
            </div>
            <div class="yellow-button yellow">
              <div className="big-dot light-yellow"></div>
            </div>
          </div>
        </div>
        {/* bottom screens */}
        <div className="bottom-screens-container">
          <div id="type-screen" className="right-panel-screen">grass</div>
          <div id="id-screen" className="right-panel-screen">#1</div>
        </div>
      </div>
    </div>
  );
}

export default App;
