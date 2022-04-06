import React, { useEffect, useState, useRef } from "react";
import useSound from "use-sound";

 //https://orangefreesounds.com/pacman-death-sound/
// free for non commercial use
import deathSound from './PacManDeath.mp3';


export const PacMan = (props) => {
  const width = props.body ? props.body.bounds.max.x - props.body.bounds.min.x : props.width || 0;
  const height = props.body ? props.body.bounds.max.y - props.body.bounds.min.y: props.height || 0;

  const x = props.body ? props.body.position.x - width /2 : props.x || 0;
  const y = props.body ? props.body.position.y - height /2 : props.y || 0;  

  if (props.body && !props?.collisionFilter) {
    props.body.label = props.label;
    props.body.parentProps = props;
    props.body.collisionFilter.category = 0x0002;
    props.body.collisionFilter.mask = 0x0001;
  }

  const start = props.start || false;
  const [mouthOpenPercent, setMouthOpenPercent] = useState(props.mouthOpenPercent || 0);
  const [mouthOpening, setMouthOpening] = useState(false); // strats open and closes
  const isDead = props.isDead || false;
  const direction = props.direction || "right";
  const color = props.color || 'yellow';
  //const width = props.width || '100px';
  //const height = props.height || '100px';    
  //const x = props.x || 0;
  //const y = props.y || 0;
  let additionalRotation = 0;

  const isFirstDeath = useRef(true);
  const [playDeath] = useSound(deathSound);  

  if (isDead && isFirstDeath.current) {
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
        console.log("NOT START");
        return; //have not started yet
      }

      if (isDead && mouthOpenPercent >= 400) {
        // Dead and all the way disappeared
        return;
      }

      let increment = 5;
      if (isDead)
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
        else if (newPercent > 100 && !isDead)
        {
          setMouthOpening(false);
        }
        else if (newPercent > 400 && isDead)
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
      style={{width: width, height: height, top: y, left: x, position: "absolute", ...props.style}}        
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
