import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Nav,
  NavLink,
  Match
} from "react-router-dom";

import MoviesList from "./components/MoviesList";
import MoviesLiked from "./components/MoviesLiked";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        {/* <div>
          <Nav>
            <NavLink exact={true} activeClassName="is-active" to="/">
              Home
            </NavLink>
            <NavLink activeClassName="is-active" to="/liked">
              About
            </NavLink>
          </Nav>

          <Match pattern="/" exactly component={MoviesList} />
          <Match pattern="/liked" exactly component={MoviesLiked} />
        </div> */}

        <Header />

        <div className="content">
          <Switch>
            <Route exact path="/">
              <MoviesList />
            </Route>
            <Route path="/liked">
              <MoviesLiked />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
