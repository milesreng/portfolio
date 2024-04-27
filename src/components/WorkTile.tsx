import { useState, useContext } from 'react'
import Modal from 'react-modal'
import { WorkExperience } from '../content/data'

import { DarkModeContext } from '../content/spotifyContext'

const modalStyles = {
  content: {
    width: '75%',
    height: '50%',
    margin: 'auto',
    padding: '0'
  }
}

Modal.setAppElement('#root')

interface Props {
  experience: WorkExperience,
  idx: number
}

const WorkTile = ({ experience, idx }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const { darkMode } = useContext(DarkModeContext)

  return (
    <>
      <div className={`flex ${idx % 2 === 0 ? 'flex-row-reverse' : 'lg:pl-8 lg:pt-16'} h-fit`}>
        <div onClick={() => setShowModal(true)} className='image-wrapper w-32 h-32 md:w-36 md:h-36 lg:w-48 lg:h-48 hover:cursor-pointer'>
          <img src={experience.imageUrl} alt={`${experience.company} logo`} className='h-fit overflow-x-hidden rounded-full bg-slate-50 aspect-square' />
          <div className="text-xs text-center pt-2">
            {experience.position}
          </div>
        </div>
      </div>
      <Modal isOpen={showModal}
        style={modalStyles}>
          <div className={`${darkMode ? 'bg-[#272727] text-slate-50' : 'bg-slate-100'} font-content bg-opacity-70 h-full min-h-fit p-4`}>
            <div className='flex flex-row w-full justify-between'>
              <span>Title</span>
              <span onClick={() => setShowModal(false)} className='text-red-500 text-2xl hover:cursor-pointer'>&times;</span>
            </div>
          </div>
      </Modal>
    </>
  )
}

export default WorkTile