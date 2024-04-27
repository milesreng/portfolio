import { createContext } from 'react'

export const SpotifyContext = createContext({
  nowPlaying: null, 
  setNowPlaying: (a: unknown) => { return a }
})