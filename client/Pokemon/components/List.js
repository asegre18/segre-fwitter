import React from "react";

function List({ groceries }) {
  return (
    <ul className="list-group">
      Using the map method, render one li element displaying the text property of each grocery
      object.
      {
        groceries.map(({ id, name,}) => (
          <li
            key={id}
            style={{
              color: id % 2 !== 0 ? 'blue' : 'red'
            }}
          >{name}</li>
        ))
      }
    </ul>
  )
}

export default List;
