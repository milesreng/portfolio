import { useContext } from 'react'
import { SpotifyContext } from '../content/spotifyContext'

import { FaSpotify } from 'react-icons/fa'

const NowPlaying = () => {
  const { nowPlaying } = useContext(SpotifyContext)

  return (
    <>
      { nowPlaying ? (
        <div className='w-full flex flex-row gap-2 justify-between p-2 bg-green-500 border-green-500 border-l-2 border-r-2 border-b-2 rounded-b-md'>
          <div className='basis-full flex flex-row text-white '>
            <div className='basis-1/4'>
              <img src={nowPlaying.albumImageUrl} alt="" />
            </div>
            <div className='flex flex-col my-auto pl-2 justify-between h-full'>
              <span></span>
              <div>
              <span className='text-sm uppercase flex flex-row gap-2'>
                <div>
                  On repeat
                </div>
                <div className='music-wave my-auto'>
                  <span id='wave-1' />
                  <span id='wave-2' />
                  <span id='wave-3' />
                </div>
              </span>
              <span className='text-sm'>
              { nowPlaying.title } by { nowPlaying.artist }
              </span>
              </div>
            </div>
            {/* <FaSpotify /> */}
          </div>
        </div>
      ) : (
        <div className='w-full flex flex-row gap-2 justify-between  border-slate-800 border-2 rounded-sm'>
          User is currently offline.
        </div>
      )}
    </>
  )
}

export default NowPlaying