import { useState } from 'react'
import { Project } from '../content/data'
import Modal from 'react-modal'

interface Props {
  project: Project
}

const modalStyles = {
  content: {
    width: '75%',
    height: '50%',
    margin: 'auto'
  }
}

Modal.setAppElement('#root')

const ProjectTile = ({ project }: Props) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className='basis-11/12 sm:basis-5/6 md:basis-1/3 w-fit p-4'>
        <div className='border p-2 dark:border-slate-600'>
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
            <div onClick={() => setShowModal(true)}>
              read more
            </div>
        </div>
      </div>
      <Modal isOpen={showModal} style={modalStyles}>
        <span className='font-content p-2 flex flex-col gap-4'>
          <div className='flex flex-row w-full justify-between'>
            <span className='text-2xl'>
              { project.title }
            </span>
            <div className='text-red-700 hover:bg-slate-100 rounded-full w-6 h-6 text-center align-items-center hover:cursor-pointer'
              onClick={() => { setShowModal(false) }}>
              &times;
            </div>
          </div>
          <div>
            { project.description }
          </div>
        </span>
      </Modal>
    </>
  )
}

export default ProjectTile