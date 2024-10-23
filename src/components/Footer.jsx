import React from 'react'
import { FaFacebook,
    FaLinkedinIn,
    FaDiscord 

} from 'react-icons/fa6'

function Footer() {
  return (
  <>
     <hr />
  <footer className="py-11">
      <div className="max-w-screen 2xl container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
                < FaFacebook size={30}/>
                <FaLinkedinIn size={30}/>
                <FaDiscord size={30}/> 
            </div>
         <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
            <p className="text-sm">&copy;2024 your Company. All rights reserved.</p>
            <p className="text-sm">Supportive Partener 💖 Ashhad </p>
         </div>
        </div>
      </div>
  </footer>
     
    
  </>
  );
}   

export default Footer
