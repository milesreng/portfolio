
import NowPlaying from '../components/NowPlaying'

const Home = () => {

  return (
    <div className='flex flex-col align-middle'>
      <div className='h-[95vh] flex flex-col md:flex-row w-100 align-middle justify-center'>
        <div className="basis-full md:basis-1/2 h-full flex flex-col align-middle justify-center">
          <div className="mx-auto">
            <img src="me.JPG" alt="" className="w-3/4 md:w-2/3 aspect-square rounded-t-md border-green-500 border-t-2 border-l-2 border-r-2 mx-auto" />
          </div>
          <div className="w-3/4 md:w-2/3 mx-auto">
            <NowPlaying />
          </div>
        </div>
        <div className="flex flex-col md:basis-1/2 align-middle justify-center gap-4 px-4 md:px-0">
          <span className='text-4xl'>
            Hi, I&apos;m Miles.
          </span>
          <span className='text-xl'>
            I&apos;m passionate about leveraging technology to increase healthcare access globally.
          </span>
        </div>
      </div>
      <div className='h-[100vh] w-100 bg-slate-200 dark:bg-slate-600 justify-center px-4 md:px-12'>
        <div className='py-12'>
          s
        </div>
      </div>
    </div>
  )
}

export default Home