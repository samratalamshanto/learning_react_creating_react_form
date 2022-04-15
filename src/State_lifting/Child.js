import React from "react";

export default function Child(props) {
  const ChildData = "I am the child Data @ child js";

  props.handleChild(ChildData);

  return (
    <div>
      <h1>State Lifting</h1>I am from Child Js
      <div>
        <br />
        Name: {props.name} <br />
        <h1>data from parent: {props.parentData}</h1>
        <h2>Data in Child : {ChildData}</h2>
      </div>
    </div>
  );
}
