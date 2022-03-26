import Matter from "matter-js"
import Bird from "../components/Bird";
import Floor from "../components/Floor";
import Obstacle from "../components/Obstacle";

import { getPipeSizePosPair } from "../utils/random";

export const entities = (windowHeight, windowWidth) => {    
    let engine = Matter.Engine.create({ enableSleeping: false })

    let world = engine.world

    engine.gravity.y = 0.4;

    const pipeSizePosA = getPipeSizePosPair(windowHeight, windowWidth)
    const pipeSizePosB = getPipeSizePosPair(windowHeight, windowWidth, windowWidth * 0.9)
    return {
        physics: { engine, world },
        windowHeight: windowHeight,
        windowWidth: windowWidth,

        Bird: Bird(world, 'green', { x: 50, y: 300 }, { height: 40, width: 40 }),

        ObstacleTop1: Obstacle(world, 'ObstacleTop1', 'red', pipeSizePosA.pipeTop.pos, pipeSizePosA.pipeTop.size),
        ObstacleBottom1: Obstacle(world, 'ObstacleBottom1', 'blue', pipeSizePosA.pipeBottom.pos, pipeSizePosA.pipeBottom.size),

        ObstacleTop2: Obstacle(world, 'ObstacleTop2', 'red', pipeSizePosB.pipeTop.pos, pipeSizePosB.pipeTop.size),
        ObstacleBottom2: Obstacle(world, 'ObstacleBottom2', 'blue', pipeSizePosB.pipeBottom.pos, pipeSizePosB.pipeBottom.size),

        Floor: Floor(world, 'green', { x: windowWidth / 2, y: windowHeight }, { height: 50, width: windowWidth })
    }
}