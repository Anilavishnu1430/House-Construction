import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import { Button, Modal, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";



function WorkRequest() {
    const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <AdminHeader/>
    <div className="overflow-x-auto p-20">
        <h1 className="text-3xl font-bold text-[#660000] mb-6">Work Requets</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell className="bg-[#330000] text-white">No</TableHeadCell>
            <TableHeadCell className="bg-[#330000] text-white">Name</TableHeadCell>
            <TableHeadCell className="bg-[#330000] text-white">Project Type</TableHeadCell>
            <TableHeadCell className="bg-[#330000] text-white">Trade</TableHeadCell>
            <TableHeadCell className="bg-[#330000] text-white">Location</TableHeadCell>
            <TableHeadCell className="bg-[#330000] text-white">Start Date</TableHeadCell>
            <TableHeadCell className="bg-[#330000] text-white"></TableHeadCell>
          </TableRow>
        </TableHead>

        <TableBody className="divide-y">
          <TableRow>
            <TableCell className="font-medium text-[#660000]">1</TableCell>
            <TableCell className='text-[#660000]'>Rajesh</TableCell>
            <TableCell className='text-[#660000]'>Home Construction</TableCell>
            <TableCell className='text-[#660000]'>Electrian</TableCell>
            <TableCell className='text-[#660000]'>Kochi</TableCell>
            <TableCell className='text-[#660000]'>2026-04-06</TableCell>
            <TableCell>
              <Button onClick={() => setOpenModal(true)} size="xs" className="bg-[#660000] hover:bg-[#5E445C] text-white mr-2">Awaiting Approval</Button>
            </TableCell>
          </TableRow>

          <TableRow className="bg-white">
            <TableCell className="font-medium text-[#660000]">2</TableCell>
            <TableCell className='text-[#660000]'>Meenu</TableCell>
            <TableCell className='text-[#660000]'>Renovation</TableCell>
            <TableCell className='text-[#660000]'>Engineer</TableCell>
            <TableCell className='text-[#660000]'>Kochi</TableCell>
            <TableCell className='text-[#660000]'>2026-04-07</TableCell>
            <TableCell>
              <Button size="xs" className="bg-[#660000] hover:bg-[#5E445C] text-white mr-2">Awaiting Approval</Button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-medium text-[#660000]">3</TableCell>
            <TableCell className='text-[#660000]'>Vishal</TableCell>
            <TableCell className='text-[#660000]'>Home Construction</TableCell>
            <TableCell className='text-[#660000]'>Plumber</TableCell>
            <TableCell className='text-[#660000]'>Kochi</TableCell>
            <TableCell className='text-[#660000]'>2026-04-06</TableCell>
            <TableCell>
              <Button size="xs" className="bg-[#660000] hover:bg-[#5E445C] text-white mr-2">Awaiting Approval</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
    <Modal size='xl' dismissible show={openModal} onClose={() => setOpenModal(false)}>
                    <ModalHeader>Contractor Request Details</ModalHeader>
                    <ModalBody>
                        <div className="space-y-4 text-[#330000]">
                        <p><strong>Request ID:</strong> 1</p>
                        <p><strong>Name:</strong>Rajesh</p>
                        <p><strong>Contact:</strong> 9898987656</p>
                        <p><strong>Email:</strong> Rajesh@gmail.com</p>
                        <p><strong>Project Type:</strong> Residential</p>
                        <p><strong>Location:</strong> kochi</p>
                        <p><strong>Date:</strong> 5/4/2026</p>
                        <p><strong>Status:</strong> Awaiting Approval</p>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            onClick={() => setOpenModal(false)}
                            type="submit"
                            className=" bg-[#330000] hover:bg-[#5E445C] text-white font-semibold"
                        >
                            Approve
                        </Button>
                        <Button
                            onClick={() => setOpenModal(false)}
                            type="submit"
                            className=" bg-[#330000] hover:bg-[#5E445C] text-white font-semibold"
                        >
                            Reject
                        </Button>
                    </ModalFooter>
                </Modal>
      <Footer/>
    </div>
  )
}

export default WorkRequest
