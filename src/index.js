import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data";
// import App from "./App";
import ProjectCard from "./projectCard";
import Intro from "./intro";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ProjectCard dataObject={data[0]} /> */}
    <Intro />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
