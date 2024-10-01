import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <div className='mt-12 mx-auto max-w-6xl grid grid-cols-[40%_60%]'>
      <div>
        <div className='sticky top-12 grid grid-rows-[35%_45%_20%] h-screen'>
          <div className='flex flex-col gap-2'>
            <div className='text-3xl text-primaryTitle font-semibold'>Apirat Saengarun</div>
            <div className='text-primaryTitle font-semibold'>Software Engineer - Studies</div>
            <div className='text-sm w-5/6'>Third-year Computer Engineering student 
              <br />at Suranaree University of Technology 
              <br />aspiring to become a Software Engineer.</div>
            <div>
              <a href="#">
                <span className='rounded-md bg-primaryTitle text-gray-100 py-2 px-4'>
                  View Resume
                  <span className='rotate-90 inline-block ml-2'>
                    <FontAwesomeIcon className='animate-bounce' icon={faArrowDown} />
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div>Nav</div>
          <div className='flex items-end'>Link</div>
        </div>
      </div>
      <div>
        <div>About</div>
        <div className='mb-96'>About</div>
        <div className='mb-96'>Experince</div>
        <div className='mb-96'>Project</div>
        <div className='mb-96'>Article</div>
      </div>
    </div>
  )
}

export default App;
