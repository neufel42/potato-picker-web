import { GameEngine } from "react-game-engine";
import React, { useState, useEffect } from 'react';
import { entities } from './entities';
import Physics from './physics';
import { useWindowDimensions } from "../../utils/useWindowDimensions"; 

// Modification of https://github.com/SimCoderYoutube/FlappyBirdClone
export const FlappyBird = (props) => {
    const [running, setRunning] = useState(false)
    const [gameEngine, setGameEngine] = useState(null)
    const [currentPoints, setCurrentPoints] = useState(0)    

    const { height, width } = useWindowDimensions();
    const windowHeight = height;
    const windowWidth = width;
    
    if (running != props.start) {
        setRunning(props.start)    
    }    

    return (
        <div style={{width: '100vw', height: '100vh', overflow: 'hidden', position: 'absolute'}}>
            <GameEngine
                ref={(ref) => { setGameEngine(ref) }}
                systems={[Physics]}
                entities={entities(windowHeight, windowWidth)}
                running={running}
                onEvent={(e) => {                    
                    switch (e.type) {
                        case 'game_over':
                            setRunning(false)
                            gameEngine.stop()
                            break;
                        case 'new_point':
                            setCurrentPoints(currentPoints + 1)
                            break;
                }
                }}
                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
            >            
        </GameEngine>
      </div>
    );
}