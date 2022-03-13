import styled from 'styled-components'

export const Paper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 100;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const FormContainer = styled.form`
  position: relative;
  padding: 24px;
  min-width: 350px;
  display: flex;
  flex-direction: column;

  border-radius: ${({ theme }) => theme.borderRadius.normal};
  background: ${({ theme }) => theme.background.primary};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 20px;
  width: 100%;
  height: 130px;
`

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 20px;
  min-height: 30px;
`

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.palette.negative};
`
