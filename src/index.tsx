import React from "react";
import ReactDOM from "react-dom";
import Games from "./Components/Games"
import "./index.css"

export const App = () => {
  return (
    <div>
      <h1>On Going Games</h1>
      <Games />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
