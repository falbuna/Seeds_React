import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import './index.css';

function App() {
  return (
    <Router>
    <div class="bg-green1">
    <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
    </div>
    </Router>
  );
}

export default App;
