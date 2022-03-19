const SpotSelect = (entities, { input }) => {
    //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
    //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
    //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
    //-- That said, it's probably worth considering performance implications in either case.
  
    const { payload } = input.find(x => x.name === "onMouseDown") || {};
    
    //input.forEach((item) => {
    //  console.log("OUTSIDE!!!", item);
    //});

    const calcWinner = () => {
      const board = entities["board"];
      const rows = parseInt(board.rows);
      const columns = parseInt(board.columns);
      
      const neededForWin = 4;
      // Calc winner vertical
      for(let r = 0; r < rows; r++)
      {
        for(let c = 0; c < columns; c++)
        { 
          let spotName = "spot" + r + "-" + c;
          const spot = entities[spotName];
          if (!spot.isSelected)
          {
            // Nothing to do .. it isn't selected so move on
            continue;
          }        

          if (checkVerticalWin(spot, neededForWin)) {
            return true;
          }          

          if (checkHorizontalWin(spot, neededForWin)) {
            return true;
          }          
        }
      }            


      return false;
    }

    const checkVerticalWin = (spot, neededForWin) => {      
      if (!spot.isSelected)
      {
        return false;
      }

      let counter = 1;


      for (let r = spot.row + 1; r < spot.row + neededForWin; r++) {
        // return false as soon as we get an invalid spot
        let spotName = "spot" + r + "-" + spot.column;
        const nextSpot = entities[spotName];

        if (!nextSpot) {
          return false;
        }

        if (!nextSpot.isSelected) {
          return false;
        }        

        if (nextSpot.player !== spot.player) {
          return false;
        }        
      }

      return true;
    }


    const checkHorizontalWin = (spot, neededForWin) => {      
      if (!spot.isSelected)
      {
        return false;
      }

      let counter = 1;


      for (let c = spot.column + 1; c < spot.column + neededForWin; c++) {
        // return false as soon as we get an invalid spot
        let spotName = "spot" + spot.row + "-" + c;
        const nextSpot = entities[spotName];

        if (!nextSpot) {
          return false;
        }

        if (!nextSpot.isSelected) {
          return false;
        }        

        if (nextSpot.player !== spot.player) {
          return false;
        }        
      }

      return true;
    }
    
  
    if (payload) {      
      const board = entities["board"];
      const player1 = entities["player1"];
      const player2 = entities["player2"];
      const rows = parseInt(board.rows);
      let activePlayer = null;

      if (player1.isWinner || player2.isWinner)
      {
        return entities;
      }

      if (player1.isActive) {
        activePlayer = player1;
      }
      else {
        activePlayer = player2;
      }
      
      const column = payload.target.dataset.column;      

      if (column)
      {
        // Find what row we can add to
        for(let r = 0; r < rows; r++)
        {
          let spotName = "spot" + r + "-" + column;
          
          const spot = entities[spotName];
          if (!spot.isSelected)
          {
            spot.color = activePlayer.color;
            spot.isSelected = true;
            spot.player = activePlayer.entityName;

            // since only 2 players just toggle them
            player1.isActive = !player1.isActive;
            player2.isActive = !player2.isActive;

            if (calcWinner())
            {
              activePlayer.isWinner = true;              
            }

            break;
          }        
        }      
      }
    }
  
    return entities;
  };
  
  export { SpotSelect };