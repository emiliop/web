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

import axios from 'axios';



require('dotenv').config()

class Together extends Component {

  constructor(props) {
    super(props);

    this.state = {
      background: 'white',
      addClass: false,
      formName: '', formMail: '', formPhone: '', formComment: '',
      emailValid: false,
      nameValid: false,
      phoneValid: false,
      commentValid: false,
      disableButton: true
    }

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
   let info = await axios.post('http://newadmin7.vivelabbogota.com/api/forms/add', 
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
  }

  render() {

    let modalClass = ["modal"];
    if(this.state.addClass) {
      modalClass.push(' is-active');
    }
    

    return (

      <StyledTogether>

          <div className="columns contact is-multiline">

            <div className="column is-full-mobile is-three-fifths">
            
                  <p className="title titulo">¿Quieres iniciar un proyecto con nosotros? ¡Conversemos!</p>
              
            </div>

            <div>

                <figure className="column is-hidden-mobile is-narrow image">
                            <img className="" src={gray2} alt="imagen de bogota"/>
                </figure>

            </div>

            <div className="column form is-half">

                

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

  @media screen and (max-width: 1023px){
    .contact{
      .title{
        font-size: 2.6em;
      }
      .data{
        margin-left: 0;
        .map{
          width: 90vw;
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
