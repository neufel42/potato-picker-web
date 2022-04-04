const PacManControls = (entities, { input }) => {
    //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
    //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
    //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
    //-- That said, it's probably worth considering performance implications in either case.
  
    const { payload } = input.find(x => (x.name === "onMouseDown" || x.name === "onKeyDown")) || {};
    
    if (payload) {      
      const board = entities["board"];
      const pacman1 = entities["pacman1"];
      const ghost1 = entities["ghost1"];
      const ghost2 = entities["ghost2"];
      const ghost3 = entities["ghost3"];
      const ghost4 = entities["ghost4"];
      const ghost5 = entities["ghost5"];
      
      let key = null;
      if (payload.type === "keydown")
      {        
        key = payload.key;
      }
      else if (payload.type === "mousedown")
      {        
        key = payload.target.dataset.column;      
      }
      console.log("COLUMN", key);
      switch (key) {
        case "ArrowUp":
          pacman1.direction = "up";
          ghost1.direction = "up";
          ghost2.direction = "up";
          ghost3.direction = "up";
          ghost4.direction = "up";
          ghost5.direction = "up";
          break;
        case "ArrowDown":
          pacman1.direction = "down";
          ghost1.direction = "down";
          ghost2.direction = "down";
          ghost3.direction = "down";
          ghost4.direction = "down";
          ghost5.direction = "down";
          break;
        case "ArrowLeft":
          pacman1.direction = "left";
          ghost1.direction = "left";
          ghost2.direction = "left";
          ghost3.direction = "left";
          ghost4.direction = "left";
          ghost5.direction = "left";
          break;
        case "ArrowRight":
          pacman1.direction = "right";
          ghost1.direction = "right";
          ghost2.direction = "right";
          ghost3.direction = "right";
          ghost4.direction = "right";
          ghost5.direction = "right";
          break;
      }
      
    }
  
    return entities;
  };
  
  export { PacManControls };