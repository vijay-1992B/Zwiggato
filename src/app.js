import React from "react";
import ReactDOM from "react-dom/client";

const App = function () {
  return (
    <>
        <h1 className = "text-3xl font-bold underline bg-red-500">
    Hello world!
  </h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
