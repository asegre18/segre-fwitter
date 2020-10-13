import React from 'react';

const ListComponent = (props) => (
  <ul>
    {
      props.data.map((someData, index) => {
        console.log(someData);
        return (
          <div key={index}>
            <h1>Title: {someData.title}</h1>
            { someData.body ? <h1>Body: {someData.body}</h1> : null}
            { someData.thumbnailUrl ? <img src={someData.thumbnailUrl}/> : null}
          </div>
        )
      })
    }
  </ul>
);

export default ListComponent;
