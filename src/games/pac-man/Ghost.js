import React, { useEffect, useState } from "react";
import { GhostMouth } from "./GhostMouth";
import { PacMan } from "./PacMan";

export const Ghost = (props) => {
  const width = props.width || '100px';
  const height = props.height || '100px';  
  const color = props.color || 'red';
  const scaredColor = props.scaredColor || 'purple';
  const direction = props.direction || 'right';
  const isScared = props.isScared || false;

  const actualColor = isScared ? scaredColor : color;

  return (
    <div style={{width: width, height: height, display: "inline-block"}}>
      <div style={{position:"relative", width: '100%', height: '100%', overflow: "hidden"}}>
        <div style={{backgroundColor:actualColor, borderTopLeftRadius:50, borderTopRightRadius:50, width: '100%', height: '80%', top: '50px'}}>
        </div>

        <PacMan start={true} mouthOpenPercent={100} direction="down" width="42%" height="42%" style={{position: 'absolute', top: '67%', left: '-4%'}} color={actualColor} />
        <PacMan start={true} mouthOpenPercent={100} direction="down" width="42%" height="42%" style={{position: 'absolute', top: '67%', left: '30%'}} color={actualColor} />
        <PacMan start={true} mouthOpenPercent={100} direction="down" width="42%" height="42%" style={{position: 'absolute', top: '67%', left: '63%'}} color={actualColor} />
        
        <PacMan mouthOpenPercent={100} width="20%" height="20%" direction={direction} style={{position: 'absolute', top: '20%', left: '18%'}} color={"white"} />
        <PacMan mouthOpenPercent={100} width="20%" height="20%" direction={direction} style={{position: 'absolute', top: '20%', left: '58%'}} color={"white"} />            
        {isScared &&
          <GhostMouth start={true} isScared={isScared} style={{position: 'absolute', top: '55%', left: '3%', width: '90%', height: '15%', zIndex:1000}} />        
        }
      </div>      
    </div>
  );
};