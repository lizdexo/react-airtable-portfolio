import React from "react";
import ReactDOM from "react-dom";
import "./sass/index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));









// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

//
// Viewport Fix
//


let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
