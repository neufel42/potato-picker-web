import React from "react";

export const SpotRenderer = (props) => {
  const size = 100;
  const spacing = 2;

  const label = props.label || false;
  const rows = props.rows || 6;
  const columns = props.columns || 7;
  const column = props.column || 0;
  const row = props.row || 0;
  const spotName = props.spotName || "spot";  

  // Need to invert the "y axis so 0 is at the bottom instead of the top"
  const rowInverted = (rows - 1) - row;

  const x = (column * (size+spacing)) + size / 2;
  const y = (rowInverted * (size+spacing)) + size / 2;
  const color = props.color;

  return (
    <>
      {label &&
      <div         
        style={{ position: "absolute", width: size, height: size, backgroundColor: "blue", color: "white", fontSize: "48px", left: x, top: y }} >{label}</div>
      }
      {!label &&
        <div 
          data-spot-name={spotName} 
          data-column={column}
          data-row={row}
          style={{ position: "absolute", width: size, height: size, backgroundColor: color, left: x, top: y }} />
      }
    </>      
  );  
}