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
  
  constructor(props){
    super(props);
    this.state={
      background:'white'
    }
    this.updateNavColor = this.updateNavColor.bind(this);
  }

  updateNavColor(backgroundColor) {
        this.setState({background: backgroundColor})
  }

  render() { 

    return (

  
                <Router>
                  <div>
                    <Navbar background={this.state.background}/>
                    {/* <Icon name="adn" color="#FFFFFF" size={35}/> */}
                    <Switch>
                      <Route exact path="/new" render={(props) => <Home {...props} background={this.state.background} updateNavColor={this.updateNavColor}/>} />
                      <Route exact path="/work" render={(props) => <Work {...props} background={this.state.background} updateNavColor={this.updateNavColor}/>} />
                      <Route exact path="/services"render={(props) => <Services {...props} background={this.state.background} updateNavColor={this.updateNavColor}/>}/>
                      <Route exact path="/metodologies" render={(props) => <Metodologies {...props} background={this.state.background} updateNavColor={this.updateNavColor}/>}/>
                      <Route exact path="/activities" render={Activities} />
                      <Route exact path="/together" render={(props) => <Together {...props} background={this.state.background} updateNavColor={this.updateNavColor}/>}/>
                      <Route path="/detail/:id" render={(props) => <Detail {...props} background={this.state.background} updateNavColor={this.updateNavColor} />}/>
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
