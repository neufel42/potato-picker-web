import React from "react";
import { GameEngine } from "react-game-engine";
import { BoardRenderer } from "./BoardRenderer";
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
  };

  for(let r = 0; r < rows; r++) { 
    for(let c = 0; c < columns; c++) {
      let spotName = "spot" + r + "-" + c;
      let spot = { spotName: spotName, boardRow: r, boardColumn: c, rows: rows, columns: columns, color: "#ffffff", renderer: <SpotRenderer /> }
      entities[spotName] = spot;
    }
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