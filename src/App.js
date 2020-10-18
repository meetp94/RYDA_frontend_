import React, { Component } from 'react';
import Login from './login';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from './register';
import Dashboard from './dashboard';

class App extends Component {
  render() {
  
    return (
    
     
              
              <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/login/">Login</Link>
            </li>
            <li>
              <Link to="/register/">Register</Link>
            </li>
          </ul>
        </nav>  */}

        <Route path="/" exact component={Dashboard} />
        <Route path="/login/" component={Login} />
        <Route path="/register/" component={Register} />
      </div>
    </Router>

   
    );
  }
}

export default App;
