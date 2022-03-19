import React from "react";

export const SpotRenderer = (props) => {
  const size = 100;
  const x = props.x - size / 2;
  const y = props.y - size / 2;
  const color = props.color;

  return (
    <div style={{ position: "absolute", width: size, height: size, backgroundColor: color, left: x, top: y }} />
  );  
}