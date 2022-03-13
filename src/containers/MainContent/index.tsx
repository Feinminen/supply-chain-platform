import React from 'react'

import { Typography } from '@mui/material'

import { ContentType } from '../../services/hooks/useTableContent/types'
import { TableContent } from '../../components/TableContent'

import { Wrapper } from './styled'

interface TableContentProps {
  title: ContentType
  token: string | null
}

export const MainContent = ({ title, token }: TableContentProps) => {
  return (
    <Wrapper>
      <Typography textTransform="capitalize" variant="h4" component="div" gutterBottom>
        {title}
      </Typography>
      {token && <TableContent contentType={title} token={token} />}
    </Wrapper>
  )
}
