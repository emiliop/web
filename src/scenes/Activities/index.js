import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Filters from './components/Filters';
import Graph from './components/Graph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

import background from '../../assets/background.png';
import demographics from './components/demographics';
const minDate = new Date("09/13/2010");

require('dotenv').config()

class Activities extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      initialData: {},
      filters: {
        startDate: minDate,
        endDate: new Date()
      }
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {

    console.log(process.env.REACT_APP_API_URL)
    axios({
      method: 'get',
      url:`${process.env.REACT_APP_API_URL}`+`/api/getInitialData`,
      responseType: 'json'
    })
    .then(response => this.setState((prevState) => {
      return {
        initialData: { ...response.data, demographics },
        loading: false,
        filters: {
          ...prevState.filters,
          demographic: Object.keys(response.data.demographicList)[0],
          fact: Object.keys(response.data.facts)[4],
          aid: Object.keys(response.data.aids)[0],
        }
      }
    }))
    .then(() => this.handleClick());
  }

  handleFilterChange({ target }) {
    const { name, value } = target;
    const { filters } = this.state;
    
    this.setState(prevState => {
      return { ...prevState, filters: { ...filters, [name]: value } }
    });
  }

  handleClick(e) {
    if(e) e.preventDefault();
    const { filters } = this.state;
    this.setState({ loadingChart: true });

    axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}`+`/api/getAHICounters`,
      data: filters
    })
    .then(({ data }) => this.setState({ data, loadingChart: false }));
  }

  render() {
    const { filters, data, initialData, loading, loadingChart } = this.state;
    const { facts, aids, demographics } = initialData;

    return (
      <StyledActivities>
        <div className="content box">
          {loading ? "Cargando" :
          <form id="filters" onSubmit={this.handleClick}>
            <Filters onChange={this.handleFilterChange} data={initialData}
              {...{ filters, minDate }} />
            <center>
              <button className={`button is-primary is-medium is-centered ${loadingChart? 'is-loading':''}`}
                type="submit" form="filters">
                <FontAwesomeIcon icon={faChartPie} />
                Visualizar
              </button>
            </center>
          </form>}

          {
            data && initialData &&
            <center>
              <Graph id="graph" {...{ initialData, filters, data, loading: loadingChart }} />
            </center>
          }
        </div>
      </StyledActivities>
    );
  }
}

const StyledActivities = styled.div`
  background-image: url(${background});
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

export default Activities;
