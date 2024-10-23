import React from "react"
import pic from "../../public/pic.1.jpeg"
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll"; 

function Navbar() {
    const [Menu, setMenu] = React.useState(false);
    const Navitems=[
      {
        id:1,
        text:"Home"
      },
      { 
        id:2,
        text:"About"
      }, 
      {
        id:3,
        text:"Contact"
      },
      
    ]
  return (
    <>
    <div className="max-w-screen 2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
     <div className="flex justify-between items-center h-16 ">
       <div className="flex space x-2">
        <img src={pic} className="h-14 w-14 rounded-full" alt="" />
        <h1 className="font bold text-xl cursor-pointer">
           Ashhad  
        <p className="text-sm font bold">Web Developer</p>
        </h1>
      </div>
{/* desktop Navbar */}      
         <div>
        <ul className="hidden md:flex space-x-8">
        {Navitems.map(({id,text}) => (
         <li className="hover:scale-105 duration-200 cursor-pointer"
          key={id}>
            <Link to={text}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
            >
            {text}</Link>
           
            </li>  
        )) 
      }     
          </ul> 
     <div onClick={()=>setMenu(!Menu)} className="md:hidden">
      {Menu ? <MdClose size={24}/> : <FiMenu size={24}/>}
     </div>
     </div>    
     </div>
        
        {/* mobile Navbar */}
       {  
        Menu && ( 
          <div className="bg-white">  
          <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-xl">
          {Navitems.map(({id, text}) => (
             <li className="hover:scale-105 duration-200 cursor-pointer font-semibold"
              key={id}>
               <Link
            onClick={()=>setMenu(!Menu)}   
            to={text}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
            >
            {text}
            
            </Link>

               </li>  
        )) 
      }     
          </ul>
           </div>
        )}
           
        
   </div>
    </>
  );

}



export default Navbar;
