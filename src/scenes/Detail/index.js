import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import green_squares2 from 'assets/green_squares2.png';

import puede_ser from 'assets/puede_ser.png';
import blockch from 'assets/blockch.png';
import blockch2 from 'assets/blockch2.png';
import detail from 'assets/detail.png';
import detailback from 'assets/detailback.png';
import biblioteca from 'assets/biblioteca.png';
import biblioteca0 from 'assets/biblioteca0.png';
import biblioteca2 from 'assets/biblioteca2.png';
import galleryback from 'assets/galleryback.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import axios from 'axios';


require('dotenv').config()

 
class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
          background: '#02CAF4', 
          services: []
        }

        this.responsive = {
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            partialVisibilityGutter: 10 // this is needed to tell the amount of px that should be visible.
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
        
        this.responsiveStatic = {
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 1// this is needed to tell the amount of px that should be visible.
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            partialVisibilityGutter: 1 // this is needed to tell the amount of px that should be visible.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            partialVisibilityGutter: 1 // this is needed to tell the amount of px that should be visible.
          }
        };
      
  }

  componentDidMount(){
    console.log(this.props);
    axios.get(`http://localhost:8000/api/services/${this.props.match.params.id}`)
       .then(response => {
         this.setState({ services: response.data });
         console.log(this.state.services);
         console.log(this.state.services.background);
         this.props.updateNavColor(this.state.services.background);
       })
       .catch(function (error) {
         console.log(error);
       })
    
    // this.props.updateNavColor(this.state.background);

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

      
            <StyledDetail>

                
                    <div className="banner columns is-centered">

                        <div className=" columns is-multiline">

                            <div className="column is-5 is-half-mobile text">
                              
                                <div className=" columns is-multiline">

                                    {/* <button onClick={() => this.props.updateNavColor(this.state.background)}>
                                      Area
                                    </button> */}
                                
                                    <p className="column lema">Sitio web villas del progreso</p>
                                    
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

                            <div className="column is-1 is-half-mobile">
                                      <figure className="image">
                                          <img className="squares" src={green_squares2} alt=""/>
                                      </figure>  
                            </div>

                            <div className="column is-half is-full-mobile">

                                <div className="column is-two-thirds ">
                                    <img className="is-centered" src={detail} alt="imagen de bogota"/>
                                </div>

                            </div>

                        </div>

                         

                  </div>


        
                  <div className="columns contenido">

                    <div className="column form is-one-fifth is-hidden-mobile">

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

                        <div className="subtitle">Propuesta de valor del proyecto. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero.</div>
                        
                        <div className="servicio">
                            <p>Servicios:</p> 
                          <div className="servicios">
                              <FontAwesomeIcon icon={faFacebookF} />Experiencia de usuario
                          </div> 
                          <div className="servicios">
                              <FontAwesomeIcon icon={faTwitter} /> tecnologias emergentes  
                          </div>     
                          <div className="servicios">
                              <FontAwesomeIcon icon={faWhatsapp} /> Procesos de innovación
                          </div>
                              
                        </div>
                        
                        <div className="contenidoUno">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate.</p>
                            <p>Descripción. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis. Descripción. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis. Descripción. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis.</p>
                        </div>
                        
                        <img className="" src={puede_ser} alt="imagen de grafica de barras"/>
                        
                        <div className="contenidoDos">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate.</p>
                            <p>Descripción. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis. Descripción. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis. Descripción. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis.</p>
                        </div>
                             
                    </div>

                  </div> 

                  <div className="gallery">

                     <div>
                          <p className="column titulo is-offset-one-fifth">Galería</p>
                      </div>

                      <Carousel className="columns" additionalTransfrom={0}
                                                    arrows
                                                    customLeftArrow={<CustomLeftArrow />}
                                                    customRightArrow={<CustomRightArrow />}
                                                    customDot={<CustomDot />}
                                                    autoPlaySpeed={3000}
                                                    centerMode
                                                    infinite
                                                    itemClass=""
                                                    keyBoardControl
                                                    renderButtonGroupOutside={false}
                                                    showDots={true}
                                                    renderDotsOutside
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

                      <Carousel className="columns" additionalTransfrom={0}
                                                    arrows={false}
                                                    autoPlaySpeed={3000}
                                                    centerMode={false}
                                                    infinite={false}
                                                    itemClass=""
                                                    keyBoardControl
                                                    renderButtonGroupOutside={false}
                                                    showDots={false}
                                                    renderDotsOutside={false}
                                                    slidesToSlide={1}
                                                    responsive={this.responsiveStatic}>

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
    display: flex;
    margin-left: 0vw;
    margin-right: 0vw
    margin-top: 0vh;
    height: 40vh;
    align-items: center;
    background-image: url(${detailback});
    background-color: #02CAF4;
    background-blend-mode: multiply;
    background-position:
    bottom left,
    top right;
    background-size: 100% 33%,100% 50%; 
    background-repeat: no-repeat; 

    .columns{
      height: 100%;
      padding-bottom: 0;
      padding-top: 0;
      margin-top: 0;
      margin-bottom: 0;
      display: flex;
    
    .text{
      height: 100%;
      padding-bottom: 0;
      padding-top: 0;
      margin-top: 0;
      margin-bottom: 0;

      .is-multiline{
        margin-left: 4vw;
        height: 100%;
        padding-bottom: 0;
        padding-top: 0;
        margin-top: 0;
        margin-bottom: 0;

        .is-half{
          padding-bottom: 0;
          padding-top: 0;
          margin-top: 0;
          margin-bottom: 0;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }

  .is-one-fifth{
  }

  .squares{
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
  padding-left: 1.5rem;
  width: 100%;
  margin-top: 1vh;
  .subtitle{
    padding: 0;
    text-align: left;
  }
  .texto{
    display: flex;
    flex-direction: column;
    
    .contenidoDos, .contenidoUno{
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: normal;
      font-size: 1.2em;
      line-height: 4vh;
      color: #18144D;
    }

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

.subtitle{
  font-family: Source Sans Pro;
font-style: normal;
font-weight: 600;
font-size: 1.5em !important;
line-height: 4vh;

letter-spacing: 0.05em;

color: #18144D;
}

.servicio{
  margin-bottom: 4vh;
  display: flex;
  align-items: center;

  .servicios{
    padding-left: 1vw;
    padding-right: 1vw;
    border-right: 1px solid #D5D5D5;
    display: flex;
    align-items: center;
    margin-bottom: 0;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 1vh;
    letter-spacing: 0.01em;
    color: #18144D;
    text-decoration: underline;

    .svg-inline--fa{
      padding: 1%;
      margin-bottom: 0;
      margin-right: 1vw;
    }

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
      padding-bottom: 3vh;
      background-image: url(${galleryback});
      background-size: 100% 50%;
      background-repeat: no-repeat;
      background-position: left bottom;

      .logo{
        p{
          padding-top: 4.5vh;
          color: #18144D;
          font-family: 'Raleway', sans-serif;
          font-style: italic;
          font-weight: 600;
          font-size: 1.2em;
          line-height: 2.5vh;
          letter-spacing: 0.01em;
        }
      }
    
      .custom-right-arrow{
        position: absolute !important;
        bottom: 4.5vh;
        right: 28%;
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
        right: 30%;
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

      figure{
        height: auto;
        width: 100%;
      }

      .image img {
        height: 50vh;
        width: 100%;
      }
  }

  .react-multi-carousel-dot-list {
    position: relative;
    bottom: 9vh;
    display: flex;
    width: 76%;
    left: 26%;
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
    padding-top: 3vh;
    color: #18144D;
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
  .banner{
    height: auto;
  }

  .squares{
    margin-left: auto;
  }

  .servicio{
    align-items: self-start;
    flex-direction: column;
  }

  .servicios{
    border-right: 0px !important;
  }

  .svg-inline--fa {
    padding: 20%;
    width: 3.5vh;
    height: 3.5vh;
    margin-bottom: 1vh !important;
}

li.react-multi-carousel-item {
  max-width: 45.5vw !important;
}

li.react-multi-carousel-item.react-multi-carousel-item--active {
  min-width: 75.5vw !important;
}

i.custom-right-arrow {
  right: 13% !important;
}

i.custom-left-arrow {
  right: 16% !important;
}

ul.react-multi-carousel-dot-list {
  left: -20% !important;
}

.proyects{
  ul.react-multi-carousel-track {
    flex-direction: column;
  }
}

  .ver-mas{
    width: 75vw !important;
  }

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
