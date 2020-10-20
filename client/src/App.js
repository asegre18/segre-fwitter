import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import NavTabs from "./components/NavTabs";
import Navbar from './components/Navbar';
import About from './components/About';
import Discover from './components/Discover';
import Search from './components/Search';

import { UserContainer } from './pages/User';

// import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <Navbar/>
      <Route path="/discover" component={Discover}/>
      <Route path="/search" component={Search}/>
      <Route path="/users" component={UserContainer}/>
      <Route exact path="/" component={About}/>
    </Router>
  );
}

export default App;
