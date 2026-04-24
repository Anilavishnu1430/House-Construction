import React from 'react'
import ContractorHeader from '../components/ContractorHeader'
import Footer from '../../components/Footer'
import { Button, Label, Select, TextInput } from "flowbite-react";

function WorkDone() {
    return (
        <div>
            <ContractorHeader />
            <h1 className="text-3xl font-bold text-[#660000] m-6">Work Updates</h1>
            <form className="bg-[#5E445C] space-y-8 shadow-lg rounded-lg m-8 p-8">
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-1 space-y-6">
                        <Label htmlFor="name" className="text-[#660000]">Project Name</Label>
                        <TextInput id="name" type="text" placeholder="Enter Project name" className="mt-2" />
                        <Label htmlFor="projectType" className="text-[#660000]">Project Type</Label>
                        <Select id="projectType" className="mt-2">
                            <option value="">Select Project Type</option>
                            <option value="Home Construction">Home Construction</option>
                            <option value="Renovation">Renovation</option>
                        </Select>
                        <Label htmlFor="location" className="text-[#660000]">Location</Label>
                        <TextInput id="location" type="text" placeholder="Enter location" className="mt-2" />
                    </div>
                    <div className="flex-1 space-y-6">
                        <Label htmlFor="date" className="text-[#660000]">Date completed</Label>
                        <TextInput id="date" type="date" className="mt-2" />
                        <Label htmlFor="notes" className="text-[#660000]">Status</Label>
                        <Select id="Status" className="mt-2">
                            <option value="">Select Status</option>
                            <option value="Home Construction">Pending</option>
                            <option value="Renovation">Completed</option>
                            <option value="Renovation">Not Started</option>
                        </Select>
                        <label htmlFor="file" className="cursor-pointer flex flex-col items-center">
                            <input id="file" type="file" className="hidden" />
                            <img src="https://www.freeiconspng.com/uploads/orange-square-button-document-file-page-up-upload-icon-5.jpeg" alt="" className="w-20 h-20 object-contain" />
                            <span className="text-black-600 mt-2">Click to upload file</span>
                        </label>
                        <div className="flex justify-end gap-4 mt-6">
                            <Button className="bg-[#660000] hover:bg-[#745271] text-white">Add</Button>
                        </div>
                    </div>

                </div>
            </form>
            <Footer />
        </div>
    )
}

export default WorkDone
