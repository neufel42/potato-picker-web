import React from "react";

export const SpotRenderer = (props) => {
  const size = 100;
  const spacing = 2;

  const rows = props.rows || 6;
  const columns = props.columns || 7;
  const boardColumn = props.boardColumn || 0;
  const boardRow = props.boardRow || 0;
  const spotName = props.spotName || "spot";  

  // Need to invert the "y axis so 0 is at the bottom instead of the top"
  const boardRowInverted = (rows - 1) - boardRow;

  const x = (boardColumn * (size+spacing)) + size / 2;
  const y = (boardRowInverted * (size+spacing)) + size / 2;
  const color = props.color;

  return (
    <div 
      data-spot-name={spotName} 
      data-board-column={boardColumn}
      data-borad-row={boardRow}
      style={{ position: "absolute", width: size, height: size, backgroundColor: color, left: x, top: y }} />
  );  
}