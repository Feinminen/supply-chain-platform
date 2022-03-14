import * as t from 'runtypes'

export const SuppliersDataResponse = t.Record({
  next: t.Union(t.String, t.Null),
  previous: t.Union(t.String, t.Null),
  results: t.Array(
    t.Record({
      id: t.Number,
      name: t.String,
      description: t.Union(t.String, t.Null),
    })
  ),
})

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type SuppliersDataResponse = t.Static<typeof SuppliersDataResponse>

export const SupplierDetailsResponse = t.Record({
  id: t.Number,
  name: t.String,
  description: t.Union(t.String, t.Null),
})

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type SupplierDetailsResponse = t.Static<typeof SupplierDetailsResponse>

export interface QuoteData {
  next: string | null
  previous: string | null
  results: {
    id: number
    amount: number
    createdOn: string
    title: string
    supplierId: number | null
  }[]
}

export const QuoteDataResponse = t.Record({
  next: t.Union(t.String, t.Null),
  previous: t.Union(t.String, t.Null),
  results: t.Array(
    t.Record({
      id: t.Number,
      amount: t.String,
      title: t.String,
      created: t.String,
      supplier_id: t.Union(t.Number, t.Null),
    })
  ),
})

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type QuoteDataResponse = t.Static<typeof QuoteDataResponse>

export type ContentType = 'suppliers' | 'quotes'

export type RequestStep = 'initial' | 'prev' | 'next'

interface BaseRequestParams {
  contentType: ContentType
  token: string
}

interface InitialRequestParams extends BaseRequestParams {
  step: 'initial'
  data?: never
}

interface PrevRequestParams extends BaseRequestParams {
  step: 'prev'
  data: Omit<QuoteDataResponse | SuppliersDataResponse, 'previous'> & { previous: string }
}

interface NextRequestParams extends BaseRequestParams {
  step: 'next'
  data: Omit<QuoteDataResponse | SuppliersDataResponse, 'next'> & { next: string }
}

export type GeneralDataRequestParams = PrevRequestParams | InitialRequestParams | NextRequestParams
export interface SupplierRequestParams {
  step: 'specificSupplier'
  id: string
  token: string
}
