import React, { useState } from 'react';
import JSXVariables from './components/JSXVariables';
import ListComponent from './components/List';

// Functional components had no way to keep track of state
// Nor create them
// function App() {
//   const [ name, setName ] = useState('Manny');
//   const [ thoughts, setThoughts ] = useState('Too much Magic');
//   return <JSXVariables name={name} thoughts={thoughts} />;
// }
// Class based Container

class App extends React.Component {


  handleIncrement = () => {
    console.log('I AM INCREMENTING');
    this.setState({
      counter: this.state.counter + 1,
      name: this.state.counter % 2 === 0 ? 'Emmanuel' : 'Manny',
    });
    console.log(this.state.counter);
  };

  //Lifecycle method in React
  // componentDidMount only fires 1 time. It never fires again
  // unless u refresh the page
  componentDidMount() {
    // console.log('inside componentDidMount');
    fetch('https://pokeapi.co/api/v2/generation/1')
      .then(response => response.json())
      .then(data => {
        console.log(data.pokemon_species);
      });
  }

  // Ima passdown a prop to JSX variables component called Name
  // And thoughtsAboutReact
  render() {
    console.log('Inside render');

    return (
      <div>
        <JSXVariables
          name={this.state.name}
          thoughts={this.state.thoughtsAboutReact}
          num1={1}
          num2={2}
          magic
          lastName='Jucaban'
          myObj={this.state}
          myArr={[0, 1, 2, 3, 4, 5]}
          myFn={() => console.log('hello world')}
        />
        <h1>I AM Counter: {this.state.counter}</h1>
        <button
          onClick={this.handleIncrement}>
          Increment
        </button>
      </div>
    );
  }
}

export default App;
