import React, { useState } from 'react'

import { Sidebar } from '../../components/Sidebar'
import { useAuth } from '../../services/hooks/useAuth'
import { AuthorizationForm } from '../../components/AuthorizationForm'
import { MainContent } from '../MainContent'
import { ContentType } from '../../services/hooks/useTableContent/types'
import { Content } from './styled'

export const App = () => {
  const { requestToken, token, isLoading, errorMessage } = useAuth()
  const [selectedTitle, setSelectedTitle] = useState<ContentType>('suppliers')

  return (
    <Content>
      <Sidebar onTabChange={setSelectedTitle} />
      {!token ? (
        <AuthorizationForm onSubmit={requestToken} isLoading={isLoading} error={errorMessage} />
      ) : (
        <MainContent title={selectedTitle} token={token} />
      )}
    </Content>
  )
}
