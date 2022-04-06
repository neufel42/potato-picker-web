import React, { useEffect, useState } from "react";
import { GhostMouth } from "./GhostMouth";
import { PacMan } from "./PacMan";

export const Ghost = (props) => {
  const width = props.body ? props.body.bounds.max.x - props.body.bounds.min.x : props.width || 0;
  const height = props.body ? props.body.bounds.max.y - props.body.bounds.min.y: props.height || 0;

  const x = props.body ? props.body.position.x - width /2 : props.x || 0;
  const y = props.body ? props.body.position.y - height /2 : props.y || 0;  

  if (props.body && !props?.collisionFilter) {
    props.body.label = props.label;
    props.body.parentProps = props;
    props.body.collisionFilter.category = 0x0001;
    props.body.collisionFilter.mask = 0x0002;
  }

  const isDead = props.isDead || false;

  const color = props.color || 'red';
  const scaredColor = props.scaredColor || 'purple';
  const direction = props.direction || 'right';
  const isScared = props.isScared || false;

  const actualColor = isScared ? scaredColor : color;

  return (
    <div style={{width: width, height: height, top: y, left: x, position: "absolute", display: "inline-block"}}>
      <div style={{position:"relative", width: '100%', height: '100%', overflow: "hidden"}}>
        {!isDead &&
          <>
          <div style={{backgroundColor:actualColor, borderTopLeftRadius:50, borderTopRightRadius:50, width: '100%', height: '80%', top: '50px'}}>
          </div>

          <PacMan start={true} mouthOpenPercent={100} direction="down" width="42%" height="42%" style={{position: 'absolute', top: '67%', left: '-4%'}} color={actualColor} />
          <PacMan start={true} mouthOpenPercent={100} direction="down" width="42%" height="42%" style={{position: 'absolute', top: '67%', left: '30%'}} color={actualColor} />
          <PacMan start={true} mouthOpenPercent={100} direction="down" width="42%" height="42%" style={{position: 'absolute', top: '67%', left: '63%'}} color={actualColor} />
          </>
        }
        <PacMan mouthOpenPercent={100} width="20%" height="20%" direction={direction} style={{position: 'absolute', top: '20%', left: '18%'}} color={"white"} />
        <PacMan mouthOpenPercent={100} width="20%" height="20%" direction={direction} style={{position: 'absolute', top: '20%', left: '58%'}} color={"white"} />                    
        {isScared && !isDead &&
          <GhostMouth start={true} isScared={isScared} style={{position: 'absolute', top: '55%', left: '3%', width: '90%', height: '15%', zIndex:1000}} />        
        }
      </div>      
    </div>
  );
};