import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 80px 15px 15px 15px;
  margin: 0 50px;
  background-color: ${({ theme }) => theme.background.primary};
  box-shadow: ${({ theme }) => theme.shadow.small};
`
