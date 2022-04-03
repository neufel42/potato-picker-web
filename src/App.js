import React, { useState } from 'react';
import './App.css';
import SimpleGame from './SimpleGame';
import { ConnectFour } from './games/connect-four/ConnectFour';
import { FlappyBird } from './games/flappy-bird/FlappyBird';
import { PacMan } from './games/pac-man/PacMan';


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
        <PacMan start={true} />
        <PacMan start={true} color={"blue"} />
        <PacMan start={true} color={"blue"} />
        <PacMan start={true} color={"red"} />
        <PacMan start={true} color={"pink"} />
        <PacMan start={true} color={"green"} />
        <PacMan start={true} color={"blue"} />
        <PacMan start={true} color={"blue"} />
        <PacMan start={true} color={"blue"} />
        <PacMan start={true} color={"red"} />
        <PacMan start={true} color={"pink"} />
        <PacMan start={true} color={"green"} />
        <PacMan start={true} color={"blue"} />
        <PacMan start={true} color={"blue"} />
        <PacMan start={true} color={"blue"} />
        <PacMan start={true} color={"red"} />
        <PacMan start={true} color={"pink"} />
        <PacMan start={true} color={"green"} />
        <PacMan start={true} color={"blue"} />
        <PacMan start={true} color={"blue"} />
        <PacMan start={true} color={"blue"} />
        <PacMan start={true} color={"red"} />
        <PacMan start={true} color={"pink"} />
        <PacMan start={true} color={"green"} />
        <PacMan start={true} color={"blue"} />
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
