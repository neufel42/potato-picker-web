const SpotSelect = (entities, { input }) => {
    //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
    //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
    //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
    //-- That said, it's probably worth considering performance implications in either case.
  
    const { payload } = input.find(x => x.name === "onMouseDown") || {};

    //input.forEach((item) => {
    //  console.log("OUTSIDE!!!", item);
    //});
    
  
    if (payload) {
      const board = entities["board"];
      const rows = parseInt(board.rows);
      
      const column = payload.target.dataset.boardColumn;

      // Find what row we can add to
      for(let r = 0; r < rows; r++)
      {
        let spotName = "spot" + r + "-" + column;
        console.log("SPOT NAME", spotName);
        const spot = entities[spotName];
        if (!spot.isSelected)
        {
          spot.color = "#000000";
          spot.isSelected = true;
          break;
        }        
      }      
    }
  
    return entities;
  };
  
  export { SpotSelect };