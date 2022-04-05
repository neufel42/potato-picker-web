import Matter from "matter-js";

export const PacManPhysics = (entities, options) => {
    const { input, touches, time, dispatch } = options;
    const windowHeight = entities.windowHeight;
    const windowWidth = entities.windowWidth;
    
    let engine = entities.physics.engine    

    if (touches) // touches must be only react-native
    {
        touches.filter(t => t.type === 'press')
            .forEach(t => {
                Matter.Body.setVelocity(entities.Bird.body, {
                    x: 0,
                    y: -8
                })
            });
    }
    else {
        if (input.length > 0) {
            input.forEach(key => {
                console.log("COLUMN", key.name);
            });
        }
        if (input.keydown){
            console.log("input keydown", input.keydown);
        }

        const { payload } = input.find(x => (x.name === "onMouseDown" || x.name === "onKeyDown")) || {};
        if (payload)
        {
            console.log("Key", payload.key);
            let key = null;
            if (payload.type === "keydown")
            {        
                key = payload.key;
            }

            let xVel = 0;
            let yVel = 0;
            
            switch (key) {
                case "ArrowUp":
                    entities.PacMan.direction = "up";
                    xVel = -4;
                    yVel = 0;
                    break;
                case "ArrowDown":
                    entities.PacMan.direction = "down";
                    xVel = 4;
                    yVel = 0;
                    break;
                case "ArrowLeft":
                    entities.PacMan.direction = "left";
                    xVel = 0;
                    yVel = -4;                    
                    break;
                case "ArrowRight":
                    entities.PacMan.direction = "right";
                    xVel = 0;
                    yVel = 4;
                    break;
            }
            
            Matter.Body.setVelocity(entities.PacMan.body, {
                x: xVel,
                y: yVel
            });
        }
    }    

    Matter.Engine.update(engine, time.delta)

    /*
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
    */

    Matter.Events.on(engine, 'collisionStart', (event) => {
        dispatch({ type: 'game_over' })
    })
    return entities;
}