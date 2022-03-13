import React from 'react'

import { Header } from '../../components/Header'
import { useAuth } from '../../services/hooks/useAuth'
import { AuthorizationForm } from '../../components/AuthorizationForm'
import { Content } from './styled'

export const App = () => {
  const { requestToken, token, isLoading, errorMessage } = useAuth()

  return (
    <Content>
      <Header />
      {!token && (
        <AuthorizationForm onSubmit={requestToken} isLoading={isLoading} error={errorMessage} />
      )}
    </Content>
  )
}
