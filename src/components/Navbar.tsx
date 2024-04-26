import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { CgDarkMode } from 'react-icons/cg'

const Navbar = () => {
  const location = useLocation()

  const [darkMode, setDarkMode] = useState(false)
  const [path, setPath] = useState('')

  useEffect(() => {
    if (location.pathname) {
      setPath(location.pathname.slice(1))
    }
  }, [location])

  const toggleUIMode = () => { setDarkMode(!darkMode) }

  return (
    <div className={`w-full bg-slate-50 min-h-screen font-content ${darkMode ? 'dark' : ''} dark:bg-slate-800 dark:text-slate-50`}>
      <div className='w-full flex flex-row justify-between fixed'>
        <div className=' w-1/8 sm:w-1/6 md:w-1/4 xl:w-1/3'>
        </div>
        <div className='flex flex-row mx-auto w-3/4 sm:w-2/3 md:w-1/2 xl:w-1/3 justify-between py-4'>
          <Link to='/' className={`nav-link ${path === '' ? 'bg-slate-200 dark:bg-slate-600' : ''}`}>Work</Link>
          <Link to='/about'  className={`nav-link ${path === 'about' ? 'bg-slate-200 dark:bg-slate-600' : ''}`}>About</Link>
          <Link to='/code' className={`nav-link ${path === 'code' ? 'bg-slate-200 dark:bg-slate-600' : ''}`}>Code</Link>
          <Link to='/contact' className={`nav-link ${path === 'contact' ? 'bg-slate-200 dark:bg-slate-600' : ''}`}>Contact</Link>
        </div>
        <div className='w-1/8 sm:w-1/6 md:w-1/4 xl:w-1/3 flex flex-row justify-end px-4 m-auto text-2xl'>
          <CgDarkMode onClick={toggleUIMode} />
        </div>
      </div>
      <div className='min-h-screen pt-16 px-8'>
        <Outlet />
      </div>
    </div>
  )
}

export default Navbar