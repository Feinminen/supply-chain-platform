import TableRow from '@mui/material/TableRow'
import styled from 'styled-components'

export const BodyRow = styled(TableRow)`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.background.secondary};
  }
`
