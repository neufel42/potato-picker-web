import Matter from "matter-js"
import { WorldInsert, WorldInsertPolygon } from "./WorldInsert";
import { PacMan } from "./PacMan";
import { Ghost } from "./Ghost";
import { Wall } from "./Wall";

export const PacManEntities = (windowHeight, windowWidth) => {    
    let engine = Matter.Engine.create({ 
        enableSleeping: false })

    let world = engine.world

    engine.gravity.y = 0.0;
    engine.gravity.x = 0.0;    

    const boardWidth = windowWidth;
    const boardHeight = windowHeight;
    const wallThickness = 10;
    
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

        WallLeft: WorldInsertPolygon(
                world,
                { x: 0, y: 0 },
                [
                    { x: 0, y: 0 },
                    { x: wallThickness, y: 0 },
                    { x: wallThickness, y: boardHeight },
                    { x: 0, y: boardHeight }
                ],
                {   label: "WallLeft",
                    start: true, 
                    color: 'yellow',
                    isStatic: true,
                    isSensor: false,

                },
                <Wall />),
        
        WallRight: WorldInsertPolygon(
                world,  
                { x: boardWidth - wallThickness, y: 0 },
                [
                    { x: boardWidth, y: 0 },
                    { x: boardWidth - wallThickness, y: 0 },
                    { x: boardWidth - wallThickness, y: boardHeight },
                    { x: boardWidth, y: boardHeight }
                ],
                {   label: "WallRight",
                    start: true,
                    color: 'yellow',
                    isStatic: true, 
                    isSensor: false,
                },
                <Wall />),
        WallTop: WorldInsertPolygon(
                world,
                { x: 0, y: 0 },
                [
                    { x: 0, y: 0 },
                    { x: boardWidth, y: 0 },
                    { x: boardWidth, y: wallThickness },
                    { x: 0, y: wallThickness }
                ],
                {   label: "WallTop",
                    start: true,
                    color: 'yellow',
                    isStatic: true,
                    isSensor: false,
                },
                <Wall />),
        WallBottom: WorldInsertPolygon(
                world,
                { x: 0, y: boardHeight - wallThickness },
                [
                    { x: 0, y: boardHeight },
                    { x: boardWidth, y: boardHeight },
                    { x: boardWidth, y: boardHeight - wallThickness },
                    { x: 0, y: boardHeight - wallThickness }
                ],
                {   label: "WallBottom",
                    start: true,
                    color: 'yellow',
                    isStatic: true,
                    isSensor: false,
                },
                <Wall />),

        
                

    }
}