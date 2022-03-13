import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.background.primary};
  padding: 10px;
`

export const Title = styled.h1`
  font-size: 25px;
  margin: 0 0 0 10px;
`
