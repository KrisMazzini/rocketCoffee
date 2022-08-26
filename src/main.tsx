import React, { useState, useEffect, useContext } from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import { WindowContext } from './contexts/WindowContext'
import { NavigationContext } from './contexts/NavigationContext'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

function App() {
  const [windowSize, setWindowSize] = useState<string>(getWindowSize())
  const [navbarHidden, setNavbarHidden] = useState<boolean>(true)

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
      <NavigationContext.Provider value={{navbarHidden, setNavbarHidden}}>
        <Home />
      </NavigationContext.Provider>
    </WindowContext.Provider>
  )
}