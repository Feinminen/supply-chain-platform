export const prepareResponse = async (response: Response): Promise<unknown> => {
  if (!response.ok) {
    const errorMessage = await response.json()
    throw new Error(JSON.stringify(errorMessage))
  }
  return response.json()
}
