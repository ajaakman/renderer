import React from "react";
import ReactDOM from "react-dom";
import { WebGL } from "./WebGL.ts";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<h1>Loading...</h1>, document.getElementById("root"));

WebGL.onRuntimeInitialized = () => {
  ReactDOM.render(
    <canvas
      className="emscripten"
      id="canvas"
      onContextMenu={event => event.preventDefault()}
      //onClick={WebGL.requestFullScreen(true, false)}
    ></canvas>,
    document.getElementById("root")
  );
  WebGL.canvas = document.getElementById("canvas");
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
