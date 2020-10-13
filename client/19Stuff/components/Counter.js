import React from 'react';

// Functional Components
// Presentational components

// Class based components
// All containers are basically class based components
// By extending the React.Component class, Counter inherits functionality from it

class Counter extends React.Component {
  // Setting the initial state of the Counter component
  // Is some data that the component uses to keep track of things
  // Such as data from API calls
  // Whether or not a view should be shown
  // Determines whether or not a user is logged?
  state = {
    count: 0,
    name: 'manny',
    nums: [0,1,2,3,4,5],
    manny: {
      hobby: 'videogames',
      hungry: true,
      happy: true,
      sad: false,
    }
  };

  // handleIncrement increments this.state.count by 1
  handleDecrement = (event) => {
    event.preventDefault();
    this.setState({
      count: this.state.count - 1,
    });
  };

  handleIncrement = (event) => {
    event.preventDefault();

    this.setState({
      nums: [...this.state.nums, this.state.count],
      count: this.state.count + 1,
      manny: {
        ...this.state.manny,
        hobby: 'eating',
        hungry: false
      }
    });
    // We always use the setState method to update a component's state
    // this.state.counter++;
    // The key in the object to this.setState
    // will be the state that you want to update
    // the value for the key will be what value
    // do you want to change the state to
    // this.setState({
    //   count: this.state.count +  1,
    //   name: 'Emmanuel',
    // });
  };

  handleRemoveElement = () => {
    const newArr = [...this.state.nums];

    newArr.shift();
    this.setState({ nums: newArr });
  };
  // The render method returns the JSX that should be rendered
  render() {
    console.log('I have rendered');
    console.log(this.state.manny);
    return (
      <div className="card text-center">
        <form action="">
          <button type='submit' onClick={this.handleIncrement}>Submit</button>
        </form>
        {this.state.manny.hobby}
        <div className="card-header bg-primary text-white">
          Click Counter!
          {this.state.name}
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <button
            className="btn btn-primary"
            onClick={this.handleIncrement}>
            Increment
          </button>
          <button
            className="btn btn-primary"
            onClick={this.handleDecrement}>
            Decrement
          </button>
          <button
            className="btn btn-primary"
            onClick={this.handleRemoveElement}>
            Remove Element
          </button>
          {this.state.nums}
        </div>
      </div>
    );
  }
}

export default Counter;
