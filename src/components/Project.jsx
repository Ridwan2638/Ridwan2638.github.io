import school from '../assets/school.jpeg'
import hospital from '../assets/hospita.jpeg'
import rent from '../assets/rent.jpeg'
import job from '../assets/job.jpeg'
const Project = () => {
  return (
    <>
      <div className="items-center bg-gray-400 m-20 rounded-xl">
        <div className="grid justify-center w-full ">
            <h1 className="text-3xl mt-3">Projects</h1>
        </div>
        <div>
          <div className="grid tablet:grid-cols-2 gap-4 p-5 mobile:grid-cols-1">

            {/* School management card */}

            <div className="max-w-tablet mx-auto rounded-xl shadow-md bg-slate-200 overflow-hidden tablet:max-w-2xl hover:animate-pulse">
              <div className=" flex">
                <div className="p-5 ">
                  <h1 className=" uppercase tracking-wide text-sm  to-slate-200 font-bold">
                  School Management System
                  </h1>
                  <a href="#" className='text-center font-semibold items-center'>Opara School</a>
                  <p>Streamlines administrative tasks, enhances communication, and improves overall efficiency in educational institutions</p>
                </div>
                <div className='align-middle m-auto mr-3'>
                  <img src={school} alt="school" className='rounded-full' width={150} height={150} />
                </div>  
              </div>
            </div>

            {/* hospital management card */}

            <div className="max-w-tablet mx-auto rounded-xl shadow-md bg-slate-200 overflow-hidden tablet:max-w-2xl hover:animate-pulse">
              <div className=" flex">
                <div className="p-5 ">
                  <h1 className=" uppercase tracking-wide text-sm  to-slate-200 font-bold">
                  School Management System
                  </h1>
                  <a href="#" className='text-center font-semibold items-center'>Opara Teaching Hospital</a>
                  <p>Streamlines administrative tasks, enhances communication, and improves overall efficiency in educational institutions</p>
                </div>
                <div className='align-middle m-auto mr-3'>
                  <img src={hospital} alt="school" className='rounded-full' width={150} height={150} />
                </div>
                
                
              </div>
            </div>
            
          </div>
        </div>
        <hr className='mobile:hidden' />
        <div>
          <div className="grid tablet:grid-cols-2 gap-4 p-5 mobile:grid-cols-1">

            {/* School management card */}

            <div className="max-w-tablet mx-auto rounded-xl shadow-md bg-slate-200 overflow-hidden tablet:max-w-2xl hover:animate-pulse">
              <div className=" flex">
                <div className="p-5 ">
                  <h1 className=" uppercase tracking-wide text-sm  to-slate-200 font-bold">
                  Rentals Website
                  </h1>
                  <a href="#" className='text-center font-semibold items-center'>Opara School</a>
                  <p>Streamlines administrative tasks, enhances communication, and improves overall efficiency in educational institutions</p>
                </div>
                <div className='align-middle m-auto mr-3'>
                  <img src={rent} alt="school" className='rounded-full' width={150} height={150} />
                </div>  
              </div>
            </div>

            {/* hospital management card */}

            <div className="max-w-tablet mx-auto rounded-xl shadow-md bg-slate-200 overflow-hidden tablet:max-w-2xl hover:animate-pulse">
              <div className=" flex">
                <div className="p-5 ">
                  <h1 className=" uppercase tracking-wide text-sm  to-slate-200 font-bold">
                  Job Search Website
                  </h1>
                  <a href="#" className='text-center font-semibold items-center'>Opara Teaching Hospital</a>
                  <p>Streamlines administrative tasks, enhances communication, and improves overall efficiency in educational institutions</p>
                </div>
                <div className='align-middle m-auto mr-3'>
                  <img src={job} alt="school" className='rounded-full' width={150} height={150} />
                </div>
                
                
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Project