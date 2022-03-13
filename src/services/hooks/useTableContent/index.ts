import { useCallback, useRef, useState } from 'react'

import { ValidationError } from 'runtypes'

import { prepareResponse } from '../utils'
import { ContentType, RequestStep, QuoteDataResponse, SuppliersDataResponse } from './types'
import { getRequestUrl } from './utils'

const DEFAULT_ERROR_MESSAGE = 'Something went wrong, please try another credentials'

export function useTableContent() {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [data, setData] = useState<QuoteDataResponse | SuppliersDataResponse | null | any>(null)
  const abortController = useRef<AbortController | null>(null)

  const makeDataRequest = useCallback(
    async (step: RequestStep, contentType: ContentType, token: string, data: any) => {
      if (abortController.current !== null) {
        abortController.current.abort()
      }

      abortController.current = new AbortController()
      const requestUrl =
        step === 'initial'
          ? getRequestUrl(contentType)
          : step === 'next'
          ? data.next
          : data.previous

      return await fetch(requestUrl, {
        method: 'GET',
        signal: abortController.current.signal,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      })
        .then(prepareResponse)
        .then((res) =>
          contentType === 'suppliers'
            ? SuppliersDataResponse.check(res)
            : QuoteDataResponse.check(res)
        )
        .catch((error) => {
          throw error instanceof ValidationError
            ? new Error(
                `${error.name}: ${error.message}; Details: ${JSON.stringify(error.details)}`
              )
            : error
        })
    },
    []
  )

  const requestData = useCallback(
    async (step: RequestStep, contentType: ContentType, token: string, data: any) => {
      setIsLoading(true)
      setErrorMessage(null)

      try {
        const x = await makeDataRequest(step, contentType, token, data)
        setData(x)
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
    [makeDataRequest]
  )

  return {
    data,
    isLoading,
    errorMessage,
    requestData,
  }
}
