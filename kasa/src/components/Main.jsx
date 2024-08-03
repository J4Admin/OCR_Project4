import React, { Children } from "react";

import "../styles/Main.scss";

function Main(props) {
  const children = props.children;
  console.log("voici children! ", children);
  return <main className="main">{...props.children}</main>;
}

export default Main;
