import React from "react";
import ReactDOM from "react-dom";
import NumberList from './NumberList'
import "./index.scss";

const rootElem = document.querySelector("#root");
const numbers = [4, 5, 68, 91, 26]

ReactDOM.render(<NumberList numbers={numbers} />, rootElem);