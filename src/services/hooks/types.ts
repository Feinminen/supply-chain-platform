import * as t from 'runtypes'

export const ApiAuthResponse = t.Record({
  token: t.String,
})

export type ApiAuthResponse = t.Static<typeof ApiAuthResponse>

export interface AuthRequestParams {
  username: string
  password: string
}

export interface AuthData {
  token: string | null
  isLoading: boolean
  errorMessage: string | null
  requestToken: (params: AuthRequestParams) => Promise<void>
}
