import { createContext } from 'react'

export const SpotifyContext = createContext({
  nowPlaying: null, 
  setNowPlaying: (a: unknown) => { return a }
})

export const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: (a: unknown) => { return a }
})