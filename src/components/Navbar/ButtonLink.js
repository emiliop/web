import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const ButtonLink = (props) => {
  const { children, to, isActive } = props;
  return (
    <StyledButtonLink to={to} isActive={isActive} activeClassName="active">
      {children}
    </StyledButtonLink>
  );
};


const StyledButtonLink = styled(NavLink)`
  background: white;
  border: 1px solid white;
  cursor: pointer;
  text-decoration: none;
  border-radius: 3px;
  padding: 0.5em 1em;
  color: black;
  font-size: 1em;

  &:hover, &.active {
    background: #18144D;
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

export default ButtonLink;
