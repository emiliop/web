import React from 'react';
import styled from 'styled-components';
import logo from 'assets/lab101.png';
import escudo from 'assets/escudo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <StyledFooter>
      <div className="columns contenido">
          
            <div className="column logo">

              <div className="columns is-multiline">

                <div className="column is-full is-half-mobile">
                
                   <img src={logo} /> 
                  
                </div>

                <div className="column is-full is-half-mobile">
                    <p>
                      Laboratorio<br/> de innovación, creatividad y nuevas tecnologías
                    </p>
                    
                </div>

              </div>

            </div>


            <div className="column contact">
                <p className="titulo">
                CONTÁCTANOS
                </p>
                <p>
                Avenida El Dorado Carrera 45 # 26 - 33 <br/>Bogotá, Colombia Celular<br/>(+57) 300 568-7569<br/>vivelab_bog@unal.edu.co
                </p>
            </div>
          
              

            <div className="column sections">
                <p className="titulo">
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
            <div className="column follow">
                <p className="titulo">
                SÍGUENOS
                </p>
                <div className="icons">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faFacebookF} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faYoutube} />
                </div>
                
                
            </div>
            <div className="column shield">
               <img src={escudo} /> 
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
  font-family: 'Fira Sans', sans-serif;
  font-size: 0.9em;

  .contenido{
    width: 100%;
  }

  .contact, .sections, .follow{
    margin-top: 0vh;
  }

  position: relative;
  bottom: 0;
  width: 100%;

  .titulo{
    font-family: 'Raleway', sans-serif;
    color: #8F8EA6;
    font-weight: bold;
    letter-spacing: 0.03em;
    color: #74728D;
    margin-bottom: 1vw;
  }

  .logo{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    margin-left: 3vw;
    .columns{
      display: flex;
      .column{
        display: flex;
    justify-content: flex-start;
    align-items: center;
      }
    }
    p{
      margin-top: 0vh;
      text-align: left;
      padding-right: 2vw;
      color: #8F8EA6;
    }
  }

  .icons{
    display: flex;
  }

  .svg-inline--fa{
    background-color: white;
    color: #18144D;
    padding: 2.2%;
    border-radius: 50%;
    display: block;
    width: 2vw;
    height: 2vw;
    margin-right: 1vw
  }

  .contact, .sections, .follow{
    text-align: left;
  }

  .right{
    margin-left: 5vw;
  }

  .shield{
    display: flex;
    align-items: center;
    img{
      border-left: 1px solid white;
      padding-left: 3vw;
    }
   }

  @media (max-width: 1150px) {
  
      font-size: 0.9rem;
}

@media screen and (max-width: 415px) {
  
    font-size: 0.8rem;
    height: auto;

    .titulo{
      
      margin-bottom: 1vh;
    }
  
    .logo{
      margin-left: 0;
      p{
        padding-right: 0;
        margin-top: 2vh;
      }
    }
  
   
  
    .svg-inline--fa{
      width: 4vh;
      height: 4vh;
      margin-right: 2.5vh;
      padding: 2%;
    }
       
    .right{
      margin-left: 5vh;
    }
  
    .shield{
      img{
        padding-left: 0vh;
        margin-left: 0vh
        border-left: 0;
      }
     }
 
}

@media screen and (max-width: 376px) {
 
    font-size: 0.7rem;
 
}

@media screen and (max-width: 321px) {
 
    font-size: 0.6rem;
  
}
`;

export default Footer;
