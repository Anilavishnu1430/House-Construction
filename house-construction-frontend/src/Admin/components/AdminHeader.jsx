import React, { useEffect } from 'react'
import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar, NavbarToggle } from "flowbite-react";
import { Link } from 'react-router-dom';
import Houselogo from "../../assets/Houselogo.png";
import { serverURL } from '../../services/serverURL';


function AdminHeader() {
  const [adminDetails, setAdminDetails] = React.useState({})

  useEffect(() => {
    setAdminDetails(JSON.parse(sessionStorage.getItem("existingUser")))
  }, [])
  return (
    <div>
      <Navbar fluid className="text-black" style={{ backgroundColor: "#5e445c" }}>
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
              <Link to="/adminhome" className="text-black hover:text-[#660000] font-medium transition-colors">
                🏠 Home
              </Link>
              <Link to="/work" className="text-black hover:text-[#660000] font-medium transition-colors">
                📋 Work Requests
              </Link>
              <Link to="/contractors" className="text-black hover:text-[#660000] font-medium transition-colors">
                👷 Contractors
              </Link>
              <Link to="/users" className="text-black hover:text-[#660000] font-medium transition-colors">
                👥 Users
              </Link>
              <Link to="/addproject" className="text-black hover:text-[#660000] font-medium transition-colors">
                📐 Add project
              </Link>
            </div>
          </div>
          <div className="flex md:order-2 items-center space-x-4">
            <div className="flex items-center cursor-pointer">
              <div className="w-10 h-5 bg-gray-300 rounded-full relative">
                <div className="absolute left-0 top-0 w-5 h-5 bg-white rounded-full shadow"></div>
              </div>
            </div>
            <Link to="/settings" className="text-black hover:text-[#660000] font-medium transition-colors">
              ⚙️
            </Link>

            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img={
                    adminDetails.profile
                      ? adminDetails.profile.startsWith("http")
                        ? adminDetails.profile
                        : `${serverURL}/uploads/${adminDetails.profile}`
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
                  }
                  rounded
                />
              }
            >

              <Link to={"/settings"}><DropdownItem>Settings</DropdownItem></Link>
              <DropdownDivider />
              <Link to={"/login"}><DropdownItem>Sign out</DropdownItem></Link>
            </Dropdown>
            <NavbarToggle />
          </div>
        </div>
      </Navbar>
      <Navbar className="bg-[#dd9292]">
        <marquee behavior="scroll" direction="left" className="text-white font-semibold">
          Welcome Admin! You're all set to manage and monitor the system
        </marquee>
      </Navbar>
    </div>
  )
}

export default AdminHeader
