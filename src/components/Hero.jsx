import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsPinterest,
} from "react-icons/bs";

import myPic from '../assets/Sanni-Ridwan.jpeg'
const Hero = () => {
  return (
    <section className="tablet:flex justify-around m-5 space-x-8 items-center pb-10 mobile:block mobile:justify-center mobile:m-10" >
      <div className="tablet:w-1/3 mobile:w-fit">
        <p className="text-4xl mt-5 mb-5 text-blue-600">I am</p>
        <h1 className="text-6xl">Sanni Ridwan</h1>
        <hr className="bg-black h-0.5"/>
        <p>
          "Passionate front-end developer with over 3 years of experience in
          building responsive and user-friendly web applications. Proficient in
          React, Tailwind CSS, and JavaScript. Adept at collaborating with the Team"
        </p>        
      </div> 
      <div className="tablet:w-1/3 items-center mobile:w-fit mobile:py-5">
        <img src={myPic} alt="Sanni Ridwan Pics" width={250} height={250} className="rounded-full w-full border-8 border-white" />
      </div>
      <div className="items-center tablet:w-1/3 mobile:block mobile:items-center mobile:w-full mobile:pr-10 ">
        <h1 className="tablet:text-4xl mobile:text-2xl">About Me</h1>
        <hr className="bg-black w-40 h-0.5"/>
        <p>Let Code your dreams into reality. Every line we write brings you closer to your goals.</p>
        <button className="bg-blue-800 my-5 justify-center text-center rounded-2xl p-3 text-white hover:bg-yellow-400">Learn More</button>
        <div className="flex justify-between ">
          <a href="https://web.facebook.com/profile.php?id=100006770056124"><BsFacebook size={40} className=" border-4 rounded-full cursor-pointer hover:border-lime-400"/></a>
          <a href="https://www.linkedin.com/in/ridwan-olamide/"><BsLinkedin size={40} className=" border-4 rounded-full cursor-pointer hover:border-lime-400"/></a>
          <a href="https://x.com/sanni1538"><BsTwitter size={40} className=" border-4 rounded-full cursor-pointer hover:border-lime-400"/></a>
          <a href="https://www.pinterest.com/sridwanolamide/"><BsPinterest size={40} className=" border-4 rounded-full cursor-pointer hover:border-lime-400"/></a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
