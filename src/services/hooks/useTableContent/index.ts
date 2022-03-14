import { useCallback, useRef, useState } from 'react'
import { BASE_API_URL } from '../../../shared/config'

import { prepareResponse, handleRuntypeError } from '../utils'
import {
  QuoteDataResponse,
  SuppliersDataResponse,
  GeneralDataRequestParams,
  SupplierRequestParams,
  SupplierDetailsResponse,
} from './types'
import { getRequestUrl } from './utils'

const DEFAULT_ERROR_MESSAGE = 'Something went wrong, please reload page'

export function useTableContent() {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [data, setData] = useState<QuoteDataResponse | SuppliersDataResponse | null>(null)
  const [supplierDetails, setSupplierDetails] = useState<SupplierDetailsResponse | null>(null)
  const abortController = useRef<AbortController | null>(null)

  const makeGeneralDataRequest = useCallback(
    async (params: GeneralDataRequestParams, controller: AbortController) => {
      const requestUrl =
        params.step === 'initial'
          ? getRequestUrl(params.contentType)
          : params.step === 'next'
          ? params.data.next
          : params.data.previous

      return await fetch(requestUrl, {
        method: 'GET',
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${params.token}`,
        },
      })
        .then(prepareResponse)
        .then((res) =>
          params.contentType === 'suppliers'
            ? SuppliersDataResponse.check(res)
            : QuoteDataResponse.check(res)
        )
        .catch(handleRuntypeError)
    },
    []
  )

  const makeSupplierDetailsRequest = useCallback(
    async (params: SupplierRequestParams, controller: AbortController) => {
      return await fetch(`${BASE_API_URL}/api/v1/suppliers/${params.id}/`, {
        method: 'GET',
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${params.token}`,
        },
      })
        .then(prepareResponse)
        .then((res) => SupplierDetailsResponse.check(res))
        .catch(handleRuntypeError)
    },
    []
  )

  const requestData = useCallback(
    async (params: GeneralDataRequestParams | SupplierRequestParams) => {
      setIsLoading(true)
      setErrorMessage(null)

      if (abortController.current !== null) {
        abortController.current.abort()
      }

      abortController.current = new AbortController()

      try {
        if (params.step === 'specificSupplier') {
          setSupplierDetails(await makeSupplierDetailsRequest(params, abortController.current))
        } else {
          setData(await makeGeneralDataRequest(params, abortController.current))
        }
      } catch (error: any) {
        if (error['non_field_errors']) {
          setErrorMessage(error['non_field_errors'][0])
        } else {
          setErrorMessage(DEFAULT_ERROR_MESSAGE)
        }

        throw error
      } finally {
        setIsLoading(false)
        abortController.current = null
      }
    },
    [makeGeneralDataRequest, makeSupplierDetailsRequest]
  )

  return {
    data,
    isLoading,
    errorMessage,
    supplierDetails,
    setSupplierDetails,
    requestData,
  }
}
