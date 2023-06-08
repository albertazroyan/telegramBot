/* eslint-disable @typescript-eslint/no-explicit-any */

export interface DbProviderInterface {
  get: (query: string) => Promise<{ status: number }>
  name: string
}

export interface ProviderDbInterface {
  db: string
}

export interface FetchReferenc {
  msg: string
  data: number
}

export interface FetchData {
  data: any
  msg: string
  status: number
}