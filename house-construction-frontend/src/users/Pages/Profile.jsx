import React from 'react'
import { Card, Button, Avatar } from "flowbite-react"
import Header from '../components/Header'
import Footer from '../../components/Footer'
import Editprofile from '../components/EditProfile'


function Profile() {
  return (
    <div>
      <Header />
      <section className="py-12 flex justify-center">
        <div className="w-full max-w-4xl p-8">
          <h2 className="text-3xl font-extrabold text-[#330000] mb-8 text-center">
            My Profile
          </h2>
          <div className="flex flex-col md:flex-row gap-10 mb-10 bg-white shadow-lg p-10">
            <div className="md:w-1/3 flex flex-col items-center md:items-start">
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Profile"
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-2xl font-bold text-[#660000]">Vihaan</h3>
              <p className="text-[#5E445C]">Homeowner</p>
            </div>
            <div className="md:w-2/3">
              <h4 className="text-xl font-bold text-[#660000] mb-6">
                Personal Information
              </h4>
              <div className="flex flex-col md:flex-row md:justify-between gap-6">
                <ul className="space-y-3 text-[#5E445C]">
                  <li><span className="font-semibold">Full Name:</span> Vihaan</li>
                  <li><span className="font-semibold">Email:</span> Vihaan@example.com</li>
                  <li><span className="font-semibold">Phone Number:</span> +91 9876543210</li>
                  <li><span className="font-semibold">Address:</span> 123 Green Avenue, Kochi, India</li>
                  <li><span className="font-semibold">PAssword:</span> ******</li>
                </ul>
                <div className="bg-[#5E445C] rounded-lg p-6 text-center">
                  <p className="text-3xl font-bold text-[#660000]">₹5000</p>
                  <p className="text-[#660000]">Total Paid</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end mt-8">
            <Editprofile/>
          </div>
        </div>
         
      </section>
      <Footer />
    </div>
  )
}

export default Profile
