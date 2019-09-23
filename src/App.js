import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Portfolio from './components/Portfolio';
import CustomNavbar from './components/CustomNavbar'
import {Col} from 'react-bootstrap';



function App() {
  return (
    <Router>
      <div>
        <CustomNavbar/>
        
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;
