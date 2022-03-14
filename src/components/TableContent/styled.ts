import TableRow from '@mui/material/TableRow'
import styled, { css } from 'styled-components'

export const BodyRow = styled(TableRow)<{ $isClickable: boolean }>`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.background.secondary};
  }

  ${({ $isClickable }) =>
    $isClickable &&
    css`
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.background.base};
      }
    `}
`

export const LoaderWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;
  background-color: rgba(0, 0, 0, 0.25);
`

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.palette.negative};
`
