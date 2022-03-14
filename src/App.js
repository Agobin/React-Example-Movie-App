import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MoviesList from "./components/MoviesList";
import MoviesLiked from "./components/MoviesLiked";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="app">
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
