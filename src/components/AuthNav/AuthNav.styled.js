import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  transform: scale(0.95);
  opacity: 0.7;

  :not(:last-child) {
    margin-right: 16px;
  }

  transition: all 250ms;

  &.active {
    transform: scale(1);
    opacity: 1;
  }
`;
