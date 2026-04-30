import React from 'react'
import { List, ListItem } from "flowbite-react";
import { HiHome, HiBookOpen, HiBriefcase, HiCog } from "react-icons/hi";
import { Link } from 'react-router-dom';

function AdminSidebar() {
  return (
    <div>
      
    
      <div className="flex justify-center items-center mt-10">
        <List className="w-56">
          <Link to="/adminhome">
            <ListItem  active className="flex gap-2 text-white hover:bg-gray-900 rounded-lg px-3 py-2">
              🏠 Home
            </ListItem>
          </Link>
          <Link to="/work">
            <ListItem className="flex gap-2 text-white hover:bg-gray-900  rounded-lg px-3 py-2">
              📋 Work Requests
            </ListItem>
          </Link>
          <Link to="/contractors">
            <ListItem className="flex gap-2 text-white hover:bg-gray-900 rounded-lg px-3 py-2">
              👷 Contractors
            </ListItem>
          </Link>
          <Link to="/users">
            <ListItem className="flex gap-2 text-white hover:bg-gray-900 rounded-lg px-3 py-2">
              👥 Users
            </ListItem>
          </Link>
          <Link to="/addproject">
            <ListItem className="flex gap-2 text-white hover:bg-gray-900 rounded-lg px-3 py-2">
               📐 Add project
            </ListItem>
          </Link>
        </List>
      </div>
    </div>
  )
}

export default AdminSidebar
