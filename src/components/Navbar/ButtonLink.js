import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const ButtonLink = (props) => {
  const { children, to, isActive, primary } = props;
  return (
    <StyledButtonLink primary={primary} to={to} isActive={isActive} activeClassName="active">
      {children}
    </StyledButtonLink>
  );
};


const StyledButtonLink = styled(NavLink)`
  
  cursor: pointer;
  text-decoration: none;
  border-radius: 0px;
  padding: 0.5em 1em;
  color:#18144D;
  font-size: 1em;
  border-bottom: 2px solid transparent;

  &:hover, &.active {
    border-bottom: 2px solid #18144D;
  }
  &:focus {
    outline: none;
  }
`;

export default ButtonLink;
