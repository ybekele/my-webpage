import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import CustomNavbar from './components/CustomNavbar'




function App() {
  return (
    <Router>
      <div>
        <CustomNavbar/>
        
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        {/* <Route path="/resume" component={Resume} /> */}
       
      </div>
    </Router>
  );
}

export default App;
