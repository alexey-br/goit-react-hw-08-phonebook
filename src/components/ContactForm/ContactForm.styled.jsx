import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

export const InputItem = styled.label`
  display: block;
`;

export const InputLabel = styled.span`
  display: block;
`;

export const Input = styled(Field)`
  font-size: inherit;
  font-family: inherit;
  width: 200px;
`;

export const SubmitBtn = styled.button`
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;

  transition: transform, 250ms;

  :active {
    transform: translateY(2px);
  }
`;

export const ValidationError = styled(ErrorMessage)`
  color: red;
`;
