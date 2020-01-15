import React, { Component } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import gray from 'assets/gray.png';

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

        <div className="columns is-multiline metodologias">
                  <p className="title titulo column is-full ">Metodologías del Laboratorio</p>
                    <div className="column is-two-thirds">
                            
                            <figure className="image">
                                <img className="is-centered" src={gray} alt="imagen de bogota"/>
                            </figure>
                            
                        </div>
                     <div className="column is-one-third">

                       
                        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis.</p> 
                        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis.</p>
                    </div>
         </div> 


         <div className="columns is-multiline metodologias">
                  <p className="title titulo column is-full ">Metodologías del Laboratorio</p>
                    <div className="column is-two-thirds">
                            
                            <figure className="image">
                                <img className="is-centered" src={gray} alt="imagen de bogota"/>
                            </figure>
                            
                        </div>
                     <div className="column is-one-third">

                       
                        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis.</p> 
                        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit dolor, at rhoncus libero pretium vitae. Nullam eleifend euismod nulla dignissim tempus. Sed fermentum est vitae tellus laoreet convallis.</p>
                    </div>
          </div>  

            
      </StyledMetodologies>
    );
  }
}

const StyledMetodologies = styled.div`
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

export default Metodologies;
