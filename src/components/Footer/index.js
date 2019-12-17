import React from 'react';
import styled from 'styled-components';
import logo from 'assets/logo_org.png';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="columns">
        <div className="column is-half">
          <div className="columns">
            <div className="column is-half">
                <img className="is-hidden-mobile" src={logo} /> 
                <p>
                  Laboratorio de innovación, creatividad y nuevas tecnologías
                </p>
            </div>
            <div className="column is-half">
                <p>
                CONTÁCTANOS
                </p>
                <p>
                Avenida El Dorado Carrera 45 # 26 - 33 Bogotá, Colombia Celular (+57) 300 568-7569 vivelab_bog@unal.edu.co
                </p>
            </div>
          </div>
          
        </div>

       
        <div className="column is-half">
          <div className="columns">
            <div className="column is-half">
                <p>
                SECCIONES DE LA WEB
                </p>
                <p>
                  Nuestro trabajo
                </p>
                <p>
                  Servicios
                </p>
                <p>
                  Metodologías
                </p>
                <p>
                  Trabajemos juntos
                </p>
                
            </div>
            <div className="column is-half">
                <p>
                SÍGUENOS
                </p>
                <p>
                Avenida El Dorado Carrera 45 # 26 - 33 Bogotá, Colombia Celular (+57) 300 568-7569 vivelab_bog@unal.edu.co
                </p>
            </div>
            
          </div>
          
        </div>
      </div>
    </StyledFooter>
  );          
}

const StyledFooter = styled.div`
  border-top: 1px solid grey;
  margin: 0;
  padding: 0.5em 3em;
  text-align: center;
  display: flex;
  align-items: center;
  height: 25vh;
  background-color: #18144D;
  color: white;

  position: relative;
  bottom: 0;
  width: 100%;

  @media (max-width: 1150px) {
  
      font-size: 0.9rem;
}

@media screen and (max-width: 415px) {
  
    font-size: 0.8rem;
 
}

@media screen and (max-width: 376px) {
 
    font-size: 0.7rem;
 
}

@media screen and (max-width: 321px) {
 
    font-size: 0.6rem;
  
}
`;

export default Footer;
