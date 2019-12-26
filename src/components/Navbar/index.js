import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import ButtonLink from './ButtonLink';
import logo from 'assets/logo_org.png';


const Navbar = (props) => {

  const { background } = props;

  return (
    <StyledNavbar background={background}>
      <div className="columns is-multiline">

        <div className="column is-one-fifth">
          <Link to="/new">
          <img className="is-hidden-mobile" src={logo} /> 
           {/* <h2 className="title is-hidden-mobile">LAB101</h2> */}
           </Link>
        </div>
                
        <div className="column is-three-fifths">
            {/* <ButtonLink to="/" isActive={checkActive}>Inicio</ButtonLink> */}
            <ButtonLink to="/work">Nuestro trabajo</ButtonLink>
            <ButtonLink to="/services">Servicios</ButtonLink>
            <ButtonLink to="/metodologies">Metodologías</ButtonLink>
            {/* <ButtonLink to="/activities">Actividades</ButtonLink> */}
            <ButtonLink to="/togheter">Trabajemos juntos</ButtonLink>
        </div>
         
      </div>
    </StyledNavbar>
  );
};

const checkActive = (match, location) => {
  if(!location) return false;
  const { pathname } = location;
  return pathname === "/";
}


const StyledNavbar = styled.div`

  background: ${props => props.background ? "#02CAF4" : "white"};
  
  z-index: 1000;
  height: 15vh;
  color: #18144D;

  .is-one-fifth{
    img{
      margin-left: 5vw;
      height: 100%;
      width: auto;
    }
  }

  .is-three-fifths{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: auto;
    padding-right: 7.5vw;
  }  

  a{
    z-index: 1000;
  }
  
`;

export default Navbar;
