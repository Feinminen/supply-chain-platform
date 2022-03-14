import dayjs from 'dayjs'

import { BASE_API_URL } from '../../../shared/config'
import { ContentType, QuoteDataResponse, QuoteData } from './types'

export const getRequestUrl = (type: ContentType) =>
  type === 'suppliers'
    ? `${BASE_API_URL}/api/v1/suppliers/?page=1`
    : `${BASE_API_URL}/api/v1/quotes/?page=1`

export const transformQuoteResponseToData = ({
  results,
  ...rest
}: QuoteDataResponse): QuoteData => ({
  results: results.map(({ supplier_id, amount, created, id, title }) => ({
    id,
    title,
    createdOn: dayjs(created).format('MMM DD, YYYY'),
    amount: Math.round(Number(amount)),
    supplierId: supplier_id,
  })),
  ...rest,
})
