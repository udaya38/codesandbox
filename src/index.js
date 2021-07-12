import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
const slides = [
  {
    title: "Starting page",
    text: "Welcome to the page!!!!"
  },
  {
    title: "first page",
    text: "This is the first page"
  },
  {
    title: "second page",
    text: "This is the second page"
  },
  {
    title: "third page",
    text: "This is the third page"
  },
  {
    title: "Last page",
    text: "Thank you!!!!!"
  }
];
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App slides={slides} />
  </StrictMode>,
  rootElement
);
