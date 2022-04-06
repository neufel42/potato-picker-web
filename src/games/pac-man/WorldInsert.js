import Matter from 'matter-js'

export const WorldInsert = (world, pos, size, props, renderer) => {
   const initialObject = Matter.Bodies.rectangle(
       pos.x,
       pos.y,
       size.width,
       size.height, {friction: 0, frictionAir: 0, frictionStatic: 0, isSensor: true}
   );
   Matter.World.add(world, initialObject)   

   return {
       body: initialObject,
       pos,
       ...props,
       renderer: renderer
   }
}