import React from 'react'
import ContractorHeader from '../components/ContractorHeader'
import Footer from '../../components/Footer'
import { Button, Label, TextInput } from 'flowbite-react'

function ProfileSettings() {
  return (
    <div>
      <ContractorHeader/>
      <div className="p-10">
                <h1 className="text-3xl font-bold text-[#660000] text-center mb-6">Profile</h1>
                <div className="flex flex-col justify-between items-center gap-10">
                  <div className="w-1/2 bg-white shadow-lg p-6">
                    <div className="flex flex-col items-center mb-6">
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww"
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
                        <TextInput id="name" placeholder="Location" className="w-full" />
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
                    </div>
                  </div>
                </div>
              </div>
      <Footer/>
    </div>
  )
}

export default ProfileSettings

