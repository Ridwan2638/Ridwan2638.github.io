import logo from '../assets/logo.png';
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsPinterest,
} from "react-icons/bs";
const Footer = () => {
  return (
    <footer className='block'>
      <div className="tablet:flex px-5 py-10 bg-slate-500 tablet:justify-between items-center mobile:block mobile:justify-center">
        <div className='mobile:flex mobile:justify-center mobile:mb-5'><h1 className="text-white text-2xl font-semibold">Get in touch with me!</h1></div>
        <div className="flex justify-between">
          <input type="text" placeholder="Send me a mail for job or project" className="text-gray-800 border-lime-400 py-2 px-2 focus:outline-none border-2 w-fit rounded"/>
          <button className="bg-blue-800 justify-center ml-10 text-center rounded-2xl p-2 text-white hover:bg-yellow-400 duration-300 w-full">Send Message</button>
        </div>
      </div>
      <div className="py-10 px-10 tablet:flex bg-slate-400 justify-between mobile:block mobile:w-full">
        <ul className='tablet:w-1/3 mobile:w-full mobile:mb-5'>
          <img src={logo} alt="" className='w-48 h-28 ml-3.5 mobile:w-36 mobile:h-16'/>
          <p className='text-white mt-2'>“As a front-end developer skilled in React, Vite, and Tailwind CSS, I specialize in crafting dynamic, responsive websites. My focus is on delivering seamless user experiences through clean, efficient code and modern design principles.”</p>
        </ul>
        <ul className='justify-center mobile:mb-5'>
          <h1 className="text-xl font-medium">Skills</h1>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>TailwindCSS</li>
          <li>BootStrap</li>
          <li>Git & Git Hub</li>
        </ul>
        <ul>
          <h1 className="text-xl font-medium justify-center">Projects</h1>
          <li>School Management system</li>
          <li>Hospital Management System</li>
          <li>Job Search Site</li>
          <li>Rentals Website</li>
        </ul>
      </div>
      <div className='flex px-5 py-5 justify-between'>
        <div>©2024. All Right Reserved</div>
        <div>
          <a href="">Terms</a>
          <a href="" className='ml-4'>Privacy Policy</a>
        </div>
        <div>
          <div className="flex justify-between">
            <BsFacebook size={30} className=" border-4 rounded-full cursor-pointer hover:border-lime-400"/>
            <BsLinkedin size={30} className=" border-4 rounded-full cursor-pointer hover:border-lime-400"/>
            <BsTwitter size={30} className=" border-4 rounded-full cursor-pointer hover:border-lime-400"/>
            <BsPinterest size={30} className=" border-4 rounded-full cursor-pointer hover:border-lime-400"/>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer