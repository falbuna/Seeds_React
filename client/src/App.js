import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Posts from "./pages/Posts";
import Navbar from "./components/Navbar";
import './index.css';

function App() {
  return (
    <Router>
    <div className="bg-green1">
    <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Posts" component={Posts} />
    </div>
    </Router>
  );
}

export default App;
