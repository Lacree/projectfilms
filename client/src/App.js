import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Movies from './components/Movies';
import Locations from './components/Locations';
import Reviews from './components/Reviews';
import Header from './components/Header';
import CreateMovies from './components/CreateMovies';
import CreateLocations from './components/CreateLocations';
import CreateReviews from './components/CreateReviews';
import MoviesInformation from "./components/MoviesInformation";
import LocationsInformation from "./components/LocationsInformation";
import ReviewsInformation from "./components/ReviewsInformation"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route exact path="/movies/" component={Movies} />
          <Route exact path="/movies/:id" component={MoviesInformation} />
          <Route exact path="/locations/" component={Locations} />
          <Route exact path="/locations/:id" component={LocationsInformation} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/reviews/:id" component={ReviewsInformation} />
          <Route exact path="/movie/new" component={CreateMovies} />
          <Route exact path="/location/new" component={CreateLocations} />
          <Route exact path="/review/new" component={CreateReviews} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
