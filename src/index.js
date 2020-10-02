import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <div>
    <h1>Hotload this sucka</h1>
    <div>Hello form Webpack!</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
