import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Posts from "./pages/Posts";
import Members from "./pages/Members";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './index.css';

function App() {
  return (
    <div className="bg-green1">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/members" component={Members} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
