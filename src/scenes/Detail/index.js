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

import user from 'assets/user.png';
import technology from 'assets/technology.png';
import innovation from 'assets/innovation.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

require('dotenv').config()

 
class Detail extends Component {
    constructor(props) {
        super(props);

        this.responsive = {
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
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

                    <div className="column is-two-thirds">

                        

                            <div className="column is-two-thirds ">
                            <img className="" src={blockch2} alt="imagen de bogota"/>
                            </div>

                            
                          
                      

                    </div>

                    <div className=" columns">

                    <div className="column is-two-third text">
                      <p className="lema">Innovación, diseño y tecnología para las personas</p>
                      <p>Somos un laboratorio de innovación de la Universidad Nacional de Colombia, con experiencia en la <b>construcción de soluciones tecnológicas</b> que permiten transformar de manera positiva la realidad de las personas y las organizaciones.</p>
                    </div>

                    <div className="column is-one-fifth">
                              <figure className="image">
                                  <img className="squares" src={green_squares} alt=""/>
                              </figure>  
                            </div>

                            </div> 

                  </div>


        
                  <div className="columns contact">

<div className="column form is-half">

    <div>
      <p className="title titulo">¿Quieres iniciar un proyecto con nosotros? ¡Conversemos!</p>
    </div>

    <div className="fields">

        <div className="column ">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate.</p>
                <p>Descripción. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis. Descripción. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis. Descripción. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis.</p>

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

       

    </div> 

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







            </StyledDetail>  
    );
  }
}

const StyledDetail = styled.div`
width: 100vw;
display: flex;
justify-content: center;
flex-direction: column;

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
    background-color: #02CAF4;

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

.react-multi-carousel-list{
  padding-top: 5vh;
  figure{
    height: 35vh;
    width: auto;
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
