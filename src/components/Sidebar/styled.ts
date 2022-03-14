import styled from 'styled-components'

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;

  padding: 80px 15px;
  align-items: center;

  background-color: ${({ theme }) => theme.background.primary};
  box-shadow: ${({ theme }) => theme.shadow.small};
  min-width: 250px;
`

export const Logo = styled.aside`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 100%;
`

export const Title = styled.h1`
  font-size: 20px;
  margin: 0 0 0 10px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 20px 0;
`
