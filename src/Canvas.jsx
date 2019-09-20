import React, { Component } from "react";
import { WebGL } from "./WebGL.ts";

class Canvas extends Component {
  componentDidMount() {
    WebGL.canvas = document.getElementById("canvas");
  }

  render() {
    return (
      <canvas
        className="emscripten"
        id="canvas"
        onContextMenu={event => event.preventDefault()}
        //onClick={WebGL.requestFullScreen(true, false)}
      ></canvas>
    );
  }
}

export default Canvas;
