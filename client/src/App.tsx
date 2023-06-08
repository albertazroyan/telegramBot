import React, { useEffect } from 'react'
import { SupportOrderPanel } from './components'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const table = window.Telegram.WebApp

const App: React.FC = () => {

  useEffect(() => {
    table.ready()
  }, [])
  
  return (
    <div className="App">
      <SupportOrderPanel />
    </div>
  )
}

export default App
