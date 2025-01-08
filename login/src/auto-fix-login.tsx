import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import Login from "./login";

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Login
});

export const { bootstrap, mount, unmount } = lifecycles;
