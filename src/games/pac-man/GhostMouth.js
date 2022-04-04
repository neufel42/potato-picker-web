import React, { useEffect, useState } from "react";

export const GhostMouth = (props) => {
  const [mouthOpenPercent, setMouthOpenPercent] = useState(props.mouthOpenPercent || 0);
  const [mouthOpening, setMouthOpening] = useState(false); // strats open and closes
  const isScared = props.isScared || false;
  const width = props.width || '400px';
  const height = props.height || '100px';  
  const color = props.color || 'red';
  const start = props.start || true;

  const firstNodePosition = isScared ? 200 * (mouthOpenPercent / 100) : 100;
  const secondNodePosition = isScared ? 200 * ((100 - mouthOpenPercent) / 100) : 100;  

  useEffect(
    () => {
      if (!start || !isScared) {  // If not scared nothing to animate
        return; //have not started yet
      }

      let increment = 5;
      
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
        else if (newPercent > 100)
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
    <div style={{height:height, width, width}} {...props}>
      <svg style={{width: '100%', height: '100%'}} viewBox="0 0 800 200">
        <path d={`M -33.0 ${firstNodePosition}
        L 53.6	${secondNodePosition}
        140.2	${firstNodePosition}
        226.8	${secondNodePosition}
        313.4	${firstNodePosition}
        400.0	${secondNodePosition}
        486.6	${firstNodePosition}
        573.2	${secondNodePosition}
        659.8	${firstNodePosition}
        746.4	${secondNodePosition}
        833.0	${firstNodePosition}`} 
        fill="none" stroke={color} strokeWidth="15"/>
      </svg>
    </div>
  );
};