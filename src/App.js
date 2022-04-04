import React, { useState } from 'react';
import './App.css';
import SimpleGame from './SimpleGame';
import { ConnectFour } from './games/connect-four/ConnectFour';
import { FlappyBird } from './games/flappy-bird/FlappyBird';
import { PacMan } from './games/pac-man/PacMan';
import { Ghost } from './games/pac-man/Ghost';
import { GhostMouth } from './games/pac-man/GhostMouth';


function App() {

  const [gameState, setGameState] = useState("menu");

  return (    
    <>
      { gameState !== "menu" &&
        <button style={{position: "absolute", zIndex: 10000}} onClick={() => setGameState("menu")}>Exit</button>
      }
      { gameState === "simple" &&
        <SimpleGame />
      }
      { gameState === "connect-four" &&
        <ConnectFour />
      }      
      { gameState === "flappy-bird" &&
        <FlappyBird start={true} />
      }      
      { gameState === "pac-man" &&
        <>
        <Ghost direction="right" color={"pink"} />
        <Ghost direction="left" color={"orange"} />
        <Ghost direction="down" color={"blue"} />
        <Ghost direction="up" color={"red"} />
        <Ghost color={"red"} isScared={true} />
        <PacMan start={true} direction="right" color={"yellow"}/>
        <PacMan start={true} direction="right" color={"pink"}/>
        <PacMan start={true} direction="left" color={"orange"} />
        <PacMan start={true} direction="up" color={"blue"} />
        <PacMan start={true} direction="down" color={"red"} />
        <PacMan start={true} direction="right" color={"pink"}/>
        <PacMan start={true} direction="left" color={"orange"} />
        <PacMan start={true} direction="up" color={"blue"} />
        <PacMan start={true} direction="down" color={"red"} />
        <PacMan start={true} direction="right" color={"pink"}/>
        <PacMan start={true} direction="left" color={"orange"} />
        <PacMan start={true} direction="up" color={"blue"} />
        <PacMan start={true} direction="down" color={"red"} />
        <PacMan start={true} direction="right" color={"pink"}/>
        <PacMan start={true} direction="left" color={"orange"} />
        <PacMan start={true} direction="up" color={"blue"} />
        <PacMan start={true} direction="down" color={"red"} />
        <PacMan start={true} direction="right" color={"pink"}/>
        <PacMan start={true} direction="left" color={"orange"} />
        <PacMan start={true} direction="up" color={"blue"} />
        <PacMan start={true} direction="down" color={"red"} />
        <PacMan start={true} direction="right" color={"pink"}/>
        <PacMan start={true} direction="left" color={"orange"} />
        <PacMan start={true} direction="up" color={"blue"} />
        <PacMan start={true} direction="down" color={"red"} />
        </>
      }  
      { gameState === "menu" &&
        <>
          <button onClick={() => setGameState("simple")}>Simple</button>
          <button onClick={() => setGameState("connect-four")}>Connect Four</button>
          <button onClick={() => setGameState("flappy-bird")}>Flappy Bird</button>
          <button onClick={() => setGameState("pac-man")}>Pac Man</button>
        </>
      }            
    </>
  );
}

export default App;
