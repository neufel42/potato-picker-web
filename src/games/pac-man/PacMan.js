import React, { useEffect, useState, useRef } from "react";
import useSound from "use-sound";
import deathSound from './PacManDeath.mp3';
//https://orangefreesounds.com/pacman-death-sound/

export const PacMan = (props) => {

  const start = props.start || false;
  const [mouthOpenPercent, setMouthOpenPercent] = useState(props.mouthOpenPercent || 0);
  const [mouthOpening, setMouthOpening] = useState(false); // strats open and closes
  const [isDieing, setIsDieing] = useState(false); // strats open and closes
  const direction = props.direction || "right";
  const color = props.color || 'yellow';
  const width = props.width || '100px';
  const height = props.height || '100px';    
  let additionalRotation = 0;

  const isFirstDeath = useRef(true);
  const [playDeath] = useSound(deathSound);

  if (isDieing && isFirstDeath.current) {
    isFirstDeath.current = false;
    playDeath();
  }
  

  switch(direction)
  {
    case "right":
      additionalRotation = 0;
      break;
    case "left":
      additionalRotation = 180;
      break;
    case "up":
      additionalRotation = -90;
      break;
    case "down":
      additionalRotation = 90;
      break;
  }

  // full open is 75%
  const slicePercent = 100 - (25 * (mouthOpenPercent / 100.0));
  let rotate = 45 * mouthOpenPercent / 100; // when the slicePercent is 75 rotate is 45 (quarter turn)

  let additionalTransform = "";
  if (additionalRotation !== 0)
  {
    additionalTransform = " translate(10, 10), rotate(" + additionalRotation + "), translate(-10, -10)";
  }  

  useEffect(
    () => {
      if (!start) {
        return; //have not started yet
      }

      if (isDieing && mouthOpenPercent >= 400) {
        // Dead and all the way disappeared
        return;
      }

      let increment = 5;
      if (isDieing)
      {
        increment = 10; // die faster
      }

      let timer1 = setTimeout( () => {
        let newPercent = mouthOpenPercent - increment;
        if (mouthOpening)
        {
          newPercent = mouthOpenPercent + increment;
        }    
        if (newPercent <= 0)
        {
          setMouthOpening(true);
        }
        else if (newPercent > 100 && !isDieing)
        {
          setMouthOpening(false);
        }
        else if (newPercent > 400 && isDieing)
        {
          setMouthOpening(false);
        }
    
        setMouthOpenPercent(newPercent);
      }, 30);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        if (timer1)
        {
          clearTimeout(timer1);
        }
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    [mouthOpenPercent, mouthOpening]
  );  

  return (
    <svg 
      onClick={() => setIsDieing(true)} 
      style={{width: width, height: height, position: "absolute", ...props.style}}        
      viewBox="0 0 20 20"
      >
      <circle r="5" cx="10" cy="10" fill="transparent"
              stroke={color}
              strokeWidth="10"
              strokeDasharray={"calc(" + slicePercent + " * 31.4 / 100) 31.4"}
              transform={"translate(10, 10), rotate(" + rotate + "), translate(-10, -10)" + additionalTransform} />
    </svg>            
  );
};