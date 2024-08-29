import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import Body from "./components/Body";


const App = function () {
  return (
    <>
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
