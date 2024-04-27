import { useState, useContext } from 'react'
import { DarkModeContext } from '../content/spotifyContext'
import { Project } from '../content/data'
import Modal from 'react-modal'

interface Props {
  project: Project
}

const modalStyles = {
  content: {
    width: '60%',
    height: '75%',
    margin: 'auto',
    padding: '0'
  }
}

Modal.setAppElement('#root')

const ProjectTile = ({ project }: Props) => {
  const [showModal, setShowModal] = useState(false)

  const { darkMode } = useContext(DarkModeContext)

  return (
    <>
      <div className='basis-11/12 sm:basis-5/6 md:basis-1/3 w-fit p-4'>
        <div className='border p-2 dark:border-slate-600 bg-slate-50 hover:shadow-md dark:bg-[#272727]'>
            <div className='text-lg flex justify-between'>
              <div className='pb-2'>
                <a href={project.link} target='_blank' rel='noreferrer'>
                  { project.title }
                </a>
              </div>
              <div className='flex flex-row gap-2'>
                { project.languages.map((lang: string, idx: number) => (
                    <img src={`https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/${lang}/${lang}-original.svg`} 
                      alt={`${lang} logo`}
                      className='w-6 h-6'
                      key={idx} />
                ))}
              </div>
            </div>
            <div className='text-sm'>
              { project.liner }
            </div>
            <div onClick={() => setShowModal(true)} className='hover:cursor-pointer'>
              read more
            </div>
        </div>
      </div>
      <Modal isOpen={showModal} style={modalStyles}>
        <span className={`font-content p-4 flex flex-col h-fit min-h-full gap-4 ${darkMode ?  'bg-[#272727] text-slate-50' : 'bg-slate-100'} bg-opacity-70`}>
          <div className='flex flex-row w-full justify-between'>
            <span className='text-2xl flex flex-col md:flex-row'>
              <span className='my-auto pr-4'>
                { project.title }
              </span>
              <span className='flex flex-row gap-1'>
                { project.languages.map((lang: string, idx: number) => (
                  <img src={`https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/${lang}/${lang}-original.svg`} 
                  alt={`${lang} logo`}
                  className='md:w-8 md:h-8 w-6 h-6'
                  key={idx} />
                ))}
              </span>
            </span>
            <div className='text-red-700 hover:bg-slate-100 text-2xl rounded-full w-8 h-8 text-center align-items-center hover:cursor-pointer'
              onClick={() => { setShowModal(false) }}>
              &times;
            </div>
          </div>
          <div>
            <div className='w-5/6 mx-auto h-48'>
                { project.images.length > 0 ? project.images.map((url: string, idx: number) => (
                  <div key={idx}>
                    <img src={url} alt="" />
                  </div>
                )) : (
                  <span className='pt-12'>
                    Images go here
                  </span>
                )}
            </div>
            <div className='px-4'>
              { project.description.split('\n').map((paragraph: string, idx: number) => (
                <div key={idx} className='py-1'>
                  { paragraph }
                </div>
              )) }
            </div>
            <div>
            </div>
          </div>
        </span>
      </Modal>
    </>
  )
}

export default ProjectTile