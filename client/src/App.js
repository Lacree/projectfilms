import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Movies from './components/Movies';
import Location from './components/Locations';
import Reviews from './components/Reviews';
import Header from './components/Header';




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/movies" components={Movies} />
          
          

        </Switch>
      </Router>
    </div>
  );
}

export default App;
