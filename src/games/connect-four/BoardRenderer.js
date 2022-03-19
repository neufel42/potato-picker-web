import React from "react";

export const BoardRenderer = (props) => {
  const width = "100vw";
  const height = "100vh";
  const x = props.x || 0;
  const y = props.y || 0;    

  return (
    <div style={{ position: "absolute", width: width, height: height, backgroundColor: "#888888", left: x, top: y }} />      
  );
};