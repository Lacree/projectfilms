import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Movies from './components/Movies';
import Locations from './components/Locations';
import Reviews from './components/Reviews';
import Header from './components/Header';
import LocationsInformation from "./components/LocationsInformation";
import MoviesInformation from "./components/MoviesInformation";
import ReviewsInformation from "./components/ReviewsInformation";
import CreateLocations from './components/CreateLocations';
import CreateMovies from './components/CreateMovies';








function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/movies" components={Movies} />
          <Route exact path="/movies/:id" components={MoviesInformation} />
          <Route exact path="/locations" components={Locations} />
          <Route exact path="/locations/:id" components={LocationsInformation} />
          <Route exact path="/reviews" components={Reviews} />
          <Route exact path="/reviews" components={ReviewsInformation} />
          <Route exact path="/movie/new" components={CreateMovies} />
          <Route exact path="/location/new" components={CreateLocations} />
          
        
          

          
          

        </Switch>
      </Router>
    </div>
  );
}

export default App;
