import { ValidationError } from 'runtypes'

export const prepareResponse = async (response: Response): Promise<unknown> => {
  if (!response.ok) {
    const errorMessage = await response.json()
    throw new Error(JSON.stringify(errorMessage))
  }
  return response.json()
}

export const handleRuntypeError = (error: unknown) => {
  throw error instanceof ValidationError
    ? new Error(`${error.name}: ${error.message}; Details: ${JSON.stringify(error.details)}`)
    : error
}
