import React from "react";
import { GameEngine } from "react-game-engine";
import { BoardRenderer } from "./BoardRenderer";
import { Ghost } from "./Ghost";
import { PacMan } from "./PacMan";
import { PlayerRenderer } from "./PlayerRenderer";
import { SpotRenderer } from "./SpotRenderer";
import { PacManControls } from "./PacManControls"

export const PacManGame = (props) => {

  const rows = props.rows || 6;  
  const columns = props.columns || 7;
  const entities = {
    //-- Notice that each entity has a unique id (required)
    //-- and a renderer property (optional). If no renderer
    //-- is supplied with the entity - it won't get displayed.
    board: { rows: rows, columns: columns, renderer: <BoardRenderer />},    
    player1: { inputMethod: "mouse", entityName: "player1", name: "Player One", color: "#ff0000", playerPosition: 0, totalPlayers: 2, isActive: true, renderer: <PlayerRenderer />},
    player2: { inputMethod: "keyboard", entityName: "player2", name: "Player Two", color: "#ffff00", playerPosition: 1, totalPlayers: 2, isActive: false, renderer: <PlayerRenderer />},    
    ghost1: { inputMethod: "mouse", entityName: "ghost1", name: "Player On", playerPosition: 0, totalPlayers: 2, isActive: true, direction:"right", color:"pink", renderer: <Ghost /> },
    ghost2: { inputMethod: "mouse", entityName: "ghost2", name: "Player Oe", playerPosition: 0, totalPlayers: 2, isActive: true, direction:"left", color:"orange", renderer: <Ghost />},
    ghost3: { inputMethod: "mouse", entityName: "ghost3", name: "Player ne", playerPosition: 0, totalPlayers: 2, isActive: true, direction:"down", color:"blue", renderer: <Ghost />},
    ghost4: { inputMethod: "mouse", entityName: "ghost4", name: "PlayerOne", playerPosition: 0, totalPlayers: 2, isActive: true, direction:"up", color:"red", renderer: <Ghost />},
    ghost5: { inputMethod: "mouse", entityName: "ghost5", name: "Playe One", playerPosition: 0, totalPlayers: 2, isActive: true, direction:"left", color:"red", isScared:true, renderer: <Ghost />},        
    pacman1: { inputMethod: "mouse", entityName: "pacman1", name: "Player O0ne", playerPosition: 0, totalPlayers: 2, isActive: true, direction:"right", color:"yellow", start: true, renderer: <PacMan />},
  };

  /*
  for(let r = 0; r < rows; r++) { 
    for(let c = 0; c < columns; c++) {
      let spotName = "spot" + r + "-" + c;
      let spot = { spotName: spotName, row: r, column: c, rows: rows, columns: columns, color: "#ffffff", isSelected: false, renderer: <SpotRenderer /> }
      entities[spotName] = spot;
    }
  }  

  for(let c = 0; c < columns; c++) {
    let spotName = "label" + (rows)  + "-" + c;
    let spot = { label: c + 1, spotName: spotName, row: -1, column: c, rows: rows, columns: columns, color: "#ffffff", isSelected: false, renderer: <SpotRenderer /> }
    entities[spotName] = spot;
  }
  */

  return (
    <GameEngine
      style={{ width: "100vw", height: "100vh", backgroundColor: "blue" }}
      systems={[
        PacManControls
      ]}
      entities={entities}>

    </GameEngine>
  );  
}