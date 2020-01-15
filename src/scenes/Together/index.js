import React, { Component } from 'react';
import styled from 'styled-components';

import map from 'assets/Map.png';

import green_squares from 'assets/green_squares.png';
import dots from 'assets/dots.png';

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
  padding: 20px;
  min-height: 100vh;

  .content{
    padding: 60px 40px;
    min-height: 100%;
  }
  .button {
    margin: 30px 0 50px;
    .fa-chart-pie {
      margin-right: 15px !important;;
    }
  }
  #chart {
    max-width: 700px;
    margin-bottom: 30px;
  }

  @media (max-width: 600px) {
    padding: 10px;
    .content {
      padding: 20px 10px;
    }
  }
`;

export default Together;
