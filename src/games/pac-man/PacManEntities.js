import Matter from "matter-js"
import { WorldInsert } from "./WorldInsert";
import { PacMan } from "./PacMan";
import { Ghost } from "./Ghost";

export const PacManEntities = (windowHeight, windowWidth) => {    
    let engine = Matter.Engine.create({ 
        enableSleeping: false })

    let world = engine.world

    engine.gravity.y = 0.0;
    engine.gravity.x = 0.0;
    
    return {
        physics: { engine, world },
        windowHeight: windowHeight,
        windowWidth: windowWidth,

        PacMan: WorldInsert(
            world, 
            { x: 50, y: 300 }, 
            { height: 40, width: 40 }, 
            { start: true },
            <PacMan />),

        Ghost1: Ghost({direction:"right", color:"red", start: true}),
        Ghost2: Ghost({direction:"left", color:"blue", start: true}),
        Ghost3: Ghost({direction:"up", color:"green", start: true}),
        Ghost4: Ghost({direction:"down", color:"pink", start: true}),
    }
}