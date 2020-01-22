import React, { Component } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import gray from 'assets/gray.png';

import horizontaldots from 'assets/horizontaldots.png';

require('dotenv').config()

class Metodologies extends Component {

  constructor(props) {
    super(props);
    this.state = {
      background: 'white'
    }
    
  }

  componentDidMount(){
    this.props.updateNavColor(this.state.background);
  }

  render() {
    

    return (
      <StyledMetodologies>
        <div className="banner columns is-centered">

            <div className="column lema">
                      <p>Metodologías</p>
            </div>

            <div className="column is-one-fifth">
                <img className="squares" src={horizontaldots} alt=""/>
            </div>

            <div className="column is-half">
                      <p>Realizamos nuestros proyectos a partir del uso de metodologías ágiles y marcos de trabajo como Design Thinking, Scrum y Lean UX, las cuales nos brindan la posibilidad de desarrollar proyectos de una forma iterativa e incremental y así ofrecer el mayor valor y satisfacción en las soluciones que desarrollamos.</p>
            </div>

        </div>


        <div className="columns is-multiline metodologias">


                  <div className="column is-full">
                            
                            <figure className="image">
                                <img className="is-centered" src={gray} alt="imagen de bogota"/>
                            </figure>
                            
                  </div>
                 
                  <div className="column is-full">

                    <div className="columns">

                          <div className="column is-one-third">
                               <p className="titulo">Scrum</p>
                               <p className="text">Trabajamos para que la interacción de los clientes y/o usuarios con los productos o servicios diseñados sean eficaces, eficientes y satisfactorios.</p> 
                          </div>

                          <div className="column is-one-third">
                               <p className="titulo">Design thinking</p>
                               <p className="text">Trabajamos para que la interacción de los clientes y/o usuarios con los productos o servicios diseñados sean eficaces, eficientes y satisfactorios.</p> 
                          </div>

                          <div className="column is-one-third">
                               <p className="titulo">Estrategias de innovación</p>
                               <p className="text">Trabajamos para que la interacción de los clientes y/o usuarios con los productos o servicios diseñados sean eficaces, eficientes y satisfactorios.</p> 
                          </div>
                 

                    </div>
                       
                  </div>
         </div> 


         <div className="columns is-multiline recursos">

                  <p className="title titulo column is-full ">Recursos gratuitos</p>
           
                  <div className="column is-full">
                            
                            <figure className="image">
                                <img className="is-centered" src={gray} alt="imagen de bogota"/>
                            </figure>
                            
                  </div>
                     
          </div>  

            
      </StyledMetodologies>
    );
  }
}

const StyledMetodologies = styled.div`

width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

.banner{
  width: 100%;
  display: flex;
  padding-top: 5vh;
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

.metodologias, .recursos{
  width: 91%;
}

.metodologias{
  p.titulo {
    padding-bottom: 2vh;
    color: #18144D;
    font-family: 'Raleway',sans-serif;
    font-weight: 800;
    font-size: 1.2em;
    line-height: 1.2em;
    letter-spacing: 0.01em;
  }
  p.text{
    color: #18144D;
    font-size: 1em;
    line-height: 1.6em;
    letter-spacing: 0.01em;
  }
}

.recursos{
  margin-top: 5vh;
  margin-bottom: 50vh;
  p{
    font-family: 'Staatliches',cursive;
    color: #18144D;
    text-transform: uppercase;
    font-size: 2em;
    font-style: normal;
    font-weight: normal;
  }
}

  @media (max-width: 600px) {
    padding: 10px;
    .content {
      padding: 20px 10px;
    }
  }
`;

export default Metodologies;
