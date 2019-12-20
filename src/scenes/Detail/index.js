import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import map from 'assets/Map.png';

import green_squares from 'assets/green_squares.png';

import puede_ser from 'assets/puede_ser.png';
import blockch from 'assets/blockch.png';
import blockch2 from 'assets/blockch2.png';
import detail from 'assets/detail.png';
import biblioteca from 'assets/biblioteca.png';
import biblioteca0 from 'assets/biblioteca0.png';
import biblioteca2 from 'assets/biblioteca2.png';

import user from 'assets/user.png';
import technology from 'assets/technology.png';
import innovation from 'assets/innovation.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

require('dotenv').config()

 
class Detail extends Component {
    constructor(props) {
        super(props);

        this.responsive = {
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            partialVisibilityGutter: 10 // this is needed to tell the amount of px that should be visible.
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            partialVisibilityGutter: 20 // this is needed to tell the amount of px that should be visible.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 10 // this is needed to tell the amount of px that should be visible.
          }
        };  
        
        this.responsiveStatic = {
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 0 // this is needed to tell the amount of px that should be visible.
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 20 // this is needed to tell the amount of px that should be visible.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 10 // this is needed to tell the amount of px that should be visible.
          }
        };
      
  } 

  render() {

    return (

              <StyledDetail>


                
                    <div className="banner columns is-centered">

                        <div className=" columns">

                            <div className="column is-two-third text">
                              <div className=" columns is-multiline">
                                    <p className="column lema is-full">Sitio web para villas del progreso</p>
                                    <div className="column is-half">
                                      <p>PRODUCTO</p>
                                      <p>Tipo de producto</p>
                                    </div>
                                    <div className="column is-half">
                                      <p>CLIENTE</p>
                                      <p>Nombre del cliente</p>
                                    </div>
                                </div>
                              </div>

                            <div className="column is-one-fifth">
                                      <figure className="image">
                                          <img className="squares" src={green_squares} alt=""/>
                                      </figure>  
                            </div>

                        </div>

                        <div className="column is-half">

                                <div className="column is-two-thirds ">
                                    <img className="is-centered" src={detail} alt="imagen de bogota"/>
                                </div>

                        </div> 

                  </div>


        
                  <div className="columns contenido">

                    <div className="column form is-one-fifth">

                        <div className="columns redes">

                            <div className="column is-narrow vertical">
                              <p className="">COMPARTIR EN REDES</p>
                            </div>

                            <div className="column is-narrow icons">
                                <FontAwesomeIcon icon={faFacebookF} />
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </div>

                        </div>    

                    </div>

                    <div className="column texto is-three-fifths">

                        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate.</p>
                      <p className="servicios">
                        Servicios:  <FontAwesomeIcon icon={faFacebookF} />Experiencia de usuario <FontAwesomeIcon icon={faTwitter} /> tecnologias emergentes <FontAwesomeIcon icon={faWhatsapp} /> Procesos de innovación
                      </p>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate.</p>
                                      <p>Descripción. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis. Descripción. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis. Descripción. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis.</p>
                                      <img className="" src={puede_ser} alt="imagen de grafica de barras"/>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate.</p>
                                      <p>Descripción. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis. Descripción. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis. Descripción. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis.</p>
                                      
                    </div>

                  </div> 

                  <div className="gallery">

                     <div>
                          <p className="column titulo is-offset-one-fifth">Galería</p>
                      </div>

                      <Carousel className="columns" additionalTransfrom={0}
                                                    arrows
                                                    autoPlaySpeed={3000}
                                                    centerMode
                                                    infinite
                                                    itemClass=""
                                                    keyBoardControl
                                                    renderButtonGroupOutside={false}
                                                    renderDotsOutside={false}
                                                    showDots={false}
                                                    slidesToSlide={1}
                                                    responsive={this.responsive}>

                        <div className="column logo">
                          <Link to="/statistics">
                              <figure className="image">
                                  <img className="" src={biblioteca0} alt="imagen de grafica de barras"/>
                              </figure>
                              <p className="title">App: se puede ser</p>
                          </Link>  
                        </div>
                      
                        
                        <div className="column logo">
                        <Link to="/contrareference"> 
                            <figure className="image">
                                <img className="" src={biblioteca} alt="imagen de bogota"/>
                            </figure>
                            <p className="title">Blockchain para restitucion de tierras</p>
                            </Link>
                        </div>

                        <div className="column logo">
                        <Link to="/contrareference"> 
                            <figure className="image">
                                <img className="" src={biblioteca2} alt="imagen de bogota"/>
                            </figure>
                            <p className="title">Blockchain para restitucion de tierras</p>
                            </Link>
                        </div>
                     

                    </Carousel>

                  </div>

                  <div className="proyects">
                  
                  
                      <div>
                          <p className="titulo column is-offset-one-fifth">Proyectos relacionados</p>
                    </div>

                      <Carousel className="columns" responsive={this.responsiveStatic}>

                      <div className="column logo">
                        <Link to="/statistics">
                            <figure className="image">
                                <img className="" src={puede_ser} alt="imagen de grafica de barras"/>
                            </figure>
                            <p className="title">App: se puede ser</p>
                        </Link>  
                      </div>
                    
                      
                      <div className="column logo">
                      <Link to="/contrareference"> 
                          <figure className="image">
                              <img className="" src={blockch} alt="imagen de bogota"/>
                          </figure>
                          <p className="title">Blockchain para restitucion de tierras</p>
                          </Link>
                      </div>

                      <div className="column logo">
                      <Link to="/contrareference"> 
                          <figure className="image">
                              <img className="" src={blockch2} alt="imagen de bogota"/>
                          </figure>
                          <p className="title">Blockchain para restitucion de tierras</p>
                          </Link>
                      </div>
                    

                  </Carousel>

                  <Link to="/contrareference"><button className="button ver-mas is-normal">Ver más proyectos</button></Link>

                  </div>

            </StyledDetail>  
    );
  }
}

const StyledDetail = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;

.contact, .partners, .sections {
  margin-left: 5vw;
}

.banner{
    width: 97.15vw;
    display: flex;
    margin-left: 0vw;
    margin-top: 0vh;
    height: 40vh;
    align-items: center;
    background-color: #02CAF4;

    .is-multiline{
      
    margin-left: 4vw;
    }

  .is-one-fifth{
    margin-left:auto;
  }

  .squares{
    height: auto;
    width: 30%;
    margin-right:auto;
  }

  .lema{
    font-family: 'Staatliches', cursive;
    color: #18144D;
    text-transform: uppercase;
    font-size: 4em;
    padding-right: 10%;
    line-height: 7.5vh;

    
  }

  .text{
    line-height: 2.8vh;
    letter-spacing: 0.01em;
    padding-left: 4%;
    padding-right: 4%;
    b{
      border-bottom: 2px solid #86F26B;
    }
    
  }
}  

.contenido{
  width: 100%;
  margin-top: 1vh;
  .subtitle{
    padding: 0;
    text-align: left;
  }
  .texto{
    display: flex;
    flex-direction: column;
    img{
      align-self: center;
      margin-top: 2vh;
      margin-bottom: 2vh;
    }
  }
}

.vertical{
  font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 0.9em;
    font-weight: 600;
    letter-spacing: 0.035em;
    color: #18144D;
    height: 3vw;
    transform: rotate(-90deg) translate(-4vw, 5vw);
}

.icons{
  display: flex;
    flex-direction: column;
}

.svg-inline--fa{
  color: white;
  padding: 20%;
  border-radius: 50%;
  display: block;
  width: 2.5vw;
  height: 2.5vw;
  margin-bottom: 1vw;
}

.fa-facebook-f{
  background-color: #3D599C;
}

.fa-twitter{
  background-color: #1EB2EA;
}

.fa-whatsapp{
  background-color: #1BD741;
}

.servicios{
  display: flex;
  align-items: center;
  margin-bottom: 2vh;
  .svg-inline--fa{
    padding: 1%;
    margin-bottom: 0;
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
  .react-multi-carousel-list{
    padding-top: 5vh;
      width: 100%;
      margin-left: 0vw;
    figure{
      height: 35vh;
      width: 100%;
    }
    .image img {
      height: auto;
      width: 100%;
    }
  }
}

.titulo{
  font-family: 'Staatliches', cursive;
  color: #18144D;
  text-transform: uppercase;
  font-size: 2.5em;
    font-style: normal;
    font-weight: normal;
}

.proyects{
margin-top: 8vh;
margin-bottom: 6vh;
display: flex;
flex-direction: column;
    .react-multi-carousel-list{
      width: 80%;
      align-self: center;
    }

    a{

      align-self: center;

      .ver-mas{
        width: 11vw;
        height: 5vh;
        align-self: center;
        letter-spacing: 0.02em;
        color: #18144D;
        padding-left: 1em;
        padding-right: 1em;
        font-size: 0.82em;
        background-color: transparent;
        border-color: #18144D;
        border-width: 1px;
        border-radius: 3px;
        font-family: 'Source Sans Pro', sans-serif;
          font-style: normal;
          font-weight: normal;
      }
    }  
}


.title{
  color: #0A4B73;
}




p.subtitle {
  font-size: 1.1em;
}

.logo{
  position: relative;
  height: 100%;
  padding-right: 2vw;
  a {
    align-content: center;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
  }
  p{
    padding-top: 2vh;
    color: black;
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    font-size: 1.2em;
    line-height: 2.5vh;
    letter-spacing: 0.01em;
  }
  .texto, .metodologias subtitle {
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 2.5vh;
    letter-spacing: 0.01em;

  }
}

figure{
  position: relative;
  margin: 0 !important;
  

}

.image img{
  height: 100%;
  width: auto;
}



.metodologias {
 padding-top: 6vh;
  .title{
    font-size: 2em;
  font-style: normal;
  font-weight: normal;
  }
.subtitle {
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: 2.5vh;
  letter-spacing: 0.01em;
  color: black;
}
}

.partners{
padding-top: 10vh;
margin-right: 5vw;
.partner {
    display: flex;
    justify-content: center;
  }
.title{
  font-size: 1.6em;
  font-style: normal;
  font-weight: normal;
}
}


.contact{
padding-top: 6vh;
.form{
  
  padding-right: 15vw;
  display: flex;
    flex-direction: column;
    justify-content: center;

  .title{
    font-size: 2em;
    font-style: normal;
    font-weight: normal;
  }

  .fields{
    padding-top: 4vh;
    .control{
      width: 100%;
    }
      
      .label{
        font-size: 0.8rem;
      }
      button{
        padding-top: 1vh;
        padding-bottom: 4vh;
        width: 100%;
        background: #18144D;
        border: 2px solid #18144D;
        box-sizing: border-box;
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        line-height: 168%;
        font-size: 0.8em;

        text-align: center;
        letter-spacing: 0.035em;
        text-transform: uppercase;
      }
  }    

}


.data{
  padding-top: 5vh;
  padding-bottom: 5vh;
  .subtitle{
    padding:0;
    margin:0;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 0.85em;
    font-style: normal;
    line-height: 2.5vh;
    font-feature-settings: 'pnum' on, 'lnum' on;
    letter-spacing: 0.01em;
    color: #18144D;
    .icon{
      color:#B04BFF;
    }
  }
  .map{
    padding-top: 3vh;
  }
}
}



@media screen and (max-height: 945px){
  p.title {
    font-size: 1.3em;
  }
  p.subtitle {
    font-size: 0.7em;
  }
}

@media screen and (max-width: 1490px) and (min-width: 1211px){
  p.title {
    font-size: 1.2em;
  }
  p.subtitle {
    font-size: 0.8em;
  }
}

@media screen and (max-width: 1210px) and (min-width: 1130px){
  p.title {
    font-size: 1.2em;
  }
  p.subtitle {
    font-size: 0.9em;
  }
}

@media screen and (max-width: 1129px) and (min-width: 850px), (max-height: 560px){
  p.title {
    font-size: 0.9em;
  }
  p.subtitle {
    font-size: 0.8em;
  }

  
}

@media screen and (max-width: 849px) and (min-width: 800px){
  
    p.title {
      font-size: 0.8em;
  }
  p.subtitle {
    font-size: 0.7em;
  }
}

@media screen and (max-width: 799px) {
    p.title {
      font-size: 0.78em;
  }
  p.subtitle {
    font-size: 0.7em;
  }
  .info{
    height: 100%;
  }
  p.title {
    padding-bottom: 1em;
  } 
  
  @media screen and (max-width: 376px) {
    p.subtitle {
      font-size: 0.65em
    }
  }
  
  @media screen and (max-width: 321px) {
    p.subtitle {
      font-size: 0.58em
    }
  }
  
  
}



`;

export default Detail;
