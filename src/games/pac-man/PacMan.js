import React, { useEffect, useState } from "react";

export const PacMan = (props) => {

  const [mouthOpenPercent, setMouthOpenPercent] = useState(props.mouthOpenPercent || 100);
  const [mouthOpening, setMouthOpening] = useState(false); // strats open and closes
  const [isDieing, setIsDieing] = useState(false); // strats open and closes
  const color = props.color || 'yellow';
  const width = '100px';
  const height = '100px';  

  // full open is 75%
  const slicePercent = 100 - (25 * (mouthOpenPercent / 100.0));
  let rotate = 45 * mouthOpenPercent / 100; // when the slicePercent is 75 rotate is 45 (quarter turn)

  if (isDieing)
  {
    // Why 85?  seems about right
    rotate = 85 * mouthOpenPercent / 400; // when the slicePercent is 75 rotate is 45 (quarter turn)    
  }

  useEffect(
    () => {
      if (isDieing && mouthOpenPercent >= 400)
      {
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
    <svg onClick={() => setIsDieing(true)} style={{width: width, height: height}} viewBox="0 0 20 20">
      <circle r="5" cx="10" cy="10" fill="transparent"
              stroke={color}
              stroke-width="10"
              stroke-dasharray={"calc(" + slicePercent + " * 31.4 / 100) 31.4"}
              transform={"translate(10, 10), rotate(" + rotate + "), translate(-10, -10)"} />
    </svg>        
  );
};