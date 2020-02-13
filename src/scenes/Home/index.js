import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import Typical from 'react-typical';
import 'react-multi-carousel/lib/styles.css';

import Detail from '../Detail';

import map from 'assets/Map.png';

import green_squares from 'assets/green_squares.png';
import dots from 'assets/dots.png';

import slides from 'assets/slides.png';
import mapback from 'assets/mapback.png';

import gray from 'assets/gray.png';

import puede_ser from 'assets/puede_ser.png';
import blockch from 'assets/blockch.png';
import blockch2 from 'assets/blockch2.png';

import user from 'assets/user.png';
import technology from 'assets/technology.png';
import innovation from 'assets/innovation.png';

import alcaldia from 'assets/alcaldia.png';
import espectador from 'assets/espectador.png';
import mintic from 'assets/mintic.png';
import javeriana from 'assets/javeriana.png';
import dane from 'assets/dane.png';
import sanitas from 'assets/sanitas.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';

import Icon from 'components/Icon';
import 'fonts/icomoon.svg';


class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      background: 'white',
      color: ['#86F26B', '#FFF500', '#FFB800','#FF4668','#B04BFF','#4BA9FF'],
      services: [],
      addClass: false,
      formName: '', formMail: '', formPhone: '', formComment: '',
      emailValid: false,
      nameValid: false,
      phoneValid: false,
      commentValid: false,
      disableButton: true
    }
 
    this.responsive = {
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 3,
        partialVisibilityGutter: 40
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 2,
        partialVisibilityGutter: 30
      }
    };

    this.responsive2 = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        partialVisibilityGutter: 1 // this is needed to tell the amount of px that should be visible.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        partialVisibilityGutter: 1 // this is needed to tell the amount of px that should be visible.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 1 // this is needed to tell the amount of px that should be visible.
      }
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMailChange = this.handleMailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.resetform = this.resetform.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  handleNameChange(e){

    let nameValid;

    nameValid = e.target.value.match(/^([a-z ñáéíóú]{2,60})$/i);

    if(nameValid && e.target.value.length > 0){
      this.setState({
        nameValid: true
      })
    }
    else{
      this.setState({
        nameValid: false
      })
    }

    this.disableButton()

    this.setState({
      formName: e.target.value
    })

  }

  handleMailChange(e){
    let emailValid;

    emailValid = e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  
    if(emailValid && e.target.value.length > 0){
      this.setState({
        emailValid: true
      })
    }
    else{
      this.setState({
        emailValid: false
      })
    }

    this.disableButton()

    this.setState({
      formMail: e.target.value
    })

  }

  handlePhoneChange(e){

    let phoneValid;

    phoneValid = e.target.value.match(/^\d+$/);

    if(phoneValid && e.target.value.length > 0){
      this.setState({
        phoneValid: true
      })
    }
    else{
      this.setState({
        phoneValid: false
      })
    }

    this.disableButton()

    this.setState({
      formPhone: e.target.value
    })

  }

  handleCommentChange(e){
    this.setState({
      formComment: e.target.value
    })
  }

  disableButton(){

    if(!this.state.nameValid || !this.state.emailValid || !this.state.phoneValid){
      this.setState({ disableButton: true });
    }
    else{
                this.setState({ disableButton: false});
        }
  }


  async handleSubmit (e) {
   let info = await axios.post('http://newadmin5.vivelabbogota.com/api/forms/add', 
                  {
                    name:this.state.formName,
                    mail:this.state.formMail,
                    phone:this.state.formPhone,
                    comment:this.state.formComment
                  })
                  .then( response => { this.toggle();
                                        console.log(response.data);
                                        this.resetform();
                                     }).catch(err=> console.log(err));
  }

  resetform(){
    this.setState({ formName: '',
                    formMail: '',
                    formPhone: '',
                    formComment: '',
   });

  }

  toggle() {
    this.setState({addClass: !this.state.addClass});
  }

  componentDidMount(){
    this.props.updateNavColor(this.state.background);

    axios.get('http://newadmin5.vivelabbogota.com/api/services')
       .then(response => {
         this.setState({ services: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })

    if(localStorage.getItem("times") == null || localStorage.getItem("times") == "undefined"){
      localStorage.setItem("times", 0);
    }
    
    if(localStorage.getItem("times") >= 5){
      localStorage.setItem("times", 0);
    }

    else{
      localStorage.getItem("times")
      localStorage.setItem("times", parseInt(localStorage.getItem("times")) + 1);
    }

    console.log(this.state.color[localStorage.getItem("times")])
    console.log(this.state.addClass)
    
  }

  
  render() {

    const CustomLeftArrow = ({ onClick }) => (
      <i onClick={() => onClick()} className="custom-left-arrow" />
    );
    const CustomRightArrow = ({ onClick }) => {
      return <i className="custom-right-arrow" onClick={() => onClick()} />;
    };
      
    let modalClass = ["modal"];
    if(this.state.addClass) {
      modalClass.push(' is-active');
    }
   
    return (
      
            <StyledHome>

                  <div className="banner columns is-multiline">

                    <div className="column is-full-mobile is-two-thirds-desktop">

                        <div className=" columns left">

                            <div className="column is-full-mobile is-two-thirds lema"> 

                            <Typical
                                steps={['Innovación, diseño y tecnología para las personas', 500]}
                                loop={1}
                                wrapper="p"
                            />
                              
                            <p></p>
                              
                            </div>

                            <div className="column is-hidden-mobile is-one-fifth">
                              <figure className="image">
                                  <img className="squares" src={green_squares} alt=""/>
                              </figure>  
                            </div>
                          
                        </div> 

                    </div>

                    <div className="column is-full-mobile is-one-third-desktop text">
                      <p>Somos un laboratorio de la Universidad Nacional de Colombia que trabaja desde y para la innovación. Nuestra pasión es <b style={{borderBottomColor: this.state.color[localStorage.getItem("times")]}}>crear soluciones tecnológicas</b> que permitan transformar de manera positiva la realidad de las personas y las organizaciones.</p>
                    </div>

                  </div>

                  <Carousel className="columns" 
                            responsive={this.responsive} 
                            partialVisible={true} 
                            centerMode={false} 
                            arrows={true} 
                            customLeftArrow={<CustomLeftArrow />}
                            customRightArrow={<CustomRightArrow />} 
                            showDots={true}>
                            {
                                this.state.services.map( service => (<div className="column logo" key={service.id}>
                                                              <Link to={"/detail/"+service.id}>
                                                                  <figure className="image">
                                                                      <img className="" src={"http://newadmin5.vivelabbogota.com/images/" + service.image} />
                                                                  </figure>
                                                                  <p className="title">{service.title}</p>
                                                              </Link>  
                                                            </div>))
                            } 
                  </Carousel>
              
                  <Link to="/work"><button className="button ver-mas is-normal">Ver más proyectos</button></Link>
                            
                  <div className="columns sections is-multiline">

                        <div className="column is-full">

                            <p className="title titulo">Lineas de servicio del Laboratorio</p>

                        </div>
                      
                        <div className="column logo is-full-mobile is-half">
                        <Link to="/services">
                            <figure className="image">
                                <img className="" src={user} alt="imagen de grafica de barras"/>
                            </figure>
                            <p className="title"><span>1 –</span> Experiencia de usuario</p>
                            <p className="texto">Trabajamos para que la interacción de los clientes y/o usuarios con los productos o servicios diseñados sean eficaces, eficientes y satisfactorios.</p>
                        </Link>  
                        </div>
                      
                        
                        <div className="column logo is-full-mobile is-half">
                         <Link to="/services"> 
                            <figure className="image">
                                <img className="" src={technology} alt="imagen de bogota"/>
                            </figure>
                            <p className="title"><span>2 –</span> Tecnologías emergentes</p>
                            <p className="texto">Utilizamos herramientas y/o estrategias novedosas en la producción de software para potenciar los métodos de innovación digitales.</p>
                            </Link>
                        </div>

                        <div className="column logo is-full-mobile is-half">
                         <Link to="/services"> 
                            <figure className="image">
                                <img className="is-centered" src={innovation} alt="imagen de bogota"/>
                            </figure>
                            <p className="title"><span>3 –</span> Procesos de innovación</p>
                            <p className="texto">Orientamos las dinámicas de innovación para asegurar su materialización, sostenibilidad y formular sus alternativas a situaciones o problemas complejos.</p>
                            </Link>
                        </div>

                        <div className="column logo is-full-mobile is-half">
                         <Link to="/services"> 
                            <figure className="image">
                                <img className="is-centered" src={innovation} alt="imagen de bogota"/>
                            </figure>
                            <p className="title"><span>4 –</span> Formación a la medida</p>
                            <p className="texto">Desarrollamos procesos de capacitación y/o formación para construir competencias en el diseño y desarrollo de soluciones efectivas.</p>
                            </Link>
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

                       
                        <p className="subtitle">Nos interesa transformar la realidad social colectivamente. Por tal razón, trabajamos de manera colaborativa a través de “frameworks” como Design Thinking, Scrum y Lean UX, los cuales nos permiten ofrecer el mayor valor y satisfacción en las soluciones desarrolladas para nuestros aliados.</p> 
                        
                    </div>
                  </div> 

                  <div className="columns partners is-multiline">

                     <div className="column is-full">

                         <p className="title titulo">Quiénes confiaron en nosotros</p>

                     </div>

                     <Carousel  partialVisible={true} 
                                centerMode={false} 
                                arrows={true} 
                                customLeftArrow={<CustomLeftArrow />}
                                customRightArrow={<CustomRightArrow />} 
                                showDots={true}
                                responsive={this.responsive2}>

                     <div>

                        <div className="column is-full">

                          <div  className="columns clients">

                              <div className="column is-narrow">

                                  <figure className="image">
                                      <img className="" src={alcaldia} alt="imagen de bogota"/>
                                  </figure>

                              </div>

                              <div className="column is-narrow">

                                  <figure className="image">
                                      <img className="" src={espectador} alt="imagen de bogota"/>
                                  </figure>

                              </div>

                              <div className="column is-narrow">

                                  <figure className="image">
                                      <img className="" src={mintic} alt="imagen de bogota"/>
                                  </figure>

                              </div>

                            </div>

                        </div>

                        <div className="column is-full">

                          <div  className="columns clients">

                                <div className="column is-narrow">

                                  <figure className="image">
                                      <img className="" src={javeriana} alt="imagen de bogota"/>
                                  </figure>

                                </div>

                                <div className="column is-narrow">

                                  <figure className="image">
                                      <img className="" src={dane} alt="imagen de bogota"/>
                                  </figure>

                                </div>

                                <div className="column is-narrow">

                                  <figure className="image">
                                      <img className="" src={sanitas} alt="imagen de bogota"/>
                                  </figure>

                                </div>

                            </div>

                        </div>

                     </div>

                     <div>

                        <div className="column is-full">

                          <div  className="columns clients">

                              <div className="column is-narrow">

                                  <figure className="image">
                                      <img className="" src={alcaldia} alt="imagen de bogota"/>
                                  </figure>

                              </div>

                              <div className="column is-narrow">

                                  <figure className="image">
                                      <img className="" src={espectador} alt="imagen de bogota"/>
                                  </figure>

                              </div>

                              <div className="column is-narrow">

                                  <figure className="image">
                                      <img className="" src={mintic} alt="imagen de bogota"/>
                                  </figure>

                              </div>

                            </div>

                        </div>

                        <div className="column is-full">

                          <div  className="columns clients">

                                <div className="column is-narrow">

                                  <figure className="image">
                                      <img className="" src={javeriana} alt="imagen de bogota"/>
                                  </figure>

                                </div>

                                <div className="column is-narrow">

                                  <figure className="image">
                                      <img className="" src={dane} alt="imagen de bogota"/>
                                  </figure>

                                </div>

                                <div className="column is-narrow">

                                  <figure className="image">
                                      <img className="" src={sanitas} alt="imagen de bogota"/>
                                  </figure>

                                </div>

                            </div>

                        </div>

                     </div>

                     </Carousel>     

                  </div>

                  <div className="columns contact">

                    <div className="column form is-half">

                        <div>
                          <p className="title titulo">¿Quieres iniciar un proyecto con nosotros? ¡Conversemos!</p>
                        </div>

                        <div className="fields">

                            <div className="field">
                                <label className="label">Nombre completo</label>
                                <div className="control">
                                  <input className="input" value={this.state.formName} type="text" placeholder="Ej: Carlos Sanchez" onChange={this.handleNameChange}/>
                                </div>
                                {!this.state.nameValid && <p className="help is-danger">Formato incorrecto</p> }
                            </div>

                            <div className="field">
                              <label className="label">Correo</label>
                              <div className="control has-icons-left has-icons-right">
                                <input className="input is-danger" value={this.state.formMail} type="email" placeholder="Ej: ejemplo@unal.edu.co"  onChange={this.handleMailChange}/>
                                <span className="icon is-small is-left">
                                  <i className="fas fa-envelope"></i>
                                </span>
                                <span className="icon is-small is-right">
                                  <i className="fas fa-exclamation-triangle"></i>
                                </span>
                              </div>
                               {!this.state.emailValid && <p className="help is-danger">El correo es inválido</p> }
                            </div>

                            <div className="field">
                              <label className="label">Número de teléfono</label>
                              <div className="control has-icons-left has-icons-right">
                                <input className="input is-danger" value={this.state.formPhone} type="text" placeholder="Ej: 3308695879" onChange={this.handlePhoneChange}/>
                                <span className="icon is-small is-left">
                                  <i className="fas fa-user"></i>
                                </span>
                                <span className="icon is-small is-right">
                                  <i className="fas fa-check"></i>
                                </span>
                              </div>
                              {!this.state.phoneValid && <p className="help is-danger">Formato incorrecto</p> }
                            </div>

                            <div className="field">
                              <label className="label">Breve descripción de lo que te gustaría discutir con nosotros</label>
                              <div className="control">
                                <textarea className="textarea" value={this.state.formComment} placeholder="Escriba aquí" onChange={this.handleCommentChange}></textarea>
                              </div>
                            </div>

                            { this.state.disableButton && <button style={{backgroundColor: 'gray', cursor: 'not-allowed', pointerEvents: 'none' }} className="button is-link" >Enviar</button>}

                            { this.state.nameValid && this.state.emailValid && this.state.phoneValid && <button className="button is-link" onClick={this.handleSubmit}>Enviar</button>}


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

                        <div className="column dots is-hidden-mobile">
                              <img className="" src={dots} alt="imagen de bogota"/>
                        </div> 

                        </div>  

                        <div className="columns">
                       
                          <div className="column map is-full-mobile is-half">

                            <figure className="image">
                                <img className="" src={map} alt="imagen de bogota"/>
                            </figure>

                          </div>    

                        </div> 
                    
                  

                </div>

              </div> 

              <div className={modalClass.join(' ')} >
                  <div className="modal-background"></div>
                  <div className="modal-card">
                      <header className="modal-card-head">
                        <button className="delete" aria-label="close" onClick={this.toggle}></button>
                      </header>
                      <section className="modal-card-body">
                          <div>Datos enviados</div>
                      </section>
                    </div>
              </div>   
               
            </StyledHome>    
    );
  }
}

const StyledHome = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #18144D;

  .banner, .metodologias, .contact, .partners, .sections {
    margin-left: 5vw;
  }

  .banner{
    width: 90%;
    display: flex;
    margin-top: 5vh;
    height: 35vh;

    .is-two-thirds{
      padding-top: 0;
      padding-left: 0;
      .columns{
        padding-right: 0;
        margin: 0;
      }
    }

    .is-one-fifth{
      margin-left:auto;
      padding-top: 0;
      margin-top: 1vh;
    }

    .squares{
      height: auto;
      width: 40%;
      margin-left:auto;
    }

    .lema{
      font-family: 'Staatliches', cursive;
      color: #18144D;
      text-transform: uppercase;
      font-size: 4em;
      padding-left: 0;
      padding-right: 5%;
      line-height:  1.1em;
      max-width: 620px;
      padding-top: 0;

      
    }

    .text{
      font-family: 'Fira Sans', sans-serif;
      padding-top: 0;
      padding-left: 2%;
      padding-right: 1%;
      font-size: 1.25em;
      line-height: 1.7em;
      letter-spacing: 0.01em;
      font-size: 1.25em;
      b{
        border-bottom: 2px solid #86F26B;
        font-weight: normal;
      }
      
    }
  }  


  .react-multi-carousel-list{
    background-image: url(${slides});
    margin-right: 0;
    padding-left: 5vw;
    padding-right: 5vw;
    padding-bottom: 9vh;
    margin-left: 0px;
    /* padding-left: calc(5vw - 20px); */
    background-size: 100% 70%;
    background-repeat: no-repeat;
    background-position: left bottom;

    .custom-right-arrow{
      position: absolute !important;
      bottom: 5vh;
    right: 6vw;
    z-index: 1;
    border: 1px solid #18144D;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 6px;
    opacity: 0.8;
    cursor: pointer;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    }

    .custom-left-arrow{
      position: absolute !important;
      bottom: 5vh;
    right: 8vw;
    z-index: 1;
    border: 1px solid #18144D;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 6px;
    opacity: 0.8;
    cursor: pointer;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    }

    .react-multi-carousel-dot-list{
      margin-bottom: 5vh;
    }

    figure{
      height: auto;
      width: 100%;
      img{
        height: auto;
        width: 100%;
      }
    }
    .title{
      padding-right: 10vw;
    }
  }

  .ver-mas{
    width: 14vw;
    height: 5vh;
    margin-left: 5vw;
    margin-top: -5.5vw;
    letter-spacing: 0.02em;
    color: #18144D;
    padding-left: 1em;
    padding-right: 1em;
    font-size: 0.95em;
    background-color: transparent;
    border-color: #18144D;
    border-width: 1px;
    border-radius: 3px;
    font-family: 'Source Sans Pro', sans-serif;
      font-style: normal;
      font-weight: normal;
  }

  .sections{
    position: relative;
    height: 45%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 3vh;
    margin-right: 5vw;

   .logo{
    padding-top: 4vh
    padding-right: 6.5vw;
    padding-left: 6.5vw;
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
      font-size: 2.5em;
      font-style: normal;
      font-weight: normal;
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
  }

  .subtitle{
    padding: 1% 5%;
  }

  p.subtitle {
    font-size: 1.1em;
  }

  .logo{
    position: relative;
    height: 100%;
    padding-left: 0;
    padding-right: 2vw;
    a {
      align-content: center;
      display: flex;
      flex-direction: column;
      position: relative;
      height: 100%;
    }
    span{
      color: #FF4668;
    }
    p{
      padding-top: 2vh;
      color: #18144D;
      font-family: 'Raleway', sans-serif;
      font-weight: 800;
      font-size: 1.3em;
      line-height: 1.2em;
      letter-spacing: 0.01em;
    }
    .texto, .metodologias subtitle {
      font-family: 'Source Sans Pro', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 1em;
      line-height: 1.8em;
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
    font-size: 2.5em;
  }

  .metodologias {
    margin-right: 5vw;
   padding-top: 6vh;
    .title{
      font-size: 2.5em;
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
    line-height: 2em;
    letter-spacing: 0.01em;
    color: #18144D;
  }
  .is-one-third{
    margin-top: 0vh;
    padding-top: 0;
  }
}

.partners{
  padding-top: 10vh;
  margin-right: 5vw;
  .react-multi-carousel-list{
    background-image: none;
  }
  .react-multi-carousel-dot-list {
   
  }
  .partner {
      display: flex;
      justify-content: center;
    }
  .title{
    font-size: 2.5em;
    font-style: normal;
    font-weight: normal;
  }

  .clients{
    display: flex;
    justify-content: center;
  }
}


.contact{
  padding-top: 6vh;
  margin-bottom: 4vh;
  .form{
    
    padding-right: 15vw;
    .title{
      font-size: 2.5em;
      font-style: normal;
      font-weight: normal;
    }

    .fields{
      padding-top: 4vh;
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
    padding-top: 1.55vh;
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

@media screen and (max-width: 1023px){
  .banner{
    height: auto;
    .lema{
      font-size: 3em;
    }
    .text{
      font-size: 1em;
    }
  }

  .react-multi-carousel-dot-list{
    display:none;
  }

  .ver-mas{
    width: 40vw;
    margin-top: -18.5vw;
  }

  .contact{
    .data{
      .map {
        width: 90vw;
      }
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


  

 


export default Home;
