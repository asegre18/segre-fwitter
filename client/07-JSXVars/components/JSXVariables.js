import React from "react";






function JSXVariables(props) {
  console.log(props);
  props.myFn();



  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1
            style={{ color: props.name === 'Manny' ? 'red' : 'blue'}}
          >
            Hi! My name is {props.name}</h1>
          <h2>My name has  letters {props.name.length}</h2>
          <h2>I think React {props.thoughts}</h2>
          <h3>Name Obj {props.myObj.name}</h3>
          <h4>{props.num1 + props.num2}</h4>
          <h4>{props.myArr}</h4>
          { props.magic ? <h1>MAGIC!!!!</h1> : <h2>No magic!</h2>}
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
