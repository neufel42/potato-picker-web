import React, { useState } from 'react';
import './App.css';
import SimpleGame from './SimpleGame';
import { ConnectFour } from './games/connect-four/ConnectFour';


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
      { gameState === "menu" &&
        <>
          <button onClick={() => setGameState("simple")}>Simple</button>
          <button onClick={() => setGameState("connect-four")}>Connect Four</button>
        </>
      }            
    </>
  );
}

export default App;
