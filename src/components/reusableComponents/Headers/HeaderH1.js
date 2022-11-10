import styled from '@emotion/styled';

const HeaderH1 = styled.h1`
  margin-top: ${({ theme }) => theme.space[0]};
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  color: ${({ theme }) => theme.colors.accent};
`;

export default HeaderH1;
