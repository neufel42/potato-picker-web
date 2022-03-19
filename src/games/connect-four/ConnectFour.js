import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
import { BoardRenderer } from "./BoardRenderer";
import { SpotRenderer } from "./SpotRenderer";
import { SpotSelect } from "./SpotSelect"

export default class ConnectFour extends PureComponent {

  render() {
    return (
      <GameEngine
        style={{ width: "100vw", height: "100vh", backgroundColor: "blue" }}
        systems={[
          SpotSelect
        ]}
        entities={{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
          board: { renderer: <BoardRenderer />},
          spot1: { x: 200,  y: 200, color: "#00ff00", renderer: <SpotRenderer />}
        }}>

      </GameEngine>
    );
  }
}