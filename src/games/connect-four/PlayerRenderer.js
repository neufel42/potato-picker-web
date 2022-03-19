import React from "react";

export const PlayerRenderer = (props) => {
  const entityName = props.entityName || "Player1";
  const name = props.name || entityName;
  const inputMethod = props.inputMethod || "any"
  const playerPosition = props.playerPosition || 0;
  const totalPlayers = props.totalPlayers || 2;
  const isActive = props.isActive || false;
  const color = props.color || "#ff00ff";
  const width = '100px';
  const isWinner = props.isWinner || false;
  
  const y = props.y || 0;
  let x = "0%";
  if (totalPlayers > 1)
  {
    x = (playerPosition / (totalPlayers - 1)) * 100;
    if (playerPosition > 0) {
      x = "calc(" + x.toString() + "%" + " - " + width;
    }
  }

  return (
    <div 
      data-entity-name={entityName} 
      style={{ position: "absolute", width: width, backgroundColor: color, left: x, top: y }}>
        {name} {isActive ? "SELECT Using " + inputMethod : "Wait for other player"}
      { isWinner && 
        <div>WINNER!!!!</div>
      }
    </div>
  );  
}