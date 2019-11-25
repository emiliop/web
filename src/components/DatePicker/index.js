import React from 'react';
import styled from 'styled-components';
import ReactDatePicker from "react-datepicker";

const DatePicker = (props) => {
  const { onChange, name } = props;

  return (
    <StyledDatePicker>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">
            Fecha de {name == "startDate" ? "inicio" : "fin"}
          </label>
        </div>
        <div className="field-body">
          <div className="field">
            <ReactDatePicker
              className="input" {...props}
              onChange={(date) => onChange({ target: {name, value: date} })}
              showYearDropdown
              dateFormatCalendar="MMMM"
              scrollableYearDropdown
            />
          </div>
        </div>
      </div>
    </StyledDatePicker>
  );
};

const StyledDatePicker = styled.div`
`;

export default DatePicker;
