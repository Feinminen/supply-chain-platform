import * as React from 'react'

import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { Close } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'

import { SupplierDetailsResponse } from '../../services/hooks/useTableContent/types'
import { Description, Header, Paper } from './styled'

interface SupplierCardModalProps {
  data: SupplierDetailsResponse
  isOpen: boolean
  onClose: () => void
}

export const SupplierCardModal = ({ isOpen, onClose, data }: SupplierCardModalProps) => {
  return (
    <Modal sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2' }} open={isOpen} onClose={onClose}>
      <Paper>
        <IconButton sx={{ position: 'absolute', top: 5, right: 5 }} onClick={onClose}>
          <Close />
        </IconButton>
        <Header>
          <Typography gutterBottom>{`Name: ${data.name}`}</Typography>
          <Typography gutterBottom>{`ID: ${data.id}`}</Typography>
        </Header>
        <Description>
          <Typography>{data.description}</Typography>
        </Description>
      </Paper>
    </Modal>
  )
}
