import React from 'react'
import pic from "../../public/pic.1.jpeg"


import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";


import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
    <div name="Home" className=" max-w-screen-2xl container mx-auto px-4 md:px-20 my-24">
    <div className="flex flex-col md:flex-row">    
     <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
      <span className="text-xl">Welcome In My Feed</span>
      <div className="flex space-x-1 md:text-4xl">
      <h1>Hello! I'm a </h1>
     {/* <span className="text-red-800 font semi-bold">Developer</span> */}
     <ReactTyped
            className="text-red-800 font semi-bold"
          strings={["Developer","Programmer","DigitalMarketer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
      </div>

       
       <br />
       <p className="text-sm md:text-md text-justify">
       As a digital marketer and web developer,
        I blend creativity with technical expertise to craft
        seamless online experiences. My unique skill set allows
        you to not only drive targeted traffic through strategic
        marketing campaigns but also optimize websites for
        performance and user engagement. I understand how to
       leverage data and analytics to fine-tune your strategies, 
       ensuring that each campaign resonates with the right audience. 
       Whether I am coding ,responsive website or implementing an 
       innovative marketing funnel, I have the tools to turn ideas 
       into impactful digital realities, staying ahead in the 
       ever-evolving online landscape.
       </p>
       <br/>
         {/*Social Media Icon*/}
      <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0" >
      <div className="space-y-2">
        <h1 className="font-bold">Available on</h1>

      <ul className="flex space-x-5">
      <li>
        <a href="https://www.facebook.com/TRADERS812"  target="_blank">
        <FaSquareFacebook className="text-2xl cursor-pointer" />
        </a>
        </li>
       <li>
        <a href="https://www.linkedin.com/in/ashhad-khan-89484b2b5/"  target="_blank">
        <FaLinkedin className="text-2xl cursor-pointer" />
        </a>
        </li>
       <li>
         <a href="https://discord.com/channels/1289479594239328277/1289479594239328279"  target="_blank">
        <FaDiscord className="text-2xl cursor-pointer" />
        </a>
        </li>
       <li>
         <a href="https://github.com/Rukhsanaashhad" target="_blank">
        <BsGithub className="text-2xl cursor-pointer" />
        </a>
        </li>

      </ul>
      </div>
      <div className="space-y-2"> 
          <h1 className="font-bold">Current working on</h1>

          <div className="flex space-x-5">
          <SiTypescript className="text-xl md:text-3xl hover:scale-110 duration-200 rounded full border-[2px]" />
          <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded full border-[2px]" />
          <IoLogoJavascript className="text-xl md:text-3xl hover:scale-110 duration-200 rounded full border-[2px]"/>
           </div>
      </div>
      </div>
      </div>
     <div className=" w-1/2 md:ml-48 md:mt-20 mt-9 order-1" >
      <img 
           src={pic} className="rounded-full md:w-[450px] md:h-[450px] " 
           alt="" />
     </div>          
     </div>
     </div>
       <br/>
       <hr/>
    </>
  ) 
    
}

export default Home;
