import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      Copyright © Todos los derechos reservados
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
  height: 3.5vh;
  background-color: #0D0D0D;
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
