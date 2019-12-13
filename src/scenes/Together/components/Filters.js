import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Select from 'components/Select';
import DatePicker from 'components/DatePicker';

class Filters extends Component {
  render() {
    const props = this.props;
    const { data, filters, onChange, minDate } = props;
    const { demographics, facts, aids } = data;
    const { demographic, fact, aid } = filters;

    return (
      <StyledFilters>

        <h4>Filtros:</h4>

        <Select title="Caraterística demográfica" name="demographic"
          options={demographics} {...props} selected={demographic} />
        <Select title="Hecho victimizante" name="fact"
          options={facts} {...props} selected={fact} />
        <Select title="Ayuda solicitada" name="aid"
          options={aids} {...props} selected={aid} />

        <DatePicker name="startDate" selected={filters['startDate']} onChange={onChange}
          minDate={minDate} maxDate={filters['endDate']? filters['endDate']:new Date()}
          required={true} />

        <DatePicker name="endDate" selected={filters['endDate']} onChange={onChange}
          minDate={filters['startDate']? filters['startDate']:minDate} maxDate={new Date()}
          required={true} />

      </StyledFilters>
    );
  }
};

const StyledFilters = styled.div`
  .field {
    margin-bottom: 10px;
  }
`;

export default Filters;
