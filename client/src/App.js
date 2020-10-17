import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
import Navbar from './components/Navbar';
import About from './components/About';
import Discover from './components/Discover';
import Search from './components/Search';
import User from './components/User';
// import Contact from "./components/pages/Contact";

function App() {
  return (
     <Router>
       <Navbar/>
       <Route exact path="/" component={About}/>
       <Route exact path="/discover" component={Discover}/>
       <Route exact path="/search" component={Search}/>
       <Route exact path="/user" component={User}/>
       <Route exact path='/users/user/:userId'>
         <h1>I AM USER ID COMPONENT</h1>
       </Route>
     </Router>
  );
}

export default App;
