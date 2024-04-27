import WorkTile from '../components/WorkTile'
import { WorkExperience, experiences } from '../content/data'

const Experience = () => {
  return (
    <div className='min-h-[90vh] py-4 px-12 flex flex-col md:flex-row w-full md:justify-between'>
      <div className='basis-2/3 my-12'>
        Blurb about what Ive done etc.
      </div>
      <div className='flex flex-wrap basis-1/2 py-12 h-fit mx-auto'>
        { experiences.map((experience: WorkExperience, idx: number) => (
          <WorkTile idx={idx} experience={experience} key={idx} />
        ))}
      </div>
    </div>
  )
}

export default Experience