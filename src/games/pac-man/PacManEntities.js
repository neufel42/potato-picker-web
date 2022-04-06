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
            { label: "PacMan", start: true },
            <PacMan />),

        GhostInky: WorldInsert(
            world, 
            { x: 150, y: 300 }, 
            { height: 40, width: 40 }, 
            { label: "GhostInky", start: true, color: 'red', direction: 'right', isScared: true },
            <Ghost />),

        GhostPinky: WorldInsert(
            world, 
            { x: 200, y: 300 }, 
            { height: 40, width: 40 }, 
            { label: "GhostPinky", start: true, color: 'pink', direction: 'right', isScared: true },
            <Ghost />),
        
        GhostBlinky: WorldInsert(
            world,
            { x: 250, y: 300 },
            { height: 40, width: 40 },
            { label: "GhostBlinky", start: true, color: 'blue', direction: 'right', isScared: true },
            <Ghost />),

        GhostClyde: WorldInsert(
            world,
            { x: 300, y: 300 },
            { height: 40, width: 40 },
            { label: "GhostClyde", start: true, color: 'orange', direction: 'right' },
            <Ghost />),

    }
}