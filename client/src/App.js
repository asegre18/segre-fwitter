import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
import Navbar from './components/Navbar';
import About from './components/About';
import Discover from './components/Discover';
import Search from './components/Search';
import User from './components/User';
import { UserView } from './components/UserView';
// import Contact from "./components/pages/Contact";

function App() {
  return (
     <Router>
       <Navbar/>
       <Route exact path="/discover" component={Discover}/>
       <Route exact path="/search" component={Search}/>
       <Route exact path="/user" component={User}/>
       <Route exact path='/users/user/:userId' component={UserView}/>
       <Route exact path="/" component={About}/>
     </Router>
  );
}

export default App;
