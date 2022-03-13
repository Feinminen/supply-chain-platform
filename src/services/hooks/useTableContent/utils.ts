import { BASE_API_URL } from '../../../shared/config'
import { ContentType } from './types'

export const getRequestUrl = (type: ContentType) =>
  type === 'suppliers'
    ? `${BASE_API_URL}/api/v1/suppliers/?page=1`
    : `${BASE_API_URL}/api/v1/quotes/?page=1`
