import logo from '../assets/logo.png';
import { CiMenuKebab } from "react-icons/ci";
// import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <>
        <div className="rounded-lg flex justify-between items-center p-5 ">
            <img src={logo} alt="" className='w-48 h-28 ml-3.5 mobile:w-36 mobile:h-16'/>
            <div>
                <div className='space-x-6 text-xl  mobile:hidden tablet:block'>
                    <a href="#" className=' hover:bg-white rounded-lg px-5 py-2'>Skills</a>
                    <a href="#" className=' hover:bg-white rounded-lg px-5 py-2'>Projects</a>
                    <a href="#" className=' hover:bg-white rounded-lg px-5 py-2'>Testimonials</a>
                </div>
                <div className='tablet:hidden'>
                <CiMenuKebab size={30} className='text-blue-900'/>
                </div>
            </div>
        
        </div>
    </>
  )
}

export default Nav