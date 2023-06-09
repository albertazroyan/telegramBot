export const serverPath = (
  process.env.SERVER_PATH || 'http://localhost:8080/'
).replace(/\/?$/, '/')
  
export const databasePath = `${serverPath}db/`

export const AMD = '\u058F'