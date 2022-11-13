import styled from '@emotion/styled';

export const InputForm = styled.input`
  background: ${({ theme }) => theme.backgrounds.primary};
  border: 1px solid rgba(245, 146, 86, 0.5);
  // ${({ theme }) => theme.palette.accent};
  border-radius: 40px;
  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 1.4;
  outline: none;

  &.inputAuth {
    padding: 11px 14px;
    width: 280px;
    font-size: 14px;
    @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
      padding: 14px 32px;
      width: 448px;
      font-size: 18px;
    }
    @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
      width: 458px;
    }
  }

  &.inputAdd {
    padding: 11px 14px;
    width: 240px;
    font-size: 14px;
    @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
      padding: 11px 16px;
      width: 448px;
      font-size: 16px;
    }
  }
`;
