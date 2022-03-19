const SpotSelect = (entities, { input }) => {
    //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
    //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
    //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
    //-- That said, it's probably worth considering performance implications in either case.
  
    const { payload } = input.find(x => x.name === "onMouseDown") || {};
  
    if (payload) {
      const spot1 = entities["spot1"];
  
      spot1.x = payload.pageX;
      spot1.y = payload.pageY;
    }
  
    return entities;
  };
  
  export { SpotSelect };