import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.scss';
import 'c3/c3.css';

import styled from 'styled-components';
import "react-datepicker/dist/react-datepicker.css";

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import Icon from 'components/Icon';

import Home from 'scenes/Home';
import Work from 'scenes/Work';
import Services from 'scenes/Services';
import Metodologies from 'scenes/Metodologies';
import Activities from 'scenes/Activities';
import Together from 'scenes/Together';
import Detail from 'scenes/Detail';


class App extends Component {

  
  

  render() {

    return (

  
                <Router>
                  <div>
                    <Navbar />
                    <Icon name="adn" color="#FFFFFF" size={35}/>
                    <Switch>
                      <Route exact path="/new" component={Home} />
                      <Route exact path="/work" component={Work} />
                      <Route exact path="/services" component={Services} />
                      <Route exact path="/metodologies" component={Metodologies} />
                      <Route exact path="/activities" component={Activities} />
                      <Route exact path="/together" component={Together} />
                      <Route exact path="/detail" component={Detail} />
                    </Switch>

                    <Footer />
                  </div>
                </Router>
         
      
      );
  }
}

ReactDOM.render(
   
<App />

  
, document.getElementById('root'));
