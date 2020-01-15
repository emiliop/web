import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import user from 'assets/user.png';
import technology from 'assets/technology.png';
import innovation from 'assets/innovation.png';


require('dotenv').config()

 
class Services extends Component {
    constructor(props) {
        super(props);

        this.state = {
          background: 'white'
        }

        this.responsive = {
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
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

              <StyledServices>


                
                    <div className="banner columns is-centered">

                       

                          <div className="column is-one-quarter lema">
                                    <p>Frase amigable servicios</p>
                          </div>

                          <div className="column is-one-fifth">
                                    <p>Frase amigable servicios</p>
                          </div>

                          <div className="column is-half">
                                    <p>Ayudamos a tu organización, a partir del conocimiento experto e interdisciplinar de la Universidad Nacional de Colombia, a encontrar soluciones innovadoras que transformen el entorno organizacional y/o social en las siguientes líneas: Experiencia de usuario, tecnologías emergentes, procesos de innovación y capacitación/formación.</p>
                          </div>
                            
                          

                    </div>

                    <div className="gallery">

                     <div>
                          <p className="titulo">Galería</p>
                      </div>

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

                        <div className="column box infoCard">
                          <Link to="/statistics">
                                    <p>Queremos darle la posibilidad a los ciudadanos de acceder a nuestros servicios desde por medio electrónico</p>
                                    <p>Cliente: Catastro Distrital</p>
                                    <p>Servicio: Diseño y desarrollo de sitio web</p>
                                    <p>Duración: 1 año</p>
                                    <button>
                                      Area
                                    </button>
                          </Link>  
                        </div>
                        
                        <div className="column box infoCard">
                          <Link to="/statistics">
                                    <p>Buscamos incentivar la participación ciudadana mediante...</p>
                                    <p>Cliente:</p>
                                    <p>Servicio:</p>
                                    <p>Duración:</p>
                                    <button>
                                      Area
                                    </button>
                          </Link>  
                        </div>
                      
                        <div className="column box infoCard">
                          <Link to="/statistics">
                                    <p>Nuestro objetivo es mejorar nuestros productos obteniendo información de los usuarios</p>
                                    <p>Cliente:</p>
                                    <p>Servicio:</p>
                                    <p>Duración:</p>
                                    <button>
                                      Area
                                    </button>
                          </Link>  
                        </div>

                        <div className="column box infoCard">
                          <Link to="/statistics">
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <button>
                                      Area
                                    </button>
                          </Link>  
                        </div>

                        <div className="column box infoCard">
                          <Link to="/statistics">
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <button>
                                      Area
                                    </button>
                          </Link>  
                        </div>
                     

                    </Carousel>

                  </div>
                            
                    <div className="columns sections is-multiline is-hidden-mobile">

                        <div className="column is-full">

                            <p className="title titulo">Tipos de servicios</p>

                        </div>
                      
                        <div className="column logo is-half">
                        <Link to="/detail">
                        <p className="title">Analítica de datos</p>
                            <figure className="image">
                                <img className="" src={user} alt="imagen de grafica de barras"/>
                            </figure>
                            
                            <p className="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis.</p>
                        </Link>  
                        </div>
                      
                        
                        <div className="column logo is-half">
                        <Link to="/detail">
                            <p className="title">Diseño de experiencia</p>  
                            <figure className="image">
                                <img className="" src={innovation} alt="imagen de bogota"/>
                            </figure>
                            
                            <p className="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis.</p>
                            </Link>
                        </div>

                        <div className="column logo is-half">
                        <Link to="/detail"> 
                        <p className="title">Industrias creativas</p>
                            <figure className="image">
                                <img className="is-centered" src={technology} alt="imagen de bogota"/>
                            </figure>
                            
                            <p className="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis.</p>
                            </Link>
                        </div>

                        <div className="column logo is-half">
                        <Link to="/detail"> 
                        <p className="title">Industrias creativas</p>
                            <figure className="image">
                                <img className="is-centered" src={user} alt="imagen de bogota"/>
                            </figure>
                            
                            <p className="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis.</p>
                            </Link>
                        </div>

                        
                      
                    </div>

                    <div className="columns contact">

                      <div className="column is-one-quarter titulo">
                        <p>Contáctanos</p>
                      </div>

                      <div className="column is-one-third">
                        <p>Cuéntanos qué necesitas, nosotros te asesoraremos para que obtengas la solución que tu empresa necesita</p>
                      </div>

                      <div className="column is-one-quarter">
                          <button>
                            Area
                          </button>
                      </div>

                    </div>


            </StyledServices>  
    );
  }
}

const StyledServices = styled.div`
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
    height: 40vh;
    align-items: center;
    background-color: white;

    .is-one-fifth{
      margin-left:auto;
    }

    .squares{
      height: auto;
      width: 30%;
      margin-left:auto;
    }

    .lema{
      font-family: 'Staatliches', cursive;
      color: #18144D;
      text-transform: uppercase;
      font-size: 3em;
      padding-left: 0;
      padding-right: 5%;
      line-height: 5.5vh;

      
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

    li.react-multi-carousel-item {
      padding: 0 0.3%;
  }

  .column.box.infoCard {
    height: 30vh;
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

.sections{
  position: relative;
  height: 45%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 10vh;
  margin-right: 5vw;

 .logo{
  padding-top: 4vh
  .title{
    padding-top: 5vh;
  }
  .texto{
    padding-top: 0vh;
  }
 }

  .titulo{
    font-family: 'Staatliches', cursive;
    color: #18144D;
    text-transform: uppercase;
    font-size: 2em;
    font-style: normal;
    font-weight: normal;
    text-align: center;
  }

  figure{
    display: flex;
  height: 20vh;
  width: auto;
  justify-content: center;
  }
}

.title{
  color: #0A4B73;
}
p.title {
  font-size: 1.5em;
  text-align: center;
}

.subtitle{
  padding: 1% 5%;
  text-align: center;
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

.titulo{
  font-family: 'Staatliches', cursive;
  color: #18144D;
  text-transform: uppercase;
  font-size: 1.8em;
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

export default Services;
