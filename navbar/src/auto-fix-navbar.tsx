import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import Navbar from "./navbar";

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Navbar
});

export const { bootstrap, mount, unmount } = lifecycles;
