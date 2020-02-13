import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import puede_ser from 'assets/puede_ser.png';
import blockch from 'assets/blockch.png';
import blockch2 from 'assets/blockch2.png';

import horizontaldots from 'assets/horizontaldots.png';

import axios from 'axios';

require('dotenv').config()

class Work extends Component {

  constructor(props) {
    super(props);
    this.state = {
      background: 'white',
      services: [],
      numberOfSlides: []
    }

    this.responsive = {
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 1,
        partialVisibilityGutter: 40
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 1,
        partialVisibilityGutter: 30
      }
    }; 

    this.sortByName = this.sortByName.bind(this);
    this.createCarousel = this.createCarousel.bind(this);
    
  }

  componentDidMount(){
    this.props.updateNavColor(this.state.background);

    axios.get('http://localhost:8000/api/services')
       .then(response => {
         this.setState({ services: response.data });
         this.createCarousel();
       })
       .catch(function (error) {
         console.log(error);
       })
    
    
  }

  createCarousel(){
    console.log(Math.ceil(this.state.services.length/12));
    var numberOfSlides = [...Array(Math.ceil(this.state.services.length/12)).keys()]
    this.setState({numberOfSlides: numberOfSlides });
  }

  sortByName(){
    console.log(this.state.services)
    let byName;
    byName = this.state.services.sort(function(a, b) {
      return a.title.localeCompare(b.title);
  });
  console.log(byName)
  this.setState({services: byName})
}

sortByDate(){
  console.log(this.state.services)
  let byName;
  byName = this.state.services.sort(function(a, b) {
    return a.title.localeCompare(b.title);
  });
    console.log(byName)
    this.setState({services: byName}) 
}

sortByService(){
  console.log(this.state.services)
  let byName;
  byName = this.state.services.sort(function(a, b) {
    return a.title.localeCompare(b.title);
  });
    console.log(byName)
    this.setState({services: byName})
}

  render() {

    const CustomRightArrow = ({ onClick }) => {
      return <i className="custom-right-arrow" onClick={() => onClick()} />;
    };

    const CustomLeftArrow = ({ onClick }) => (
      <i onClick={() => onClick()} className="custom-left-arrow" />
    );

    const CustomDot = ({ onClick, active, index, carouselState }) => {
      const { currentSlide } = carouselState;
      return (
        <li style={{ background: active ? "grey" : "initial" }}>
          <button
            style={{ background: active ? "grey" : "initial" }}
            onClick={() => onClick()}
          />
        </li>
      );
    };

    let slide2;
    if (this.state.numberOfSlides.length > 1){
        slide2 = <div className="column">
                          <div className="columns is-multiline">                          
                                {this.state.services.slice(12, 24).map( service => ( <div className="column infoCard is-one-third" key={service.id}>
                                                                    <Link to={"/detail/"+service.id}>
                                                                        <figure className="image">
                                                                            <img className="" src={"http://localhost:8000/images/" + service.image} />
                                                                        </figure>
                                                                        <p className="title">{service.title}</p>
                                                                    </Link>  
                                                                  </div>))} 
                          </div>  
        </div>;
    }else{
      slide2=null;
    }

    let slide3;
    if (this.state.numberOfSlides.length > 2){
        slide3 = <div className="column">
                          <div className="columns is-multiline">                          
                                {this.state.services.slice(24, 36).map( service => ( <div className="column infoCard is-one-third" key={service.id}>
                                                                    <Link to={"/detail/"+service.id}>
                                                                        <figure className="image">
                                                                            <img className="" src={"http://localhost:8000/images/" + service.image} />
                                                                        </figure>
                                                                        <p className="title">{service.title}</p>
                                                                    </Link>  
                                                                  </div>))} 
                          </div>  
        </div>;
    }else{
      slide3=null;
    }

    let slide4;
    if (this.state.numberOfSlides.length > 3){
        slide4 = <div className="column">
                          <div className="columns is-multiline">                          
                                {this.state.services.slice(36, 48).map( service => ( <div className="column infoCard is-one-third" key={service.id}>
                                                                    <Link to={"/detail/"+service.id}>
                                                                        <figure className="image">
                                                                            <img className="" src={"http://localhost:8000/images/" + service.image} />
                                                                        </figure>
                                                                        <p className="title">{service.title}</p>
                                                                    </Link>  
                                                                  </div>))} 
                          </div>  
        </div>;
    }else{
      slide4=null;
    }

    let slide5;
    if (this.state.numberOfSlides.length > 4){
        slide5 = <div className="column">
                          <div className="columns is-multiline">                          
                                {this.state.services.slice(48, 60).map( service => ( <div className="column infoCard is-one-third" key={service.id}>
                                                                    <Link to={"/detail/"+service.id}>
                                                                        <figure className="image">
                                                                            <img className="" src={"http://localhost:8000/images/" + service.image} />
                                                                        </figure>
                                                                        <p className="title">{service.title}</p>
                                                                    </Link>  
                                                                  </div>))} 
                          </div>  
        </div>;
    }else{
      slide5=null;
    }

    let slide6;
    if (this.state.numberOfSlides.length > 5){
        slide6 = <div className="column">
                          <div className="columns is-multiline">                          
                                {this.state.services.slice(60, 72).map( service => ( <div className="column infoCard is-one-third" key={service.id}>
                                                                    <Link to={"/detail/"+service.id}>
                                                                        <figure className="image">
                                                                            <img className="" src={"http://localhost:8000/images/" + service.image} />
                                                                        </figure>
                                                                        <p className="title">{service.title}</p>
                                                                    </Link>  
                                                                  </div>))} 
                          </div>  
        </div>;
    }else{
      slide6=null;
    }

    let slide7;
    if (this.state.numberOfSlides.length > 6){
        slide7 = <div className="column">
                          <div className="columns is-multiline">                          
                                {this.state.services.slice(72, 84).map( service => ( <div className="column infoCard is-one-third" key={service.id}>
                                                                    <Link to={"/detail/"+service.id}>
                                                                        <figure className="image">
                                                                            <img className="" src={"http://localhost:8000/images/" + service.image} />
                                                                        </figure>
                                                                        <p className="title">{service.title}</p>
                                                                    </Link>  
                                                                  </div>))} 
                          </div>  
        </div>;
    }else{
      slide7= null;
    }

    let slide8;
    if (this.state.numberOfSlides.length > 7){
        slide8 = <div className="column">
                          <div className="columns is-multiline">                          
                                {this.state.services.slice(84, 96).map( service => ( <div className="column infoCard is-one-third" key={service.id}>
                                                                    <Link to={"/detail/"+service.id}>
                                                                        <figure className="image">
                                                                            <img className="" src={"http://localhost:8000/images/" + service.image} />
                                                                        </figure>
                                                                        <p className="title">{service.title}</p>
                                                                    </Link>  
                                                                  </div>))} 
                          </div>  
        </div>;
    }else{
      slide8=null;
    }

    let slide9;
    if (this.state.numberOfSlides.length > 8){
        slide9 = <div className="column">
                          <div className="columns is-multiline">                          
                                {this.state.services.slice(96, 108).map( service => ( <div className="column infoCard is-one-third" key={service.id}>
                                                                    <Link to={"/detail/"+service.id}>
                                                                        <figure className="image">
                                                                            <img className="" src={"http://localhost:8000/images/" + service.image} />
                                                                        </figure>
                                                                        <p className="title">{service.title}</p>
                                                                    </Link>  
                                                                  </div>))} 
                          </div>  
        </div>;
    }else{
      slide9=null;
    }

    let slide10;
    if (this.state.numberOfSlides.length > 9){
        slide10 = <div className="column">
                          <div className="columns is-multiline">                          
                                {this.state.services.slice(108, 120).map( service => ( <div className="column infoCard is-one-third" key={service.id}>
                                                                    <Link to={"/detail/"+service.id}>
                                                                        <figure className="image">
                                                                            <img className="" src={"http://localhost:8000/images/" + service.image} />
                                                                        </figure>
                                                                        <p className="title">{service.title}</p>
                                                                    </Link>  
                                                                  </div>))} 
                          </div>  
        </div>;
    }else{
      slide10=null;
    }

    return (
      <StyledWork>

      <button className="button ver-mas is-normal"  onClick={this.sortByName}>Ver más proyectos</button>
       
          <div className="banner columns is-multiline is-centered">

              <div className="column is-full-mobile lema">
                        <p>Nuestro trabajo</p>
              </div>

              <div className="column is-hidden-mobile is-one-fifth">
                   <img className="squares" src={horizontaldots} alt=""/>
              </div>

              <div className="column is-full-mobile is-half">
                        <p>Innovación, investigación, tecnología y mucho más. Descubre los proyectos que nos hacen sentir orgullosos en LAB101.</p>
              </div>

          </div>

          <div className="gallery">
                         
              <Carousel className="columns"
                        responsive={this.responsive}
                        centerMode={false}
                        arrows={true}
                        customLeftArrow={<CustomLeftArrow />}
                        customRightArrow={<CustomRightArrow />}
                        customDot={<CustomDot />}
                        infinite={true}
                        renderButtonGroupOutside={false}
                        showDots={true}
                        renderDotsOutside={true}>
                  <div className="column">
                       <div className="columns is-multiline">                          
                            {this.state.services.slice(0, 12).map( service => ( <div className="column infoCard is-one-third" key={service.id}>
                                                                <Link to={"/detail/"+service.id}>
                                                                    <figure className="image">
                                                                        <img className="" src={"http://localhost:8000/images/" + service.image} />
                                                                    </figure>
                                                                    <p className="title">{service.title}</p>
                                                                </Link>  
                                                              </div>))} 
                      </div>  
                  </div>

                  <div className="column">
                          <div className="columns is-multiline">                          
                                {this.state.services.slice(12, 24).map( service => ( <div className="column infoCard is-one-third" key={service.id}>
                                                                    <Link to={"/detail/"+service.id}>
                                                                        <figure className="image">
                                                                            <img className="" src={"http://localhost:8000/images/" + service.image} />
                                                                        </figure>
                                                                        <p className="title">{service.title}</p>
                                                                    </Link>  
                                                                  </div>))} 
                          </div>  
                  </div>
                  
                  {this.state.numberOfSlides.length > 2  && 
                  <div className="column">
                       <div className="columns is-multiline">                          
                            {this.state.services.slice(26, 38).map( service => ( <div className="column infoCard is-one-third" key={service.id}>
                                                                <Link to={"/detail/"+service.id}>
                                                                    <figure className="image">
                                                                        <img className="" src={"http://localhost:8000/images/" + service.image} />
                                                                    </figure>
                                                                    <p className="title">{service.title}</p>
                                                                </Link>  
                                                              </div>))} 
                      </div>  
                  </div>}

                  { this.state.numberOfSlides.length > 3 &&
                  <div className="column">
                       <div className="columns is-multiline">                          
                            {this.state.services.slice(39, 51).map( service => ( <div className="column infoCard is-one-third" key={service.id}>
                                                                <Link to={"/detail/"+service.id}>
                                                                    <figure className="image">
                                                                        <img className="" src={"http://localhost:8000/images/" + service.image} />
                                                                    </figure>
                                                                    <p className="title">{service.title}</p>
                                                                </Link>  
                                                              </div>))                            } 
                      </div>  
                  </div>
                  }

                  { this.state.numberOfSlides.length > 4 &&
                  <div className="column">
                       <div className="columns is-multiline">                          
                            {this.state.services.slice(52, 64).map( service => ( <div className="column infoCard is-one-third" key={service.id}>
                                                                <Link to={"/detail/"+service.id}>
                                                                    <figure className="image">
                                                                        <img className="" src={"http://localhost:8000/images/" + service.image} />
                                                                    </figure>
                                                                    <p className="title">{service.title}</p>
                                                                </Link>  
                                                              </div>))                            } 
                      </div>  
                  </div>
                  }

                  { this.state.numberOfSlides.length > 5 &&
                  <div className="column">
                       <div className="columns is-multiline">                          
                            {this.state.services.slice(65, 77).map( service => ( <div className="column infoCard is-one-third" key={service.id}>
                                                                <Link to={"/detail/"+service.id}>
                                                                    <figure className="image">
                                                                        <img className="" src={"http://localhost:8000/images/" + service.image} />
                                                                    </figure>
                                                                    <p className="title">{service.title}</p>
                                                                </Link>  
                                                              </div>))                            } 
                      </div>  
                  </div>
                  }

                  { this.state.numberOfSlides.length > 6 &&
                  <div className="column">
                       <div className="columns is-multiline">                          
                            {this.state.services.slice(78, 90).map( service => ( <div className="column infoCard is-one-third" key={service.id}>
                                                                <Link to={"/detail/"+service.id}>
                                                                    <figure className="image">
                                                                        <img className="" src={"http://localhost:8000/images/" + service.image} />
                                                                    </figure>
                                                                    <p className="title">{service.title}</p>
                                                                </Link>  
                                                              </div>))                            } 
                      </div>  
                  </div>
                  }

                  { this.state.numberOfSlides.length > 7 &&
                  <div className="column">
                       <div className="columns is-multiline">                          
                            {this.state.services.slice(91, 103).map( service => ( <div className="column infoCard is-one-third" key={service.id}>
                                                                <Link to={"/detail/"+service.id}>
                                                                    <figure className="image">
                                                                        <img className="" src={"http://localhost:8000/images/" + service.image} />
                                                                    </figure>
                                                                    <p className="title">{service.title}</p>
                                                                </Link>  
                                                              </div>))                            } 
                      </div>  
                  </div>
                  } 

              </Carousel>

              </div>
      </StyledWork>
    );
  }
}

const StyledWork = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

.react-multi-carousel-list.columns, .contact, .partners, .sections {
  margin-left: 5vw;
}

.banner{
    width: 100%;
    display: flex;
    padding-top: 5vh;
    margin-top: 0vh;
    height: 20vh;
    align-items: flex-start;
    background-color: white;

    

    .is-one-fifth{
      margin-right: auto;
      display: flex;
    }

    .squares{
      height: auto;
      width: 25%;
      margin-left:auto;
    }

    .lema{
      font-family: 'Staatliches', cursive;
      color: #18144D;
      text-transform: uppercase;
      font-size: 3em;
      padding-left: 0;
      margin-left: 5vw;
      padding-right: 0;
      line-height: 5.5vh;

      
    }

    .column.is-half {
      font-family: 'Fira Sans', sans-serif;
      color: #18144D;
      font-size: 1.25em;
      line-height: 1.7em;
      letter-spacing: 0.01em;
      padding-right: 5%;
      padding-left: 1.5%;
      p {
        margin-top: -1.5vh;
      }
    }
}  


.gallery{

    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;

    p.title {
      width: 70%;
      padding-top: 2vh;
      color: #18144D;
      font-family: 'Raleway', sans-serif;
      font-weight: 800;
      font-size: 1.3em;
      line-height: 1.2em;
      letter-spacing: 0.01em;
    }

    li.react-multi-carousel-item {
      padding: 0 0.3%;
    }

    .column.box.infoCard {
      height: 30vh;
    }

    .column.infoCard.is-one-third {
      padding: 0 3% 3% 0%;
    }
  
    .react-multi-carousel-list{
        padding: 0.1% 0 10vh 0;
        width: 95%;
        margin: 0;
      }

      .custom-right-arrow{
        position: absolute !important;
        bottom: 4.5vh;
        right: 2.5%;
        z-index: 1;
        border: 1px solid #18144D;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 6px;
        opacity: 0.8;
        cursor: pointer;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }

      .custom-left-arrow{
        position: absolute !important;
        bottom: 4.5vh;
        right: 5%;
        z-index: 1;
        border: 1px solid #18144D;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 6px;
        opacity: 0.8;
        cursor: pointer;
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg);
      }
      
  }

  .react-multi-carousel-dot-list {
    position: relative;
    bottom: 8vh;
    display: flex;
    left: 0;
    right: 0;
    justify-content: center;
    margin: auto;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;

    li{
      background: transparent !important;
    }

    button {
      background: rgba(24, 20, 77, 0.7);
      display: inline-block;
      width: 0.6em;
      height: 0.6em;
      border-radius: 50%;
      opacity: 1;
      padding: 5px 5px 5px 5px;
      box-shadow: none;
      transition: background .5s;
      border-width: 2px;
      border-style: solid;
      border-color: grey;
      padding: 0;
      margin: 0;
      margin-right: 6px;
      outline: 0;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 1023px){

  .banner{
    height: auto;
    .lema{
      margin-left: 0vw;
      padding-left: 3vw;
    }
  }
  .column.is-full-mobile.is-half{
    font-size: 1em;
    padding-left: 3.5%;
  }
}


`;

export default Work;
