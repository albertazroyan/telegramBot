/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  DbProviderInterface,
  FetchData,
  ProviderDbInterface
} from './types'
  
import { databasePath, serverPath } from '../configs/global'
  
// create class implementing DbProviderInterface
export class DbProvider implements DbProviderInterface {
  private provider: ProviderDbInterface
  name: string
    
  // constructor function takes in a string parameter
  constructor (databasePath: string) {
    this.provider = { // initialize provider property with an object
      db: databasePath // set the 'db' property of provider object to the given database path
    }
    this.name = databasePath // set the name property to the given database path
  }
    
  get (query: string): Promise<any | { status: number }> {
    return new Promise((resolve) => {
      // fetch data from the given server path, database path and query string
      // convert response to json format as a promise 
      fetch(serverPath + '/' + this.getDbName() + '/' + query)
        .then(res => res.json() as Promise<FetchData>)
        .then(({ msg, data }) => {
          if (msg === 'ok') resolve(data)
          else resolve({ status: 404 })
        }).catch((onRejected: any) => console.warn('Server failed' , query, onRejected))
    })
  }
  
  put (doc: any): Promise<any> {
    return new Promise((resolve) => {
      // fetch data from the given server path and database path
      // set the method of fetch request to 'PUT'
      fetch(serverPath + this.getDbName(), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(doc)
      }).then((res) => {
        resolve(res.json())
      })
    })
  }
    
  private getDbName (): string {
    // returns database path by calling getDbNameFromUrl function with the provider's 'db' property
    return this.getDbNameFromUrl(this.provider.db)
  }
    
  private getDbNameFromUrl (url: string): string {
    // replace database path in given url with an empty string and return the resulting string
    return url.replace(databasePath, '')
  }
    
}
    
export default DbProvider