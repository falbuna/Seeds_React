import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import './index.css';

function App() {
  return (
    <Router>
    <div>
    <Navbar/>
        <Route exact path="/" component={About} />
        
        <Route exact path="/about" component={About} />
        
    </div>
    </Router>
  );
}

export default App;
