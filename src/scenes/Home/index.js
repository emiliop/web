import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import map from 'assets/Map.png';

import green_squares from 'assets/green_squares.png';

import backslides from 'assets/backgroundsliders.png';

import puede_ser from 'assets/puede_ser.png';
import blockch from 'assets/blockch.png';
import blockch2 from 'assets/blockch2.png';

import user from 'assets/user.png';
import technology from 'assets/technology.png';
import innovation from 'assets/innovation.png';

import alcaldia from 'assets/alcaldia.png';
import espectador from 'assets/espectador.png';
import mintic from 'assets/mintic.png';
import javeriana from 'assets/javeriana.png';
import dane from 'assets/dane.png';
import sanitas from 'assets/sanitas.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'


class Home extends Component {

  constructor(props) {
    super(props);
 
    this.responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 20 // this is needed to tell the amount of px that should be visible.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        partialVisibilityGutter: 5 // this is needed to tell the amount of px that should be visible.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 3 // this is needed to tell the amount of px that should be visible.
      }
    };
  }

  

  render() {
    return (
            <StyledHome>
              
                  <div className="banner columns is-centered">

                    <div className="column is-two-thirds">

                        <div className=" columns">

                            <div className="column is-two-thirds lema">
                              <p>Innovación, diseño y tecnología para las personas</p>
                            </div>

                            <div className="column is-one-fifth">
                              <figure className="image">
                                  <img className="squares" src={green_squares} alt=""/>
                              </figure>  
                            </div>
                          
                        </div> 

                    </div>

                    <div className="column is-one-third text">
                      <p>Somos un laboratorio de innovación de la Universidad Nacional de Colombia, con experiencia en la <b>construcción de soluciones tecnológicas</b> que permiten transformar de manera positiva la realidad de las personas y las organizaciones.</p>
                    </div>

                  </div>

                  <Carousel className="columns" partialVisible={true} responsive={this.responsive}>

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

                      <div className="column logo">
                      <Link to="/contrareference"> 
                          <figure className="image">
                              <img className="" src={puede_ser} alt="imagen de bogota"/>
                          </figure>
                          <p className="title">Contrareferencias</p>
                          </Link>
                      </div>

                  </Carousel>
              
                            
                  <div className="columns sections is-multiline is-hidden-mobile">

                        <div className="column is-full">

                            <p className="title titulo">Lineas de servicio del Laboratorio</p>

                        </div>
                      
                        <div className="column logo is-one-third">
                        <Link to="/statistics">
                            <figure className="image">
                                <img className="" src={user} alt="imagen de grafica de barras"/>
                            </figure>
                            <p className="title">1 – Experiencia de usuario</p>
                            <p className="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis.</p>
                        </Link>  
                        </div>
                      
                        
                        <div className="column logo is-one-third">
                         <Link to="/contrareference"> 
                            <figure className="image">
                                <img className="" src={technology} alt="imagen de bogota"/>
                            </figure>
                            <p className="title">2 – Tecnologías emergentes</p>
                            <p className="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis.</p>
                            </Link>
                        </div>

                        <div className="column logo is-one-third">
                         <Link to="/contrareference"> 
                            <figure className="image">
                                <img className="is-centered" src={innovation} alt="imagen de bogota"/>
                            </figure>
                            <p className="title">3 – Procesos de innovación</p>
                            <p className="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis.</p>
                            </Link>
                        </div>
                       
                  </div>

                  <div className="columns metodologias">
                    <div className="column is-two-thirds">
                            <p className="title titulo">Metodologías del Laboratorio</p>
                            <figure className="image">
                                <img className="is-centered" src={innovation} alt="imagen de bogota"/>
                            </figure>
                            
                        </div>
                     <div className="column is-one-third">

                       
                        <p className="subtitle">Esta herramienta es de carácter informativo y constituye un aporte desde el Observatorio Distrital de Víctimas del Conflicto Armado a la gestión de conocimiento para el fortalecimiento de la implementación de la Política Pública Distrital de Víctimas. Proporciona información derivada de un ejercicio de analítica descriptiva, realizado en alianza con la Alta Consejería Distrital de TIC y el ViveLab de la Universidad Nacional de Colombia, sobre los datos históricos recolectados desde el año 2010 hasta el año 2019, en el marco de la atención a víctimas.</p> 
                    </div>
                  </div> 

                  <div className="columns partners is-multiline">

                    <div className="column is-full">

                         <p className="title titulo">Quiénes confiaron en nosotros</p>

                     </div>

                      <div className="column is-one-third partner">

                            <figure className="image">
                                <img className="" src={alcaldia} alt="imagen de bogota"/>
                            </figure>

                      </div>

                      <div className="column is-one-third partner">

                            <figure className="image">
                                <img className="" src={espectador} alt="imagen de bogota"/>
                            </figure>

                      </div>

                      <div className="column is-one-third partner">

                            <figure className="image">
                                <img className="" src={mintic} alt="imagen de bogota"/>
                            </figure>

                      </div>

                      <div className="column is-one-third partner">

                            <figure className="image">
                                <img className="" src={javeriana} alt="imagen de bogota"/>
                            </figure>

                      </div>

                      <div className="column is-one-third partner">

                            <figure className="image">
                                <img className="" src={dane} alt="imagen de bogota"/>
                            </figure>

                      </div>

                      <div className="column is-one-third partner">

                            <figure className="image">
                                <img className="" src={sanitas} alt="imagen de bogota"/>
                            </figure>

                      </div>

                  </div>

                  <div className="columns contact">

                    <div className="column form is-half">

                        <div>
                          <p className="title titulo">¿Quieres iniciar un proyecto con nosotros? ¡Conversemos!</p>
                        </div>

                        <div className="fields">

                            <div className="field">
                                <label className="label">Nombre completo</label>
                                <div className="control">
                                  <input className="input" type="text" placeholder="Ej: Carlos Sanchez"/>
                                </div>
                            </div>

                            <div className="field">
                              <label className="label">Correo</label>
                              <div className="control has-icons-left has-icons-right">
                                <input className="input is-danger" type="email" placeholder="Ej: Carlos Sanchez"/>
                                <span className="icon is-small is-left">
                                  <i className="fas fa-envelope"></i>
                                </span>
                                <span className="icon is-small is-right">
                                  <i className="fas fa-exclamation-triangle"></i>
                                </span>
                              </div>
                              <p className="help is-danger">El correo es inválido</p>
                            </div>

                            <div className="field">
                              <label className="label">Número de teléfono</label>
                              <div className="control has-icons-left has-icons-right">
                                <input className="input is-danger" type="text" placeholder="Ej: Carlos Sanchez" />
                                <span className="icon is-small is-left">
                                  <i className="fas fa-user"></i>
                                </span>
                                <span className="icon is-small is-right">
                                  <i className="fas fa-check"></i>
                                </span>
                              </div>
                              <p className="help is-danger">Formato incorrecto</p>
                            </div>

                            <div className="field">
                              <label className="label">Breve descripción de lo que te gustaría discutir con nosotros</label>
                              <div className="control">
                                <textarea className="textarea" placeholder="Escriba aquí"></textarea>
                              </div>
                            </div>

                            <div className="field is-grouped">
                              <div className="control">
                                <button className="button is-link">Enviar</button>
                              </div>
                            </div>

                      </div>  

                  </div>

                  <div className="column data is-half">
                      
                      <div className="columns is-multiline"> 

                        <div className="column data is-full">
                             
                              <p className="subtitle "><span className="icon">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        </span>
                                        Avenida El Dorado Carrera 45 # 26 - 33</p> 
                              <p className="subtitle "><span className="icon">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                        </span>(+57) 300 568-7569</p> 
                              <p className="subtitle "><span className="icon">
                                        <FontAwesomeIcon icon={faAt} />
                                        </span>vivelab_bog@unal.edu.co</p> 

                        </div>

                        <div className="column map is-full">

                            <figure className="image">
                                <img className="" src={map} alt="imagen de bogota"/>
                            </figure>

                        </div>    

                        </div> 
                    
                  </div>

                

              </div>    
               
            </StyledHome>    
    );
  }
}

const StyledHome = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .banner, .metodologias, .contact, .partners, .sections {
    margin-left: 5vw;
  }

  .banner{
    width: 90%;
    display: flex;
    padding-top: 0vh;
    margin-top: 0vh;
    height: 30vh;
    align-items: center;

    .is-two-thirds{
      .columns{
        padding-right: 3%;
      }
    }

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
      padding-left: 0%;
      font-size: 1.1em;
      line-height: 1.6em;
      letter-spacing: 0.01em;
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

  .react-multi-carousel-list{
    padding-top: 5vh;
    margin-right: 41px;
    margin-left: calc(5vw - 12px);
    figure{
      height: auto;
      width: 100%;
      img{
        height: auto;
        width: 100%;
      }
    }
    .title{
      padding-right: 10vw;
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
  }

  .subtitle{
    padding: 1% 5%;
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

  .metodologias {
    margin-right: 5vw;
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
    .title{
      font-size: 2em;
      font-style: normal;
      font-weight: normal;
    }

    .fields{
      padding-top: 4vh;
      .control{
        width: 100%;
        input{
            box-shadow: none;
            border-radius: 7px;
            border: 0;
            border-bottom: 3px solid #18144D
        }
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


  

 


export default Home;
