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
