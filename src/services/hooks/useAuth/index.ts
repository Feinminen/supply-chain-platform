import { useCallback, useRef, useState } from 'react'

import { BASE_API_URL } from '../../../shared/config'
import { prepareResponse } from '../utils'
import { ApiAuthResponse, AuthData, AuthRequestParams } from './types'

const DEFAULT_ERROR_MESSAGE = 'Something went wrong, please try another credentials'

export function useAuth(): AuthData {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const abortController = useRef<AbortController | null>(null)

  const makeAuthRequest = useCallback(async ({ username, password }: AuthRequestParams) => {
    if (abortController.current !== null) {
      abortController.current.abort()
    }

    abortController.current = new AbortController()

    return await fetch(`${BASE_API_URL}/api-token-auth/`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      signal: abortController.current.signal,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(prepareResponse)
      .then((res) => ApiAuthResponse.check(res))
      .catch((error) => {
        throw JSON.parse(error.message)
      })
  }, [])

  const requestToken = useCallback(
    async (params: AuthRequestParams) => {
      setIsLoading(true)
      setErrorMessage(null)

      try {
        const { token } = await makeAuthRequest(params)
        setToken(token)
      } catch (e: any) {
        if (e['non_field_errors']) {
          setErrorMessage(e['non_field_errors'][0])
        } else {
          setErrorMessage(DEFAULT_ERROR_MESSAGE)
        }

        throw e
      } finally {
        setIsLoading(false)
        abortController.current = null
      }
    },
    [makeAuthRequest]
  )

  return {
    token,
    isLoading,
    errorMessage,
    requestToken,
  }
}
