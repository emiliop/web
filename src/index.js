import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css';
import 'c3/c3.css';
import "react-datepicker/dist/react-datepicker.css";

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import Home from 'scenes/Home';
import Work from 'scenes/Work';
import Services from 'scenes/Services';
import Metodologies from 'scenes/Metodologies';
import Activities from 'scenes/Activities';
import Togheter from 'scenes/Togheter';

ReactDOM.render(
  <Router>
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/metodologies" component={Metodologies} />
        <Route exact path="/activities" component={Activities} />
        <Route exact path="/togheter" component={Togheter} />
      </Switch>

      <Footer />
    </div>
  </Router>
, document.getElementById('root'));
