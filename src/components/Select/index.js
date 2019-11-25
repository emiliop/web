import React from 'react';
import styled from 'styled-components';

const Select = (props) => {
  const { name, title, options, onChange, selected } = props;
  console.log(selected);

  return (
    <StyledSelect>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">{title}</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="select">
              <select name={name} onChange={onChange}>
                {Object.keys(options).map((e, idx) =>
                  <option key={e} value={e} selected={selected==e ? true : false}>{options[e]}</option>
                )}
              </select>
            </div>
          </div>
        </div>
      </div>
    </StyledSelect>
  );
};

const StyledSelect = styled.div`
`;

export default Select;
