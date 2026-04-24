import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import { Button, Select, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Label, TextInput, Textarea } from "flowbite-react";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useState } from "react";


function Contractors() {
    const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <AdminHeader/>
    <div className="overflow-x-auto p-10">
        <h1 className="text-3xl font-bold text-[#660000] mb-6">Contractor Details</h1>
        <div className="flex justify-end mb-4">
    <Button onClick={() => setOpenModal(true)} 
      className="bg-[#660000] hover:bg-[#5E445C] text-white">
      Add Contractor
    </Button>
  </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell className="bg-[#330000] text-white">No</TableHeadCell>
            <TableHeadCell className="bg-[#330000] text-white">Name</TableHeadCell>
            <TableHeadCell className="bg-[#330000] text-white">Phone</TableHeadCell>
            <TableHeadCell className="bg-[#330000] text-white">Email</TableHeadCell>
            <TableHeadCell className="bg-[#330000] text-white">Trade</TableHeadCell>
            <TableHeadCell className="bg-[#330000] text-white">Project Type</TableHeadCell>
            <TableHeadCell className="bg-[#330000] text-white">Location</TableHeadCell>
            <TableHeadCell className="bg-[#330000] text-white">Date</TableHeadCell>
            <TableHeadCell className="bg-[#330000] text-white">Notes</TableHeadCell>
            <TableHeadCell className="bg-[#330000] text-white">Status</TableHeadCell>
            <TableHeadCell className="bg-[#330000] text-white"></TableHeadCell>
          </TableRow>
        </TableHead>

        <TableBody className="divide-y">
          <TableRow>
            <TableCell className="font-medium text-[#660000]">1</TableCell>
            <TableCell className='text-[#660000]'>Rajesh</TableCell>
            <TableCell className='text-[#660000]'>7890234567</TableCell>
            <TableCell className='text-[#660000]'>Rajesh@gmail.com</TableCell>
            <TableCell className='text-[#660000]'>Plumber</TableCell>
            <TableCell className='text-[#660000]'>Home Construction</TableCell>
            <TableCell className='text-[#660000]'>Kochi</TableCell>
            <TableCell className='text-[#660000]'>2026-04-06</TableCell>
            <TableCell className='text-[#660000]'>description of the work</TableCell>
            <TableCell className='text-[#660000]'>Awaiting Approval</TableCell>
            <TableCell>
                <p onClick={() => setOpenModal(true)} size="xs" className="text-[#660000] mb-2"><FaEdit /></p>
                <p size="xs" className="text-[#660000] mb-2"><FaTrash /></p>
            </TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="font-medium text-[#660000]">2</TableCell>
            <TableCell className='text-[#660000]'>Rajesh</TableCell>
            <TableCell className='text-[#660000]'>7890234567</TableCell>
            <TableCell className='text-[#660000]'>Rajesh@gmail.com</TableCell>
            <TableCell className='text-[#660000]'>Engineer</TableCell>
            <TableCell className='text-[#660000]'>Home Construction</TableCell>
            <TableCell className='text-[#660000]'>Kochi</TableCell>
            <TableCell className='text-[#660000]'>2026-04-06</TableCell>
            <TableCell className='text-[#660000]'>description of the work</TableCell>
            <TableCell className='text-[#660000]'>Awaiting Approval</TableCell>
            <TableCell>
                <p size="xs" className="text-[#660000] mb-2"><FaEdit /></p>
                <p size="xs" className="text-[#660000] mb-2"><FaTrash /></p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
    <Modal size='5xl' dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader className="text-xl font-bold text-[#330000] mb-4">Contractor Details</ModalHeader>
            <ModalBody>
                <form className="space-y-8 bg-white shadow-lg rounded-lg p-8">
                    <div>
                        <Label htmlFor="name" className="text-[#5E445C]">Name</Label>
                        <TextInput id="name" type="text" placeholder="Enter contractor name" className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="phone" className="text-[#5E445C]">Phone</Label>
                        <TextInput id="phone" type="tel" placeholder="Enter phone number" className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="email" className="text-[#5E445C]">Email</Label>
                        <TextInput id="email" type="email" placeholder="Enter email address" className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="trade" className="text-[#5E445C]">Trade</Label>
                        <Select id="trade" className="mt-2">
                        <option value="">Select Trade</option>
                        <option value="Plumber">Plumber</option>
                        <option value="Mason">Mason</option>
                        <option value="Electrician">Electrician</option>
                        <option value="Carpenter">Carpenter</option>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="projectType" className="text-[#5E445C]">Project Type</Label>
                        <Select id="projectType" className="mt-2">
                        <option value="">Select Project Type</option>
                        <option value="Home Construction">Home Construction</option>
                        <option value="Renovation">Renovation</option>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="location" className="text-[#5E445C]">Location</Label>
                        <TextInput id="location" type="text" placeholder="Enter location" className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="date" className="text-[#5E445C]">Date</Label>
                        <TextInput id="date" type="date" className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="notes" className="text-[#5E445C]">Notes</Label>
                        <Textarea id="notes" placeholder="Enter notes or description" rows={3} className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="status" className="text-[#5E445C]">Status</Label>
                        <Select id="status" className="mt-2">
                        <option value="Awaiting Approval">Awaiting Approval</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        </Select>
                    </div>
                    <div className="flex justify-end gap-4 mt-6">
                        <Button onClick={() => setOpenModal(false)} className="bg-[#660000] hover:bg-[#5E445C] text-white">Save</Button>
                        <Button onClick={() => setOpenModal(false)} className="bg-[#660000] hover:bg-[#5E445C] text-white">Cancel</Button>
                    </div>
                    </form>
            </ModalBody>   
        </Modal>
    <Footer/>
    </div>
  )
}

export default Contractors
