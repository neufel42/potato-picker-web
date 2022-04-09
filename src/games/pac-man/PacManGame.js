import React, { useState } from "react";
import { GameEngine } from "react-game-engine";
import { BoardRenderer } from "./BoardRenderer";
import { Ghost } from "./Ghost";
import { PacMan } from "./PacMan";
import { PlayerRenderer } from "./PlayerRenderer";
import { SpotRenderer } from "./SpotRenderer";
import { PacManControls } from "./PacManControls"
import { PacManPhysics } from "./PacManPhysics"
import { PacManEntities } from "./PacManEntities";
import { useWindowDimensions } from "../../utils/useWindowDimensions"; 

export const PacManGame = (props) => {

  const [running, setRunning] = useState(true)
  const [gameEngine, setGameEngine] = useState(null)
  const [currentPoints, setCurrentPoints] = useState(0)    

  const rows = props.rows || 6;  
  const columns = props.columns || 7;

  const { width, height } = useWindowDimensions();
  const windowHeight = height;
  const windowWidth = width;

  
  let entities = PacManEntities(windowHeight, windowWidth); 

  return (
    <div id="pacManDiv" style={{width: '100vw', height: '100vh', overflow: 'hidden', position: 'absolute', backgroundColor: 'black'}}>
      <GameEngine
          ref={(ref) => { setGameEngine(ref) }}
          systems={[PacManPhysics]}
          entities={entities}
          renderer={entities.renderer}
          running={running}
          onEvent={(e) => {                    
            /*
            switch (e.type) {
                case 'game_over':
                    setRunning(false)
                    gameEngine.stop()
                    break;
                case 'new_point':
                    setCurrentPoints(currentPoints + 1)
                    break;
            }                        
            */
          }}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >            
  </GameEngine>
  </div>
  );  
}