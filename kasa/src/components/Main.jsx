import React from "react";
import "../styles/Main.scss";

function Main(props) {
  const children = props;
  console.log("voici les props:", props);
  return <main className="main">{...props.children}</main>;
}

export default Main;
