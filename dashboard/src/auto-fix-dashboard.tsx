import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import Dashboard from "./dashboard";

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Dashboard
});

export const { bootstrap, mount, unmount } = lifecycles;
