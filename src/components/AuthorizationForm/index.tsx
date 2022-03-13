import React, { memo, useCallback, useState } from 'react'

import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import LoadingButton from '@mui/lab/LoadingButton'

import { AuthRequestParams } from '../../services/hooks/useAuth/types'
import { Paper, FormContainer, Content, ErrorContainer, ErrorMessage } from './styled'

interface AuthorizationFormProps {
  isLoading: boolean
  error: string | null
  onSubmit(params: AuthRequestParams): void
}

const DEFAULT_INPUT_VALUE = ''

export const AuthorizationForm = memo(({ onSubmit, isLoading, error }: AuthorizationFormProps) => {
  const [username, setUsername] = useState(DEFAULT_INPUT_VALUE)
  const [password, setPassword] = useState(DEFAULT_INPUT_VALUE)

  const handleUsernameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value),
    []
  )

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    []
  )

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setUsername(DEFAULT_INPUT_VALUE)
      setPassword(DEFAULT_INPUT_VALUE)
      onSubmit({ username, password })
    },
    [username, password, onSubmit]
  )

  const isProperData = username !== '' && password !== ''

  return (
    <Paper>
      <FormContainer onSubmit={handleSubmit}>
        <Typography variant="h4" component="div" gutterBottom>
          Authorization
        </Typography>

        <Content>
          <TextField
            name="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter username"
          />
          <TextField
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
          />
        </Content>

        <ErrorContainer>{error && <ErrorMessage>{error}</ErrorMessage>}</ErrorContainer>

        <LoadingButton
          disabled={!isProperData}
          type="submit"
          variant="contained"
          loading={isLoading}
        >
          Submit
        </LoadingButton>
      </FormContainer>
    </Paper>
  )
})

AuthorizationForm.displayName = 'AuthorizationForm'
