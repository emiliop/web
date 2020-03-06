import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import user from 'assets/user.png';
import technology from 'assets/technology.png';
import innovation from 'assets/innovation.png';

import horizontaldots from 'assets/horizontaldots.png';

import retosback from 'assets/retosback.png';
import slides2 from 'assets/slides2.png';

import axios from 'axios';


require('dotenv').config()

 
class Services extends Component {
    constructor(props) {
        super(props);

        this.state = {
          background: 'white',
          services: []
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
    axios.get('http://newadmin7.vivelabbogota.com/api/services')
       .then(response => {
         this.setState({ services: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
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

                    <div className="banner columns is-multiline is-centered">

                        <div className="column is-full-mobile lema">
                                  <p>Servicios</p>
                        </div>

                        <div className="column is-hidden-mobile is-one-fifth">
                            <img className="squares" src={horizontaldots} alt=""/>
                        </div>

                        <div className="column is-full-mobile is-half">
                                  <p>Ayudamos a tu organización, a partir del conocimiento experto e interdisciplinar de la Universidad Nacional de Colombia, a encontrar soluciones innovadoras que transformen el entorno organizacional y/o social en las siguientes líneas: Experiencia de usuario, tecnologías emergentes, procesos de innovación y capacitación/formación.</p>
                        </div>

                    </div>

                    <div className="gallery">

                   
                      <p className="titulo">Entendemos tus retos</p>
                     

                      <Carousel className="columns" additionalTransfrom={0}
                                                    arrows={true}
                                                    customLeftArrow={<CustomLeftArrow />}
                                                    customRightArrow={<CustomRightArrow />}
                                                    customDot={<CustomDot />}
                                                    autoPlaySpeed={3000}
                                                    centerMode={false}
                                                    infinite={true}
                                                    keyBoardControl={true}
                                                    renderButtonGroupOutside={false}
                                                    showDots={true}
                                                    renderDotsOutside={true}
                                                    slidesToSlide={1}
                                                    responsive={this.responsive}>
                                                    {
                                                      this.state.services.map( service => (<div className="column box infoCard" key={service.id}>
                                                                                    <Link to={"/detail/"+service.id}>
                                                                                              <p className="header">{service.description}</p>
                                                                                              <div className="dataInfo">
                                                                                                  <p className="client">Cliente: {service.client}</p>
                                                                                                  <p className="service">Servicio: {service.service1}</p>
                                                                                                  <p className="duration">Duración: {service.duration}</p>
                                                                                              </div>
                                                                                                                                  
                                                                                              <button>
                                                                                                Información sobre el proyecto
                                                                                              </button>
                                                                                    </Link>  
                                                                                  </div>))
                                                  } 
                      </Carousel>

                  </div>
                            
                    <div className="columns sections is-multiline">

                        <div className="column is-full portafolio">

                            <p className="title titulo">Nuestro portafolio de servicios</p>

                        </div>
                      
                        <div className="column logo is-full">
                                <div className="columns">
                                 
                                    <div className="column is-one-fifth">
                                        <figure className="image">
                                            <img className="" src={user} alt="imagen de grafica de barras"/>
                                        </figure>
                                    </div>

                                    <div className="column text">
                                        <p className="title"><span>1 –</span> Experiencia de usuario</p>
                                        <p className="texto">Trabajamos para que la interacción de los clientes y/o usuarios con los productos o servicios diseñados sean eficaces, eficientes y satisfactorios. Con nosotros podrás descubrir una forma innovadora de generar contenidos digitales y desarrollar estrategias de accesibilidad y/o usabilidad de tus productos y servicios.</p>
                                        
                                        <div className="columns options">
                                          <div className="column">
                                            <ul>
                                              <li>Evaluación heurística (evaluación de expertos)</li>
                                              <li>Test con usuarios</li>
                                              <li>Arquitectura de información</li>
                                              <li>Experiencia de cliente incógnito</li>
                                              <li>Diseño de servicios</li>
                                            </ul>
                                          </div>

                                          <div className="column">
                                            <ul>
                                              <li>Diseño de interfaces (UI)</li>
                                              <li>Experiencia de cliente (CX)</li>
                                              <li>Investigación de usuarios</li>
                                              <li>Validación emocional de contenido</li>
                                              <li>Accesibilidad para contenido digital</li>
                                            </ul>
                                          </div>
                                        </div>

                                        <p className="texto">Si deseas conocer en más detalle cada uno de estos servicios, puedes consultar nuestro portafolio de servicios haciendo clic aquí.</p>
                                        

                                    </div>
                                
                                </div>
                                
                        </div>
                      
                        
                        <div className="column logo is-full">
                                <div className="columns">

                                    <div className="column is-one-fifth">
                                        <figure className="image">
                                            <img className="" src={technology} alt="imagen de grafica de barras"/>
                                        </figure>
                                    </div>
                                
                                    <div className="column text">
                                        <p className="title"><span>2 –</span> Tecnologías emergentes</p>
                                        <p className="texto">Utilizamos herramientas y/o estrategias novedosas en la producción de software para potenciar los métodos de innovación digitales.</p>

                                        <div className="columns options">
                                          <div className="column">
                                            <ul>
                                              <li>Big Data</li>
                                              <li>Datos abiertos</li>
                                              <li>Machine learning</li>
                                              <li>Internet de las cosas</li>
                                            </ul>
                                          </div>

                                          <div className="column">
                                            <ul>
                                              <li>Blockchain</li>
                                              <li>Analítica y visualización de datos</li>
                                              <li>Realidad virtual y aumentada</li>
                                            </ul>
                                          </div>
                                        </div>

                                        <p className="texto">Si deseas conocer en más detalle cada uno de estos servicios, puedes consultar nuestro portafolio de servicios haciendo clic aquí.</p>
                                    </div>
                                    
                                
                                </div>
                                
                        </div>

                        <div className="column logo is-full">
                              <div className="columns">

                                  <div className="column is-one-fifth">
                                      <figure className="image">
                                          <img className="" src={user} alt="imagen de grafica de barras"/>
                                      </figure>
                                  </div>
                              
                                  <div className="column text">
                                      <p className="title"><span>3 –</span> Procesos de innovación</p>
                                      <p className="texto">Orientamos las dinámicas de innovación para asegurar su materialización, sostenibilidad y formular sus alternativas a situaciones o problemas complejos.</p>

                                      <div className="columns options">
                                          <div className="column">
                                            <ul>
                                              <li>Innovación social</li>
                                              <li>Innovación abierta</li>
                                              <li>Estudios y análisis</li>
                                            </ul>
                                          </div>

                                          <div className="column">
                                            <ul>
                                            </ul>
                                          </div>
                                        </div>

                                        <p className="texto">Si deseas conocer en más detalle cada uno de estos servicios, puedes consultar nuestro portafolio de servicios haciendo clic aquí.</p>
                                  </div>
                                  
                              
                              </div>
                              
                        </div>

                        <div className="column logo is-full">
                              <div className="columns">

                                  <div className="column is-one-fifth">
                                      <figure className="image">
                                          <img className="" src={technology} alt="imagen de grafica de barras"/>
                                      </figure>
                                  </div>
                              
                                  <div className="column text">
                                      <p className="title"><span>4 –</span> Formación a la medida</p>
                                      <p className="texto">Desarrollamos procesos de capacitación y/o formación para construir competencias en el diseño y desarrollo de soluciones efectivas.</p>
                                      <div className="columns options">
                                          <div className="column">
                                            <ul>
                                            </ul>
                                          </div>

                                          <div className="column">
                                            <ul>
                                            </ul>
                                          </div>
                                        </div>
                                      <p className="texto">Si deseas conocer en más detalle cada uno de estos servicios, puedes consultar nuestro portafolio de servicios haciendo clic aquí.</p>
                                  </div>
                                  
                              
                              </div>
                              
                        </div>

                        
                      
                    </div>

                    <div className="columns is-multiline contact">

                      <div className="column is-full-mobile is-one-quarter titulo">
                        <p>Contáctanos</p>
                      </div>

                      <div className="column is-full-mobile is-half">
                        <p>Cuéntanos qué necesitas, nosotros te asesoraremos para que obtengas la solución que tu empresa necesita</p>
                      </div>

                      <div className="column is-full-mobile is-one-quarter">
                        <Link to="/together">
                          <button>
                            Trabajemos juntos
                          </button>
                        </Link>
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
  padding-top: 5vh;
  margin-bottom: 6vh;
  margin-top: 0vh;
  height: 30vh;
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
    padding: 5vh 0 0 0;

    background-image: url(${retosback});
    background-size: 100% 55%;
    background-repeat: no-repeat;
    background-position: left top;

    .titulo{
      margin-left: 5vw;
      margin-bottom: 5vh;
      align-self: flex-start;
    }

    li.react-multi-carousel-item {
      padding: 0 0.3%;
  }

  .column.box.infoCard {
    height: 35vh;
    border: 2px solid #18144D;
    font-family: 'Fira Sans', sans-serif;
    color: #18144D;
    font-size: 0.9em;
    line-height: 1.7em;
    letter-spacing: 0.01em;
    padding: 7%;

    a{
      color: #18144D;
      height: 100%;
      display: flex;
      flex-direction: column;

      .dataInfo{
        margin-top: auto;
      }

      button{
        margin-top: 5%;
        background: #18144D;
        border: 2px solid #18144D;
        color: white;
        font-family: 'Raleway', sans-serif;
        font-weight: 800;
        font-size: 1em;
        line-height: 1.2em;
        letter-spacing: 0.01em;
        height: 20%;
      }
    }
  }
  
  .react-multi-carousel-list{
        padding: 0.1% 0 10vh 0;
        width: 95%;
        margin: 0;
      }

      .custom-right-arrow{
        position: absolute !important;
        bottom: 1.5vh;
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
        bottom: 1.5vh;
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
    bottom: 5vh;
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
  padding-top: 5vh;
  padding-bottom: 5vh;
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  padding-left: 5vw;
 

  .column.is-full {
    display: flex;
  }

  .portafolio{
    background-image: url(${slides2});
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: -5vw;
    width: 96vw;
    height: 13vh;
    display: flex;
    align-items: center;

    p{
      margin-left: 3vw;
    }
  }

 .logo{
    padding-top: 5vh
    a{
      width: 100%;
    }
    .text {
      width: 90vw;
      padding-right: 5vw;
      .options {
        margin-top: 1vh;
        margin-left: 1vw;
        ul{
          list-style-type: disc;
          color: #18144D;
      }
    }
      
    }
    .title{
      padding-top: 0;
      text-align: start;
      color: #18144D;
    }
    .texto{
      padding-top: 0vh;
      color: #18144D;
    }
    span{
      color: #FF4668;
    }
    .text {
    padding-right: 5vw;
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

.contact{
  
  width: 95%;
  display: flex;
  align-items: center;
  height: 25vh;

  .column.is-half {
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 1.8em;
    letter-spacing: 0.01em;
    color: #18144D;
    p {
      padding-right: 35%;
    }
  }

  button{
    height: 7vh;
    width: 70%;
    color: white;
    background: #18144D;
    border: 1px solid;
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    font-size: 1em;
    line-height: 1.2em;
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
  font-size: 2.3em;
}


}

@media screen and (max-width: 1023px){
  .banner, .contact{
    height: auto;
  }
  .column.is-full-mobile.is-half{
    font-size: 1em;
    padding-left: 3.5%;
  }

  .sections{
    .titulo{
      text-align: start;
    }
  }
  .contact{
    button{
      width: 90%;
      margin-bottom: 5vh;
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
