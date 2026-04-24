import React from 'react'
import {Avatar,Navbar,NavbarToggle} from "flowbite-react";
import { Link } from 'react-router-dom';
import Houselogo from "../../assets/Houselogo.png";

function ContractorHeader() {
  return (
    <div>
      <Navbar fluid className="text-black" style={{backgroundColor:"#5e445c"}}>
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center">
          <img
            src={Houselogo}
            className="mr-3 h-6 sm:h-9 rounded-full"
            alt="House Logo"
          />
          <h1>DreamConstruct</h1>
        </div>
        <div className="flex justify-center flex-1">
          <div className="flex space-x-8">
            <Link to="/conhome" className="text-black hover:text-[#660000] font-medium transition-colors">
              🏠 Home
            </Link>
            <Link to="/reqwork" className="text-black hover:text-[#660000] font-medium transition-colors">
              🧰 Request Work
            </Link>
            <Link to="/done" className="text-black hover:text-[#660000] font-medium transition-colors">
              📋 Work Done
            </Link>
            <Link to="/history" className="text-black hover:text-[#660000] font-medium transition-colors">
              📜 Work History 
            </Link>
          </div>
        </div>
        <div className="flex md:order-2 items-center space-x-4">
          <div className="flex items-center cursor-pointer">
            <div className="w-10 h-5 bg-gray-300 rounded-full relative">
              <div className="absolute left-0 top-0 w-5 h-5 bg-white rounded-full shadow"></div>
            </div>
          </div>
          <Link to="/profilesettings" className="text-black hover:text-[#660000] font-medium transition-colors">
              ⚙️
            </Link>

          <Avatar
                alt="User settings"
                img="https://images.unsplash.com/photo-1654110455429-cf322b40a906?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww"
                rounded
              />    
          <NavbarToggle />
        </div>
      </div>
    </Navbar>
    <Navbar className="bg-[#dd9292]">
        <marquee behavior="scroll" direction="left" className="text-white font-semibold">
          Welcome! Track your projects, requests, and progress here.
        </marquee>
      </Navbar>
    </div>
  )
}

export default ContractorHeader
