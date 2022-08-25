import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import { WindowContext } from './contexts/WindowContext'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

function App() {
  const [windowSize, setWindowSize] = useState<string>(getWindowSize())

  function getWindowSize() {
    const { innerWidth: windowWidth } = window
    
    if (windowWidth < 600) {
      return "mobile"
    }

    if (windowWidth < 1000) {
      return "tablet"
    }

    return "desktop"
  }

  function handleResize() {
    const size = getWindowSize()
    setWindowSize(size)
  }

  useEffect(() => {
      window.addEventListener('resize', handleResize)
  }, [])

  return (
    <WindowContext.Provider value={windowSize}>
      <Home />
    </WindowContext.Provider>
  )
}