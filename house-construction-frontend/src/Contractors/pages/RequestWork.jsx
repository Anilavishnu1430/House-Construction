import React from 'react'
import ContractorHeader from '../components/ContractorHeader'
import Footer from '../../components/Footer'
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";


function RequestWork() {
    return (
        <div>
            <ContractorHeader/>
            <h1 className="text-3xl font-bold text-[#660000] m-6">Request New Work</h1>
            <form className="bg-[#b89393] space-y-8 shadow-lg rounded-lg m-8 p-8">
            <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-1 space-y-6">
                    <Label htmlFor="name" className="text-[#660000]">Name</Label>
                    <TextInput id="name" type="text" placeholder="Enter contractor name" className="mt-2" />
                    <Label htmlFor="trade" className="text-[#660000]">Trade</Label>
                    <Select id="trade" className="mt-2">
                        <option value="">Select Trade</option>
                        <option value="Plumber">Plumber</option>
                        <option value="Mason">Mason</option>
                        <option value="Electrician">Electrician</option>
                        <option value="Carpenter">Carpenter</option>
                    </Select>
                    <Label htmlFor="projectType" className="text-[#660000]">Project Type</Label>
                    <Select id="projectType" className="mt-2">
                        <option value="">Select Project Type</option>
                        <option value="Home Construction">Home Construction</option>
                        <option value="Renovation">Renovation</option>
                    </Select>
                    
                </div>
                <div className="flex-1 space-y-6">
                    <Label htmlFor="location" className="text-[#660000]">Location</Label>
                    <TextInput id="location" type="text" placeholder="Enter location" className="mt-2" />
                    <Label htmlFor="date" className="text-[#660000]">Start Date</Label>
                    <TextInput id="date" type="date" className="mt-2" />
                    <Label htmlFor="notes" className="text-[#660000]">Notes</Label>
                    <Textarea id="notes" placeholder="Enter notes or description" rows={3} className="mt-2" />
                    
                    <div className="flex justify-end gap-4 mt-6">
                    <Button className="bg-[#660000] hover:bg-[#745271] text-white">Request</Button>
                    <Button className="bg-[#660000] hover:bg-[#745271] text-white">Cancel</Button>
                </div>
                </div>
                
                </div>
            </form>
            <Footer/>
        </div>
    )
}

export default RequestWork
