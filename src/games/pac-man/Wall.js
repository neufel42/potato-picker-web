import React, { useEffect, useState, useRef } from "react";

export const Wall = (props) => {
  const width = props.body ? props.body.bounds.max.x - props.body.bounds.min.x : props.width || 0;
  const height = props.body ? props.body.bounds.max.y - props.body.bounds.min.y: props.height || 0;

  const x = props.body ? props.body.position.x : props.x || 0;
  const y = props.body ? props.body.position.y : props.y || 0;  

  if (props.body && !props.body?.parentProps) {
    props.body.label = props.label;
    props.body.parentProps = props;
    //props.body.collisionFilter.category = 0x0002;
    //props.body.collisionFilter.mask = 0x0001;
  }

  const color = props.color || 'blue';

//{ x: 0, y: 0 },
//{ x: size.width, y: 0 },
//{ x: size.width, y: size.height },
//{ x: 0, y: size.height }
  const points = "0,0 " + width + ",0 " + width + "," + height + " 0," + height;
  const style = {position:"absolute", left: x, top: y};
  
  return (
    <svg height={height} width={width} style={style}>
        <polygon points={points} style={{fill:color, stroke:"purple", strokeWidth:1}} />
    </svg> 
  );
};


