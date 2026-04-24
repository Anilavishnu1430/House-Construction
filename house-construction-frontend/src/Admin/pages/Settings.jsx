import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import { Button, Label, TextInput } from 'flowbite-react'

function Settings() {
  return (
    <div>
        <AdminHeader/>
      <div className="p-10">
          <h1 className="text-3xl font-bold text-[#660000] text-center mb-6">Settings</h1>
          <div className="flex flex-col justify-between items-center gap-10">
            <div className="w-1/2 text-black-700">
            Update your profile details here. You can change your name, 
            contact information, password, and profile picture to keep your account secure and up to date.
            </div>
            <div className="w-1/2">
              <div className="flex flex-col items-center mb-6">
                <div className="relative">
                  <img
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <label
                    htmlFor="file"
                    className="absolute bottom-0 right-0 cursor-pointer flex flex-col items-center"
                  >
                    <input id="file" type="file" className="hidden" />
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
                      alt=""
                      className="w-5 h-5"
                    />
                  </label>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" value="Name" />
                  <TextInput id="name" placeholder="Name" className="w-full" />
                </div>
                <div>
                    <Label htmlFor="phone" value="Phone Number" />
                    <TextInput id="phone" type="tel" placeholder="Enter phone number" className="w-full mt-2" />
                </div>
                <div>
                    <Label htmlFor="email" value="Email Address" />
                    <TextInput id="email" type="email" placeholder="you@example.com" className="w-full mt-2" />
                </div>
                <div>
                  <Label htmlFor="password1" value="Password" />
                  <TextInput id="password1" type="password" placeholder="Password" className="w-full" />
                </div>
                <div>
                  <Label htmlFor="password2" value="Confirm Password" />
                  <TextInput id="password2" type="password" placeholder="Confirm Password" className="w-full" />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <Button className="bg-[#660000] hover:bg-[#5E445C]">Reset</Button>
                <Button className="bg-[#660000] hover:bg-[#5E445C]">Update</Button>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Settings
