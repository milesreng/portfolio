
import { projects, Project } from '../content/data'
import ProjectTile from '../components/ProjectTile'

const Code = () => {
  return (
    <div className='flex flex-col min-h-[85vh]'>
      <div className='text-center h-[50vh] flex flex-col justify-center'>
        <span className='align-middle w-5/6 md:w-3/4 mx-auto text-lg'>
        I love learning by doing, and I use hands-on projects to explore my interests
        in computer science, from graphics architecture to front-end web 
        development.
        </span>
      </div>
      <div className='flex flex-wrap mx-auto justify-center'>
        { projects.map((project: Project, idx: number) => (
          <ProjectTile project={project} key={idx} />
        )) }
      </div>
    </div>
  )
}

export default Code