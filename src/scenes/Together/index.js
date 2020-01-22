import React, { Component } from 'react';
import styled from 'styled-components';

import map from 'assets/Map.png';

import green_squares from 'assets/green_squares.png';
import mapback from 'assets/mapback.png';
import dots from 'assets/dots.png';

import gray2 from 'assets/gray2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'



require('dotenv').config()

class Together extends Component {

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

      <StyledTogether>

          <div className="columns contact is-multiline">

          <div className="column is-three-fifths">
          
                <p className="title titulo">¿Quieres iniciar un proyecto con nosotros? ¡Conversemos!</p>
             
          </div>

          <div>

              <figure className="column is-narrow image">
                          <img className="" src={gray2} alt="imagen de bogota"/>
              </figure>

          </div>

          <div className="column form is-half">

              

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
                      <input className="input is-danger" type="email" placeholder="Ej: ejemplo@unal.edu.co"/>
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                      </span>
                    </div>
                    {/* <p className="help is-danger">El correo es inválido</p> */}
                  </div>

                  <div className="field">
                    <label className="label">Número de teléfono</label>
                    <div className="control has-icons-left has-icons-right">
                      <input className="input is-danger" type="text" placeholder="Ej: 3308695879" />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                      </span>
                    </div>
                    {/* <p className="help is-danger">Formato incorrecto</p> */}
                  </div>

                  <div className="field">
                    <label className="label">Breve descripción de lo que te gustaría discutir con nosotros</label>
                    <div className="control">
                      <textarea className="textarea" placeholder="Escriba aquí"></textarea>
                    </div>
                  </div>

                  
                      <button className="button is-link">Enviar</button>
                  

            </div>  

          </div>

          <div className="column data is-half">
            
            <div className="columns"> 

              

              <div className="column">
                  
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

              <div className="column dots">
                    <img className="" src={dots} alt="imagen de bogota"/>
              </div> 

              </div>  

              <div className="columns">
            
                <div className="column map is-half">

                  <figure className="image">
                      <img className="" src={map} alt="imagen de bogota"/>
                  </figure>

                </div>    

              </div> 



          </div>

          </div>    
       
      </StyledTogether>
    );
  }
}

const StyledTogether = styled.div`
  
  min-height: 100vh;

  .contact{
    margin-left: 5vw;
    padding-top: 6vh;
    margin-bottom: 4vh;
    
    .title{
      padding-right: 10%;
      font-size: 4.4em;
      line-height: 1em;
      letter-spacing: 0.02em;
      font-style: normal;
      font-weight: normal;
      font-family: 'Staatliches',cursive;
      color: #18144D;
      text-transform: uppercase;
    }

    .form{
      
      padding-right: 7vw;
      
  
      .fields{
        padding-top: 0;
        .field{
          margin-bottom: 1.3rem;
        }
        .help{
          padding-left: 0;
        }
        .control{
          width: 100%;
          input{
              box-shadow: none;
              border-radius: 0;
              border: 0;
              border-bottom: 1.5px solid #18144D;
              padding-left: 0;
              color: black;
              font-size: 1em;
              font-family: 'Source Sans Pro', sans-serif;
              font-style: normal;
              font-weight: normal;
              height: 2em;
          }
          input::placeholder {
            color: #7F7E91;
            font-size: 1em;
            font-family: 'Source Sans Pro', sans-serif;
            font-style: normal;
            font-weight: normal;
          }
  
          .textarea {
            font-family: 'Source Sans Pro', sans-serif;
              font-style: normal;
              font-weight: normal;
            background-color: #fff;
            border-color: #18144D;
            border-radius: 0px;
            color: black;
        }
          
        }
          
          .label{
            font-size: 0.8rem;
            color: #7F7E91;
            font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: normal;
        margin-bottom: 0;
          }
          button{
            padding-top: 0;
            padding-bottom: 0;
            height: 6vh;
            width: 100%;
            background: #18144D;
            border: 0px solid #18144D;
            box-sizing: border-box;
            font-family: Raleway;
            font-style: normal;
            font-weight: bold;
            line-height: 168%;
            font-size: 0.8em;
            border-radius: 0px;
            text-align: center;
            letter-spacing: 0.035em;
            text-transform: uppercase;
            display: flex;
            justify-content: center;
            align-items: center;
            align-content: center;
            align-self: center;
            text-align: center;
            vertical-align: middle;
          }
      }    
  
    }
  
  
    .data{
      padding: 1.55vh 0 5vh 0;
      margin-left: -5vh;
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
  
     .dots{ 
      display: flex;
      justify-content: center;
     }
  
  
      .map{
        padding-top: 3vh;
        position: relative;
        width: 38.5vw;
        figure{
          background-image: url(${mapback});
          padding-left: 1vw;
          background-size: 90% 90%;
          background-repeat: no-repeat;
          background-position: right bottom;
          padding-bottom: 3vh;
          padding-right: 2vw;
          img{
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: 10px;
    .content {
      padding: 20px 10px;
    }
  }
`;

export default Together;
