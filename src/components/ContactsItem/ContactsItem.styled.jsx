import styled from '@emotion/styled';
import { IoIosContact } from 'react-icons/io';

export const Contact = styled.li`
  display: flex;
  align-items: center;
  list-style: none;

  :not(:last-child) {
  }
`;

export const ContactIcon = styled(IoIosContact)``;

export const ContactName = styled.span`
  display: inline-block;
  min-width: 150px;
`;

export const ContactNumber = styled.span`
  display: inline-block;
  min-width: 170px;
`;

export const DeleteBtn = styled.button`
  font-family: inherit;
  cursor: pointer;
  opacity: 0.3;

  transition: transform, 250ms;
  transition: opacity, 250ms ease-in-out;

  :hover {
    opacity: 1;
  }

  :active {
    transform: translateY(2px);
  }
`;
