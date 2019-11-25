import React, { Component } from 'react';
import styled from 'styled-components';
import c3 from 'c3';

class Graph extends Component {
  state = {
    chart: null
  }

  componentDidMount() {
    const { initialData, filters, data } = this.props;
    const newData = this.formatData(data);

    this.setState({
      chart: c3.generate({
        bindto: '#chart',
        size: {
          height: 650,
        },
        data: {
          x: 'x',
          columns: newData,
          type: 'bar'
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        axis: {
          x: {
            type: 'category'
          },
          rotated: true
        },
      })
    })
  }

  componentDidUpdate() {
    this._updateChart();
  }

  formatData(data) {
    const { filters } = this.props;
    const labels = Object.keys(data);
    let categories = [
      ['Hecho victimizante'],
      ['Ayuda solicitada'],
    ]

    labels.forEach(l => {
      categories[0].push(data[l].factCounter);
      categories[1].push(data[l].aidCounter);
    });

    return [['x', ...labels], ...categories];
  }

  _updateChart() {
    this.state.chart.load({
      columns: this.formatData(this.props.data)
    });
  }

  render() {
    return (
      <StyledGraph>
        <div id="chart"></div>
      </StyledGraph>
    );
  }
}

const StyledGraph = styled.div`
  /* .c3-legend-item {
    margin
  } */
`;

export default Graph;
