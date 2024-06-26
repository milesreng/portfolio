import { useState } from 'react'
import { Route, 
         createBrowserRouter, 
         createRoutesFromElements, 
         RouterProvider } from 'react-router-dom'

import { SpotifyContext, DarkModeContext } from './content/spotifyContext'
import { Song } from './content/data'

import Layout from './pages/Layout'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Code from './pages/Code'
import Contact from './pages/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='work' element={<Experience />} />
      <Route path='code' element={<Code />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

function App() {
  const [nowPlaying, setNowPlaying] = useState<Song | null>(null)
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <>
      <SpotifyContext.Provider value={{ nowPlaying, setNowPlaying }}>
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
          <RouterProvider router={router} />
        </DarkModeContext.Provider>
      </SpotifyContext.Provider>
    </>
  )
}

export default App
