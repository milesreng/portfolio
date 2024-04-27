import { useState, useEffect, useContext } from 'react'
import { SpotifyContext } from '../content/spotifyContext'
// import IntersectionObserver
import { Buffer } from 'buffer'
import querystring from 'querystring'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Song } from '../content/data'

import { CgDarkMode } from 'react-icons/cg'

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET
const REFRESH_TOKEN = import.meta.env.VITE_REFRESH_TOKEN

const Navbar = () => {
  const location = useLocation()

  const { nowPlaying, setNowPlaying } = useContext(SpotifyContext)
  const [darkMode, setDarkMode] = useState(false)
  const [path, setPath] = useState('')

  useEffect(() => {
    getNowPlaying()
  }, [])

  useEffect(() => {
    if (location.pathname) {
      setPath(location.pathname.slice(1))
    }
  }, [location])

  const toggleUIMode = () => { setDarkMode(!darkMode) }

  const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
  const ON_REPEAT_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=1`
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

  const getAccessToken = async (refresh_token: string) => {
    const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')

    const res = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token
      })
    })

    return await res.json()
  }

  const getNowPlaying = async () => {
    const { access_token } = await getAccessToken(REFRESH_TOKEN)

    const res = await fetch(ON_REPEAT_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })

    if (res.status > 400) throw new Error('could not fetch song')

    const topSongs = await res.json()

    console.log(topSongs.items[0])

    const song = topSongs.items[0]

    setNowPlaying({
      albumImageUrl: song.album.images[0].url,
      artist: song.artists.map((artist: any) => artist.name).join(', '),
      songUrl: song.external_urls.spotify,
      title: song.name
    })
  }

  return (
    <div  id='app' className={`w-full bg-slate-50 min-h-screen font-content ${darkMode ? 'dark' : ''} dark:bg-slate-800 dark:text-slate-50`}>
      <div className='w-full flex flex-row justify-between fixed'>
        <div className=' w-1/8 sm:w-1/6 md:w-1/4 xl:w-1/3'>
        </div>
        <div className='flex flex-row mx-auto w-3/4 sm:w-2/3 md:w-1/2 xl:w-1/3 justify-between my-2 py-2 dark:bg-slate-800 bg-slate-50 bg-opacity-80 dark:bg-opacity-80 rounded-md'>
          <Link to='/' className={`nav-link ${path === '' ? 'bg-slate-200 dark:bg-slate-600' : ''}`}>About</Link>
          <Link to='/work'  className={`nav-link ${path === 'work' ? 'bg-slate-200 dark:bg-slate-600' : ''}`}>Work</Link>
          <Link to='/code' className={`nav-link ${path === 'code' ? 'bg-slate-200 dark:bg-slate-600' : ''}`}>Code</Link>
          <Link to='/contact' className={`nav-link ${path === 'contact' ? 'bg-slate-200 dark:bg-slate-600' : ''}`}>Contact</Link>
        </div>
        <div className='w-1/8 sm:w-1/6 md:w-1/4 xl:w-1/3 flex flex-row justify-end px-4 m-auto text-2xl hover:cursor-pointer'>
          <CgDarkMode onClick={toggleUIMode} />
        </div>
      </div>
      <div className='min-h-screen pt-16'>
        <Outlet />
      </div>
    </div>
  )
}

export default Navbar