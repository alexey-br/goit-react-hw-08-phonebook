import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  :not(:last-child) {
    margin-right: 16px;
  }

  transition: transform 250ms;

  &.active {
    transform: translateY(5px);
  }
`;
