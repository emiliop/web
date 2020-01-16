import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import puede_ser from 'assets/puede_ser.png';
import blockch from 'assets/blockch.png';
import blockch2 from 'assets/blockch2.png';

import horizontaldots from 'assets/horizontaldots.png';

require('dotenv').config()

class Work extends Component {

  constructor(props) {
    super(props);
    this.state = {
      background: 'white'
    }

    this.responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        partialVisibilityGutter: 1 // this is needed to tell the amount of px that should be visible.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        partialVisibilityGutter: 1 // this is needed to tell the amount of px that should be visible.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 1 // this is needed to tell the amount of px that should be visible.
      }
    }; 

   
    
  }

  componentDidMount(){
    this.props.updateNavColor(this.state.background);
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

    return (
      <StyledWork>
       
          <div className="banner columns is-centered">

              <div className="column lema">
                        <p>Nuestro trabajo</p>
              </div>

              <div className="column is-one-fifth">
                   <img className="squares" src={horizontaldots} alt=""/>
              </div>

              <div className="column is-half">
                        <p>Innovación, investigación, tecnología y mucho más. Descubre los proyectos que nos hacen sentir orgullosos en LAB101.</p>
              </div>
                


          </div>

          <div className="gallery">
             
              <Carousel className="columns" additionalTransfrom={0}
                                        arrows
                                        customLeftArrow={<CustomLeftArrow />}
                                        customRightArrow={<CustomRightArrow />}
                                        customDot={<CustomDot />}
                                        autoPlaySpeed={3000}
                                        centerMode={false}
                                        infinite={true}
                                        itemClass=""
                                        keyBoardControl
                                        renderButtonGroupOutside={false}
                                        showDots={true}
                                        renderDotsOutside
                                        slidesToSlide={1}
                                        responsive={this.responsive}>

                <div className="column">

                   <div className="columns is-multiline">                          

                          <div className="column infoCard is-one-third">
                            <Link to="/statistics">
                              <figure className="image">
                                  <img className="" src={puede_ser} alt="imagen de grafica de barras"/>
                              </figure>
                              <p className="title">App: se puede ser</p>
                            </Link>  
                          </div>

                          <div className="column infoCard is-one-third">
                            <Link to="/statistics">
                                <figure className="image">
                                  <img className="" src={blockch} alt="imagen de bogota"/>
                              </figure>
                              <p className="title">Blockchain para restitucion de tierras</p>
                            </Link>   
                          </div>

                          <div className="column infoCard is-one-third">
                            <Link to="/statistics">
                                <figure className="image">
                                    <img className="" src={blockch2} alt="imagen de bogota"/>
                                </figure>
                                <p className="title">Sitio Web Colegio Villas del Progreso</p>
                            </Link>   
                          </div>

                          <div className="column infoCard is-one-third">
                            <Link to="/statistics">
                                <figure className="image">
                                    <img className="" src={puede_ser} alt="imagen de grafica de barras"/>
                                </figure>
                                <p className="title">App: se puede ser</p>
                            </Link>   
                          </div>

                          <div className="column infoCard is-one-third">
                            <Link to="/statistics">
                                <figure className="image">
                                  <img className="" src={blockch} alt="imagen de bogota"/>
                              </figure>
                              <p className="title">Blockchain para restitucion de tierras</p>
                            </Link>   
                          </div>

                          <div className="column infoCard is-one-third">
                            <Link to="/statistics">
                                <figure className="image">
                                    <img className="" src={blockch2} alt="imagen de bogota"/>
                                </figure>
                                <p className="title">Sitio Web Colegio Villas del Progreso</p>
                            </Link>   
                          </div>

                          <div className="column infoCard is-one-third">
                            <Link to="/statistics">
                                <figure className="image">
                                    <img className="" src={puede_ser} alt="imagen de grafica de barras"/>
                                </figure>
                                <p className="title">App: se puede ser</p>
                            </Link>   
                          </div>

                          <div className="column infoCard is-one-third">
                            <Link to="/statistics">
                                <figure className="image">
                                  <img className="" src={blockch} alt="imagen de bogota"/>
                              </figure>
                              <p className="title">Blockchain para restitucion de tierras</p>
                            </Link>   
                          </div>

                          <div className="column infoCard is-one-third">
                            <Link to="/statistics">
                                <figure className="image">
                                    <img className="" src={blockch2} alt="imagen de bogota"/>
                                </figure>
                                <p className="title">Sitio Web Colegio Villas del Progreso</p>
                            </Link>   
                          </div>

                          <div className="column infoCard is-one-third">
                            <Link to="/statistics">
                                <figure className="image">
                                    <img className="" src={puede_ser} alt="imagen de grafica de barras"/>
                                </figure>
                                <p className="title">App: se puede ser</p>
                            </Link>   
                          </div>

                          <div className="column infoCard is-one-third">
                            <Link to="/statistics">
                                <figure className="image">
                                  <img className="" src={blockch} alt="imagen de bogota"/>
                              </figure>
                              <p className="title">Blockchain para restitucion de tierras</p>
                            </Link>   
                          </div>

                          <div className="column infoCard is-one-third">
                            <Link to="/statistics">
                                <figure className="image">
                                    <img className="" src={blockch2} alt="imagen de bogota"/>
                                </figure>
                                <p className="title">Sitio Web Colegio Villas del Progreso</p>
                            </Link>   
                          </div>

                       </div>  

                    </div>

                    <div className="column">

                        <div className="columns is-multiline">                          

                          <div className="column infoCard is-one-third">
                            <Link to="/statistics">
                                <figure className="image">
                                    <img className="" src={blockch2} alt="imagen de bogota"/>
                                </figure>
                                <p className="title">Blockchain para restitucion de tierras</p>
                            </Link>   
                          </div>

                          <div className="column infoCard is-one-third">
                            <Link to="/statistics">
                                <figure className="image">
                                    <img className="" src={blockch2} alt="imagen de bogota"/>
                                </figure>
                                <p className="title">Blockchain para restitucion de tierras</p>
                            </Link>   
                          </div>

                          <div className="column infoCard is-one-third">
                            <Link to="/statistics">
                                <figure className="image">
                                    <img className="" src={blockch2} alt="imagen de bogota"/>
                                </figure>
                                <p className="title">Blockchain para restitucion de tierras</p>
                            </Link>   
                          </div>

                          <div className="column infoCard is-one-third">
                            <Link to="/statistics">
                                <figure className="image">
                                    <img className="" src={blockch2} alt="imagen de bogota"/>
                                </figure>
                                <p className="title">Blockchain para restitucion de tierras</p>
                            </Link>   
                          </div>

                        </div>
                  
                  </div>

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
    padding-top: 0vh;
    margin-top: 0vh;
    height: 20vh;
    align-items: center;
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
      font-size: 1.1em;
      line-height: 1.7em;
      letter-spacing: 0.01em;
      padding-right: 7%;
      padding-left: 3.5%;
    }
}  

.info{
  position: relative;
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;

export default Work;
