import React, { PureComponent } from "react";

class SpotRenderer extends PureComponent {
  render() {
    const size = 100;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;
    const color = this.props.color;
    return (
      <div style={{ position: "absolute", width: size, height: size, backgroundColor: color, left: x, top: y }} />
    );
  }
}

export { SpotRenderer };