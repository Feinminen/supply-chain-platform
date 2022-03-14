import styled from 'styled-components'
import Box from '@mui/material/Box'

export const Paper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 15px 0;
  background-color: ${({ theme }) => theme.background.primary};
  box-shadow: ${({ theme }) => theme.shadow.normal};
  border-radius: ${({ theme }) => theme.borderRadius.normal};

  &:focus-visible {
    outline: none;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.separator};
`

export const Description = styled.div`
  padding: 20px 15px;
`
