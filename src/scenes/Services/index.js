import React, { Component } from 'react';
import styled from 'styled-components';
import background from '../../assets/background.png';

import axios from 'axios';

import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from '@nivo/bar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'

require('dotenv').config()

 
class Services extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isToggleOn: true,

          isDataLoaded: false,

           dataSources:[],
           dataEntities:[],
           dataPasSources:[],
           dataPas:[],
           dataSegmentationEntities:[],

          source:{ 
                GESE: true,
                SIVIC: true,
                'Retornos y reubicaciones': true,
                'Mesa Distrital de Participación': true
          },

          entity:{
            'Secretaría Distrital del Hábitat': true,
            'Caja de Vivienda Popular': true,
            'Secretaría Distrital de la Mujer': true, 
            'Secretaría Distrital de Desarrollo Económico': true,
            'IPES': true,
            'Secretaría de Educación Distrital': true,
            'Secretaría Distrital de Integración Social': true,
            'Secretaría Distrital de Salud': true,
            'PUAS': true
          },

          indicators:{},

          windowSize: window.innerWidth

        }

        this.indicators = [];

        this.allSources = [];
        this.allEntities = [];
        
        this.handleClick = this.handleClick.bind(this);
        this.handleSourceInputChange = this.handleSourceInputChange.bind(this);
        this.handleEntityInputChange = this.handleEntityInputChange.bind(this);
        this.handleDataSource = this.handleDataSource.bind(this);

      }   
     
      handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn,
          isDataLoaded: false
        }));

        this.handleDataSource(); 
     
      }

     
      handleSourceInputChange(event){
        const target = event.target;

        const value = target.type === 'checkbox' ? target.checked : target.value;

        const name = target.name;

        this.setState(prevState => ({
            source: {                   
                ...prevState.source,    
                [name]: value       
            }  

        }))
         
      }

      handleEntityInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState(prevState => ({
            
            entity: {                   
                ...prevState.entity,    
                [name]: value       
            }

        }))
         
      }



     handleDataSource() {
        
        let indexSourceArray = [];
        let indexEntityArray = [];

        let sourcesid=[];
        let entitiesid=[];

        let sources = Object.keys(this.state.source).filter(k => this.state.source[k]);

        let entities = Object.keys(this.state.entity).filter(k => this.state.entity[k]);
        
                        
            this.allSources.forEach((itemSource, sourceIndex) => {
               
                sources.forEach((itemSources, sourcesIndex) => {
                 
                    if( itemSources === itemSource.value ) {
                       
                        indexSourceArray.push(itemSource.id);
                    }            
                })          
                                        
            })

            sourcesid = indexSourceArray.join(',');
    
            this.allEntities.forEach((itemEntity, entityIndex) => {
               
                entities.forEach((itemEntities, entitiesIndex) => {

                    if( itemEntities === itemEntity.value ) {
                       
                        indexEntityArray.push(itemEntity.id);
                       
                    }            
                })          
                                        
            })

            entitiesid = indexEntityArray.join(',');

             this.getUsers (entitiesid, sourcesid)
      
     }


     async getUsers (entitiesid, sourcesid) {
    
        const allData = await axios.get(`${process.env.REACT_APP_API_URL}`+`/api/fusion?entities=[`+`${entitiesid}`+`]&sources=[`+`${sourcesid}`+`]`)
        
        let sourcesWithLabel = allData.data.data.sources
        let entitiesWithLabel = allData.data.data.entities
        let pasSourcesWithLabel = allData.data.data["pas-sources"]
        let pasWithLabel = allData.data.data.pas

        sourcesWithLabel.forEach((itemEntities, entitiesIndex) => {
            itemEntities.id =itemEntities.id.toUpperCase();           
    })

         entitiesWithLabel.forEach((itemEntities, entitiesIndex) => {
            itemEntities.id = itemEntities.id.toUpperCase();        
         })

         pasSourcesWithLabel.forEach((itemEntities, entitiesIndex) => {
            itemEntities.id =itemEntities.id.toUpperCase();          
    })

        pasWithLabel.forEach((itemEntities, entitiesIndex) => {
                itemEntities.id = itemEntities.label          
        })

       
        this.setState({
             isDataLoaded: true,
             indicators: allData.data.indicators,
             dataSources: sourcesWithLabel,
             dataEntities:  entitiesWithLabel,
             dataPas: pasWithLabel,
             dataPasSources: pasSourcesWithLabel,
             dataSegmentationEntities: allData.data.data["segmentation-by-entity"]
           })
  
    }

     
    handleResize = e => {
    const windowSize = window.innerWidth;
    this.setState(prevState => {
        return {
              windowSize
            };
        });
        console.log(windowSize)
    };


    componentWillUnmount() {
         window.removeEventListener("resize", this.handleResize);
    }
  
  
  componentDidMount(){

    console.log(process.env.REACT_APP_API_URL)

    window.addEventListener("resize", this.handleResize);

    axios.get(`${process.env.REACT_APP_API_URL}`+`/api/sources`)
      .then(res => {
        this.allSources=res.data;
  })

      axios.get(`${process.env.REACT_APP_API_URL}`+`/api/entities`)
      .then(res => {
        this.allEntities=res.data;
  }) 

    axios.get(`${process.env.REACT_APP_API_URL}`+`/api/fusion`)
      .then(res => {
        this.setState({ indicators: res.data.indicators});
  

        this.handleDataSource(); 

        this.handleClick();

     })

     console.log(this.state.windowSize)
      
  } 

  render() {

    return (

              <StyledServices>


                <div className="columns content box is-multiline">

                    <div className="column is-full indicators">
                        
                                <div className="columns cards">
                                                       
                                    <div className="column is-one-third">
                                        
                                            <div className="card-content global">
                                                <div className="content">

                                                <p>Indicador del global de registros:&nbsp;&nbsp;</p>                                                   
                                                    { !this.state.isDataLoaded && <a className="button is-loading">Loading</a> }
                                                    { this.state.isDataLoaded && <p> {this.state.indicators["global"]}</p>}
            
                                                </div>
                                            </div>
                                        
                                    </div>

                                    <div className="column is-one-third">
                                        
                                            <div className="card-content pas">
                                                <div className="content">
                                                <p>Indicador de registros en PAS:&nbsp;&nbsp;</p>                                                   
                                                    { !this.state.isDataLoaded && <a className="button is-loading">Loading</a> }
                                                    { this.state.isDataLoaded && <p> {this.state.indicators["pas"]}</p>}     
                                                </div>
                                            </div>
                                        
                                    </div>

                                    <div className="column is-one-third">
                                        
                                            <div className="card-content contrareferences">
                                                <div className="content">
                                                <p>Indicador de registros en contrareferencias:&nbsp;&nbsp;</p>                                                   
                                                    { !this.state.isDataLoaded && <a className="button is-loading">Loading</a> }
                                                    { this.state.isDataLoaded && <p> {this.state.indicators["counter-references"]}</p>}     
                                                </div>
                                            </div>
                                        
                                    </div>


                            </div>

                    </div> 

                    <div className="column filters is-one-third">

                        <div className="columns filters-content is-multiline">
                    
                            <div className="column services is-full">
                                <h5 className="titulo">Entidades</h5>

                                <div className="entity">

                                    <label className="checkbox"><input type="checkbox" name="Secretaría Distrital del Hábitat" checked={this.state.entity["Secretaría Distrital del Hábitat"]} onChange={this.handleEntityInputChange} />Secretaría Distrital del Hábitat</label>
                                    <label className="checkbox"><input type="checkbox" name="Caja de Vivienda Popular" checked={this.state.entity["Caja de Vivienda Popular"]} onChange={this.handleEntityInputChange} />Caja de Vivienda Popular - Secretaría Distrital del Hábitat</label>
                                    <label className="checkbox"><input type="checkbox" name="Secretaría Distrital de la Mujer" checked={this.state.entity["Secretaría Distrital de la Mujer"]} onChange={this.handleEntityInputChange} />Secretaría Distrital de la Mujer</label>
                                    <label className="checkbox"><input type="checkbox" name="Secretaría Distrital de Desarrollo Económico" checked={this.state.entity["Secretaría Distrital de Desarrollo Económico"]} onChange={this.handleEntityInputChange} />Secretaría Distrital de Desarrollo Económico</label>
                                    <label className="checkbox"><input type="checkbox" name="IPES" checked={this.state.entity["IPES"]} onChange={this.handleEntityInputChange} />Instituto para la Economía Social - IPES</label>
                                    <label className="checkbox"><input type="checkbox" name="Secretaría de Educación Distrital" checked={this.state.entity["Secretaría de Educación Distrital"]} onChange={this.handleEntityInputChange} />Secretaría de Educación Distrital</label>
                                    <label className="checkbox"><input type="checkbox" name="Secretaría Distrital de Integración Social" checked={this.state.entity["Secretaría Distrital de Integración Social"]} onChange={this.handleEntityInputChange} />Secretaría Distrital de Integración Social</label>
                                    <label className="checkbox"><input type="checkbox" name="Secretaría Distrital de Salud" checked={this.state.entity["Secretaría Distrital de Salud"]} onChange={this.handleEntityInputChange} />Secretaría Distrital de Salud</label>
                                    <label className="checkbox"><input type="checkbox" name="PUAS" checked={this.state.entity["PUAS"]} onChange={this.handleEntityInputChange} />PUAS - SDIS</label>
                                    
                                </div>

                            </div>    

                            <div className="column">
                                
                                <div className="columns is-multiline">

                                <div className="column sources is-half">      

                                    <h5 className="titulo">Fuentes</h5>

                                    <div className="source">
                                        <label className="checkbox"><input type="checkbox" name="GESE" checked={this.state.source.GESE} onChange={this.handleSourceInputChange} />GESE</label>
                                        <label className="checkbox"><input type="checkbox" name="SIVIC" checked={this.state.source.SIVIC} onChange={this.handleSourceInputChange}/>SIVIC</label>
                                        <label className="checkbox"><input type="checkbox" name="Retornos y reubicaciones" checked={this.state.source["Retornos y reubicaciones"]} onChange={this.handleSourceInputChange}/>Retornos y reubicaciones</label>
                                        <label className="checkbox"><input type="checkbox" name="Mesa Distrital de Participación" checked={this.state.source["Mesa Distrital de Participación"]} onChange={this.handleSourceInputChange}/>Mesa Distrital de Participación</label>
                                        
                                    </div>                       

                                    </div>

                                    <div className="column visualize is-full is-half-desktop">

                                    <a className="button is-primary" onClick={this.handleClick}>
                                        <span className="icon">
                                        <FontAwesomeIcon icon={faChartPie} />
                                        </span>
                                        <span>Visualizar</span>
                                    </a>

                                    </div>

                                </div>

                            </div>
                            
                            

                        </div>

                        
                    
                    </div>    
                    
                    <div className="column graphics is-two-thirds">

                               
                       <div className="columns statistic-images">

                                                     
                           <div className="column chart is-half">

                               <p className="subtitle">Segmentación por fuente</p>
                               
                               <figure className="image is-pulled-left is-marginless">
                                   { !this.state.isDataLoaded &&
                                    <progress className="progress is-small is-primary" max="100">15%</progress>
                                   }
                                  
                                   { this.state.isDataLoaded && <ResponsivePie 
                                                       data={this.state.dataSources}
                                                       margin={{ top: 0, right: 0, bottom: 0, left: 140 }}
                                                       innerRadius={0.5}
                                                       padAngle={0.7}
                                                       cornerRadius={3}
                                                       colors={{ scheme: 'nivo' }}
                                                       borderWidth={1}
                                                       borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                                                       radialLabelsSkipAngle={10}
                                                       radialLabelsTextXOffset={6}
                                                       radialLabelsTextColor="#333333"
                                                       radialLabelsLinkOffset={0}
                                                       radialLabelsLinkDiagonalLength={16}
                                                       radialLabelsLinkHorizontalLength={24}
                                                       radialLabelsLinkStrokeWidth={1}
                                                       radialLabelsLinkColor={{ from: 'color' }}
                                                       slicesLabelsSkipAngle={10}
                                                       enableRadialLabels={false}
                                                       slicesLabelsTextColor="#333333"
                                                       animate={true}
                                                       motionStiffness={90}
                                                       motionDamping={15}
                                                       
                                                      legends={  [ {
                                                               anchor: 'top-left',
                                                               translateX: -140,
                                                               translateY: 0,
                                                               itemWidth: 10,
                                                               direction: 'column',
                                                               itemHeight: 10,
                                                               itemTextColor: '#999',
                                                               symbolSize: 10,
                                                               itemsSpacing: 4,
                                                               symbolShape: 'diamond',
                                                               effects: [
                                                                   {
                                                                       on: 'hover',
                                                                       style: {
                                                                           itemTextColor: '#000'
                                                                       }
                                                                   }
                                                               ]
                                                           }]}
                                                       
                                       />
                                   }

                               </figure>
                           </div>

                           <div className="column chart is-half">

                               <p className="subtitle">Segmentación por entidad</p>
                               
                               <figure className="image is-pulled-left is-marginless">

                                   { !this.state.isDataLoaded &&
                                    <progress className="progress is-small is-primary" max="100">15%</progress>
                                   }

                                   { this.state.isDataLoaded && <ResponsivePie
                                                       data={this.state.dataEntities}
                                                       margin={{ top: 0, right: 0, bottom: 0, left: 140 }}
                                                       innerRadius={0.5}
                                                       padAngle={0.7}
                                                       cornerRadius={3}
                                                       colors={{ scheme: 'nivo' }}
                                                       borderWidth={1}
                                                       borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                                                       radialLabelsSkipAngle={10}
                                                       radialLabelsTextXOffset={6}
                                                       radialLabelsTextColor="#333333"
                                                       radialLabelsLinkOffset={0}
                                                       radialLabelsLinkDiagonalLength={16}
                                                       radialLabelsLinkHorizontalLength={24}
                                                       radialLabelsLinkStrokeWidth={1}
                                                       radialLabelsLinkColor={{ from: 'color' }}
                                                       slicesLabelsSkipAngle={10}
                                                       enableRadialLabels={false}
                                                       slicesLabelsTextColor="#333333"
                                                       animate={true}
                                                       motionStiffness={90}
                                                       motionDamping={15}
                                                       
                                                       legends={ this.state.windowSize < 350 ? [
  {
                                                               anchor: 'top-left',
                                                               translateX: -140,
                                                               itemWidth: 10,
                                                               translateY: 0,
                                                               direction: 'column',
                                                               itemHeight: 7,
                                                               itemTextColor: '#999',
                                                               symbolSize: 7,
                                                               itemsSpacing: 3,
                                                               symbolShape: 'diamond',
                                                               effects: [
                                                                   {
                                                                       on: 'hover',
                                                                       style: {
                                                                           itemTextColor: '#000'
                                                                       }
                                                                   }
                                                               ]
                                                           }]:
                                                           [
  {
                                                               anchor: 'top-left',
                                                               translateX: -140,
                                                               itemWidth: 10,
                                                               translateY: 0,
                                                               direction: 'column',
                                                               itemHeight: 8,
                                                               itemTextColor: '#999',
                                                               symbolSize: 8,
                                                               itemsSpacing: 3,
                                                               symbolShape: 'diamond',
                                                               effects: [
                                                                   {
                                                                       on: 'hover',
                                                                       style: {
                                                                           itemTextColor: '#000'
                                                                       }
                                                                   }
                                                               ]
                                                           }]}
                                       />
                                   }

                               </figure>
                                  
                           </div>

                       </div>

                       <div className="columns statistic-images">

                                                     
                           <div className="column chart is-half">

                               <p className="subtitle">Encontrados en contrareferencias</p>
                               
                               <figure className="image is-pulled-left is-marginless">

                                   
                               { !this.state.isDataLoaded &&
                                    <progress className="progress is-small is-primary" max="100">15%</progress>
                                   }

                                                        

                                   { this.state.isDataLoaded && <ResponsivePie
                                                       data={this.state.dataPas}
                                                       margin={{ top: 0, right: 0, bottom: 0, left: 140 }}
                                                       innerRadius={0}
                                                       padAngle={0.7}
                                                       cornerRadius={3}
                                                       colors={{ scheme: 'nivo' }}
                                                       borderWidth={1}
                                                       borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                                                       radialLabelsSkipAngle={10}
                                                       radialLabelsTextXOffset={6}
                                                       radialLabelsTextColor="#333333"
                                                       radialLabelsLinkOffset={0}
                                                       radialLabelsLinkDiagonalLength={16}
                                                       radialLabelsLinkHorizontalLength={24}
                                                       radialLabelsLinkStrokeWidth={1}
                                                       radialLabelsLinkColor={{ from: 'color' }}
                                                       slicesLabelsSkipAngle={10}
                                                       enableRadialLabels={false}
                                                       slicesLabelsTextColor="#333333"
                                                       animate={true}
                                                       motionStiffness={90}
                                                       motionDamping={15}
                                                       
                                                       legends={ [ {
                                                               anchor: 'top-left',
                                                               translateX: -140,
                                                               translateY: 0,
                                                               itemWidth: 10,
                                                               direction: 'column',
                                                               itemHeight: 10,
                                                               itemTextColor: '#999',
                                                               symbolSize: 10,
                                                               itemsSpacing: 4,
                                                               symbolShape: 'diamond',
                                                               effects: [
                                                                   {
                                                                       on: 'hover',
                                                                       style: {
                                                                           itemTextColor: '#000'
                                                                       }
                                                                   }
                                                               ]
                                                           }]}
                                       />
                                    } 
                               </figure>
                           </div>

                           <div className="column chart is-half">

                               <p className="subtitle">Incluidos en el PAS</p>
                               
                               <figure className="image is-pulled-left is-marginless">

                               { !this.state.isDataLoaded &&
                                    <progress className="progress is-small is-primary" max="100">15%</progress>
                                   }
                                   
                                   { this.state.isDataLoaded &&  <ResponsivePie
                                                       data={this.state.dataPasSources}
                                                       margin={{ top: 0, right: 0, bottom: 0, left: 140 }}
                                                       innerRadius={0}
                                                       padAngle={0.7}
                                                       cornerRadius={3}
                                                       colors={{ scheme: 'nivo' }}
                                                       borderWidth={1}
                                                       borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                                                       radialLabelsSkipAngle={10}
                                                       radialLabelsTextXOffset={6}
                                                       radialLabelsTextColor="#333333"
                                                       radialLabelsLinkOffset={0}
                                                       radialLabelsLinkDiagonalLength={16}
                                                       radialLabelsLinkHorizontalLength={24}
                                                       radialLabelsLinkStrokeWidth={1}
                                                       radialLabelsLinkColor={{ from: 'color' }}
                                                       slicesLabelsSkipAngle={10}
                                                       enableRadialLabels={false}
                                                       slicesLabelsTextColor="#333333"
                                                       animate={true}
                                                       motionStiffness={90}
                                                       motionDamping={15}

                                                       

                                                       legends={ [ {
                                                               anchor: 'top-left',
                                                               translateX: -140,
                                                               translateY: 0,
                                                               itemWidth: 10,
                                                               direction: 'column',
                                                               itemHeight: 10,
                                                               itemTextColor: '#999',
                                                               symbolSize: 10,
                                                               itemsSpacing: 4,
                                                               symbolShape: 'diamond',
                                                               effects: [
                                                                   {
                                                                       on: 'hover',
                                                                       style: {
                                                                           itemTextColor: '#000'
                                                                       }
                                                                   }
                                                               ]
                                                           }]}
                                       />
                                                        }
                               </figure>
                           </div>

                       </div>

                       
                
                    </div>

                    <div className="column statistic-bar">

                                                     
<div className="column chart is-full">

    <p className="subtitle">Distribución por entidad</p>

    { !this.state.isDataLoaded &&
                                    <progress className="progress is-small is-primary" max="100">15%</progress>
                                   }
    
    <figure className="image is-pulled-left is-marginless">
    { this.state.isDataLoaded && <ResponsiveBar
                     data={this.state.dataSegmentationEntities}
                     keys={[ 'SIVIC','Retornos y reubicaciones','GESE','Mesa Distrital de Participación','pas','total' ]}
                     indexBy="entity"
                     margin={  this.state.windowSize < 1000 ? { top: 0, right: 0, bottom: 20, left: 60} : { top: 0, right: 180, bottom: 20, left: 60}}
                     padding={0.1}
                     groupMode="grouped"
                     colors={{ scheme: 'nivo' }}
                     
                     borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                     axisTop={null}
                     axisRight={null}
                     axisBottom={{
                         tickSize: 4,
                         tickPadding: 4,
                         tickRotation: 0,
                         legend: '',
                         legendPosition: 'middle',
                         legendOffset: 16
                     }}
                     axisLeft={{
                         tickSize: 5,
                         tickPadding: 5,
                         tickRotation: 0,
                         legend: 'Registros',
                         legendPosition: 'middle',
                         legendOffset: -50
                     }}
                     labelSkipWidth={12}
                     labelSkipHeight={12}
                     labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                     legends={ this.state.windowSize < 1000 ? [
                         {
                             dataFrom: 'keys',
                             anchor: 'bottom-right',
                             direction: 'row',
                             justify: false,
                             translateX: 100,
                             translateY: 0,
                             itemsSpacing: 4,
                             itemWidth: 0,
                             itemHeight: 0,
                             itemDirection: 'left-to-right',
                             itemOpacity: 0,
                             symbolSize: 0,
                             effects: [
                                 {
                                     on: 'hover',
                                     style: {
                                         itemOpacity: 1
                                     }
                                 }
                             ]
                         }
                     ] : [
                         {
                             dataFrom: 'keys',
                             anchor: 'top-right',
                             direction: 'column',
                             justify: false,
                             translateX: 120,
                             translateY: 0,
                             itemsSpacing: 4,
                             itemWidth: 100,
                             itemHeight: 8,
                             itemDirection: 'left-to-right',
                             itemOpacity: 0.85,
                             symbolSize: 8,
                             effects: [
                                 {
                                     on: 'hover',
                                     style: {
                                         itemOpacity: 1
                                     }
                                 }
                             ]
                         }
                     ]}
                     animate={true}
                     motionStiffness={90}
                     motionDamping={15}
                 />
    }
    </figure>
</div>

</div>  
                
              </div>

            </StyledServices>  
    );
  }
}

const StyledServices = styled.div`
  height: 91.5vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-image: url(${background});

  .content{
    align-self: center;
    width: 95%;
    height: 95%;
    margin-right: 0 !important;
}

.indicators{
    padding-top: 0;
    padding-bottom: 0;
}

filters-content{
    height: 70%;
    .sources {
        padding-top: 2em;
        padding-left: 1em;
    }
}

.filters {
    padding-top: 1em;
    padding-bottom: 0;
}

.graphics {
    padding-top: 1em;
    padding-bottom: 0;
}

.cards{
    height: 34%;
    .column.is-one-third{
        padding: 0;
    }
}

.card-content {
    padding: 0rem;
    p {
        display: inline-block;
        margin-bottom: 0;
    }
    a.button {
        background-color: transparent;
        border-color: transparent;
    }
    .content{
    justify-content: center;
    align-content: center;
    display: flex;
    position: relative;
    }
}
    

.services, .sources {
    padding-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.sources{
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
}

.column.services.is-flex {
    flex-direction: row;
}

label.checkbox, .card{
    font-size:0.85em;
  }

 label.checkbox{
    margin-right: 2vw;
    align-items: center;
    display: flex;
 } 


.control{
    padding-top: 1.5vh;
    font-size: 0.9rem;

    input{
        margin-right: 1vh;
    }
}

.entity, .source{
    display: flex;
    flex-direction: column;
}


.visualize{
    display: flex;
    position: relative;
    justify-content: center;
    height: 5%;
    padding: 0;
    align-self: center;
    .button {
        font-size: 0.85rem;
    }
}

.card-content.global {
    background-color: silver;
}

.card-content.pas {
    background-color: antiquewhite;
}

.card-content.contrareferences {
    background-color: darkseagreen;
}

label.radio {
    padding-bottom: 1.5vh;
    margin-left: 0;
}

.titulo{
      color: #0A4B73;
      
  }

h5.subtitle.titulo {
    margin-bottom: 0.5rem;
}

.titles{
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.subtitle{
    font-size: 1em;
}
.column.chart.is-full {
    margin-top: -1.5em;
    height: 20vh;
}

.column.chart.is-half {
    height: 20vh;
}


.statistic-images {
    position: relative;
    .column.chart {
        padding-top: 0;
        padding-bottom: 0;
    }
}

.statistic-bar{
    height: 35%;
    padding: 0;
    position: relative;
    margin-top: 0vh !important;
    figure.image{
        height: 32vh;
        width: 135vw;
    }
    .column.chart.is-full {
        overflow: scroll;
        height: 36vh;
        width: 92vw;
        padding: 0;
    }
    
}

figure{
    display: flex;
    align-content: center;
    justify-content: center;
}

progress{
    align-self: center;
    width: 35%;
}



img.graph{
    height: 100%;
    width: auto;
}


.graphics{

    .columns {
        margin-top:0;
        margin-bottom: 0;
    }

    .column.titles {
        padding: 0;
        height: 4vh;
    }

    .column.bars {
        padding-bottom: 0;
        padding-top: 0;
    }
    figure.image{
        height: 16vh;
        width: 100%;
    }
}


column.bars {
    padding-bottom: 0;
    padding-top: 0;
}

@media screen and (max-width: 1600px) and (min-width: 1440px){
    .statistic-bar figure.image {
        height: 34vh;
    }
  }


@media screen and (max-width: 1439px) and (min-width: 1211px){
    label.checkbox, .card, .sources, .control, .graphics, p.title, .subtitle{
      font-size:0.8em;
    }
    .statistic-bar figure.image {
        height: 36vh;
        width: 160vw;
    }
    .card-content.contrareferences {
        font-size: 0.95em;
    }
  }

@media screen and (max-width: 1210px) and (min-width: 1130px){
    label.checkbox, .card, .sources, .control, .graphics, p.title, .subtitle{
      font-size:0.75em;
    }
    .statistic-bar figure.image {
        height: 30vh;
    }
    .column.is-one-third {
        font-size: 0.8em;
    }
  }

  @media screen and (max-width: 1129px) and (min-width: 850px), (max-height: 560px){
    label.checkbox, .card, .sources, .control, .graphics{
      font-size:0.7em;
    }
    .subtitle{
        font-size:0.95em;
    }
    p.title{
        font-size:1.05em;
    }
    .statistic-bar{
        
        figure.image{
            height: 29vh;
            width: 200vw;
        }
    }
    .column.is-one-third {
        font-size: 0.75em;
    }
    
  }

  @media screen and (max-width: 849px) and (min-width: 790px){
    .column.is-full.indicators {
        font-size: 0.53em;
    }

    label.checkbox, .card, .sources, .control, .graphics{
      font-size:0.65em;
    }
     .subtitle{
        font-size:0.9em;
    }
    p.title{
        font-size:1em;
    }

    h5.subtitle.titulo {
        margin-bottom: 0.5rem;
    }

    a.button.is-primary {
            font-size: 0.55rem;
    }
    .statistic-bar{
        margin-top: 6vh !important;
        .column.chart.is-full {
            height: 32vh;
        }
        figure.image{
            
            width: 215vw;
        }
    }
  }

  @media screen and (max-width: 794px) {
    
    height: auto !important; 
       
    label.checkbox, .card, .sources, .control, .graphics {
        font-size: 1em;
    }

    .services h5.titulo {
        font-size: 0.73em;
    }
     .subtitle{
        font-size:0.8em;
    }
    p.title{
        font-size:0.9em;
    }

    .content{
        margin-top: 3vh;
        margin-bottom: 6vh;
    }

    .source{
        flex-direction: row;
    }

    .card-content {
        padding: 0.65rem;
        div{
            margin-top: 0vh;
            margin-bottom: 0vh;
        }
    }

    .statistic-bar{
        .column.chart.is-full {
            width: 87vw;
        }
        figure.image{
            height: 34vh;
            width: 555vw;
        }
    }

    .chart {
        height: 30vh;
    }

} 

@media screen and (max-width: 500px) {
    label.checkbox, .card, .sources, .control, .graphics {
        font-size: 0.8em;
    }
    .statistic-bar figure.image {
        height: 32vh;
    }
}

@media screen and (max-width: 400px) {
    .statistic-bar figure.image {
      height: 31vh;
    }
}
@media screen and (max-width: 330px) {
    .statistic-bar figure.image {
     height: 29vh;
}
}



`;

export default Services;
