import React from "react";
import { GameEngine } from "react-game-engine";
import { BoardRenderer } from "./BoardRenderer";
import { PlayerRenderer } from "./PlayerRenderer";
import { SpotRenderer } from "./SpotRenderer";
import { SpotSelect } from "./SpotSelect"

export const ConnectFour = (props) => {

  const rows = props.rows || 6;  
  const columns = props.columns || 7;
  const entities = {
    //-- Notice that each entity has a unique id (required)
    //-- and a renderer property (optional). If no renderer
    //-- is supplied with the entity - it won't get displayed.
    board: { rows: rows, columns: columns, renderer: <BoardRenderer />},    
    player1: { inputMethod: "mouse", entityName: "player1", name: "Player One", color: "#ff0000", playerPosition: 0, totalPlayers: 2, isActive: true, renderer: <PlayerRenderer />},
    player2: { inputMethod: "keyboard", entityName: "player2", name: "Player Two", color: "#ffff00", playerPosition: 1, totalPlayers: 2, isActive: false, renderer: <PlayerRenderer />},
  };

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

  return (
    <GameEngine
      style={{ width: "100vw", height: "100vh", backgroundColor: "blue" }}
      systems={[
        SpotSelect
      ]}
      entities={entities}>

    </GameEngine>
  );  
}