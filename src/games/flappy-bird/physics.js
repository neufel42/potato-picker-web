import Matter from "matter-js";
import { getPipeSizePosPair } from "./utils/random";

const Physics = (entities, options) => {
    const { input, touches, time, dispatch } = options;
    const windowHeight = entities.windowHeight;
    const windowWidth = entities.windowWidth;
    
    let engine = entities.physics.engine
    //console.log("OPTIONS", options);        

    if (touches)
    {
        touches.filter(t => t.type === 'press')
            .forEach(t => {
                Matter.Body.setVelocity(entities.Bird.body, {
                    x: 0,
                    y: -8
                })
            });
    }
    
    const { payload } = input.find(x => (x.name === "onMouseDown" || x.name === "onKeyPress")) || {};
    console.log("PAYLOAD", payload);
    if (payload)
    {
        Matter.Body.setVelocity(entities.Bird.body, {
            x: 0,
            y: -8
        });
    }

    Matter.Engine.update(engine, time.delta)

    for (let index = 1; index <= 2; index++) {

        if (entities[`ObstacleTop${index}`].body.bounds.max.x <= 50 && !entities[`ObstacleTop${index}`].point) {
            entities[`ObstacleTop${index}`].point = true
            dispatch({ type: 'new_point' })

        }


        if (entities[`ObstacleTop${index}`].body.bounds.max.x <= 0) {
            const pipeSizePos = getPipeSizePosPair(windowHeight, windowWidth, windowWidth * 0.9);

            Matter.Body.setPosition(entities[`ObstacleTop${index}`].body, pipeSizePos.pipeTop.pos)
            Matter.Body.setPosition(entities[`ObstacleBottom${index}`].body, pipeSizePos.pipeBottom.pos)

            entities[`ObstacleTop${index}`].point = false
        }

        Matter.Body.translate(entities[`ObstacleTop${index}`].body, { x: -3, y: 0 })
        Matter.Body.translate(entities[`ObstacleBottom${index}`].body, { x: -3, y: 0 })
    }


    Matter.Events.on(engine, 'collisionStart', (event) => {
        dispatch({ type: 'game_over' })
    })
    return entities;
}
export default Physics