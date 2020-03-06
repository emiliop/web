import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import ButtonLink from './ButtonLink';
import logo from 'assets/logo_org.png';
import menu from 'assets/menu.png';


class Navbar extends Component {

  state = {
    open: true
  }
  toggleImage = () => {
    this.setState(state => ({ open: !state.open }))
  }

  getImageName = () => this.state.open ? menu : menu

  render() {

    const imageName = this.getImageName();  
  
  return (

            <StyledNavbar id="nav" style={{background: this.props.background}}>
                <div className="columns is-multiline">

                  <div className="column is-one-fifth">
                    <Link to="/new">
                    <img className="" src={logo} /> 
                    </Link>
                  </div>
                          
                  <div className="column is-hidden-mobile is-three-fifths">
                      {/* <ButtonLink to="/" isActive={checkActive}>Inicio</ButtonLink> */}
                      <ButtonLink style={{background: this.props.background}} to="/work">Nuestro trabajo</ButtonLink>
                      <ButtonLink style={{background: this.props.background}} to="/services">Servicios</ButtonLink>
                      <ButtonLink style={{background: this.props.background}} to="/metodologies">Metodologías</ButtonLink>
                      {/* <ButtonLink to="/activities">Actividades</ButtonLink> */}
                      <ButtonLink style={{background: this.props.background}} to="/together">Trabajemos juntos</ButtonLink>
                  </div>

                  <div className="column is-half is-hidden-desktop">

                      <div className="columns menu">

                        <div className="column hotdog">
                            <img  onClick={this.toggleImage} src={imageName} /> 
                        </div>

                        {!this.state.open &&
                          <div className="column mobile is-four-fifths">
                          {/* <ButtonLink to="/" isActive={checkActive}>Inicio</ButtonLink> */}
                            <ButtonLink style={{background: this.props.background}} to="/work">Nuestro trabajo</ButtonLink>
                            <ButtonLink style={{background: this.props.background}} to="/services">Servicios</ButtonLink>
                            <ButtonLink style={{background: this.props.background}} to="/metodologies">Metodologías</ButtonLink>
                            {/* <ButtonLink to="/activities">Actividades</ButtonLink> */}
                            <ButtonLink style={{background: this.props.background}} to="/together">Trabajemos juntos</ButtonLink>
                          </div>
                        }
                        

                      </div>

                  </div>

                  
                  
                </div>
              </StyledNavbar>
       
    );
  }
}

const checkActive = (match, location) => {
  if(!location) return false;
  const { pathname } = location;
  return pathname === "/";
}


const StyledNavbar = styled.div`

  z-index: 1000;
  height: 15vh;
  color: #18144D;

  .columns{
    display: flex;
    height: 100%;
    width: 100%;
    .column{
      height: 100%;
      padding-bottom: 0;
    }
    .menu{
      flex-direction: column;
      .hotdog{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        margin-right: 5vw;
        margin-top: 6vh;
      }
      .mobile{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }

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

  @media screen and (max-width: 1023px){
    height: 13vh;
    .is-one-fifth{
      img{
        margin-left: 0;
    }
   
  }
`;

export default Navbar;
