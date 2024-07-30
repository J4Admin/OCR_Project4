import React from "react";
import "../styles/Main.scss";

function Main(props) {
  const children = props;
  return <main className="main">{...props.children}</main>;
}

export default Main;
