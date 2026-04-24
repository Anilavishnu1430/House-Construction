import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";


function Notification() {
    return (
        <div>
            <Header />
            <h1 className="text-3xl font-extrabold text-[#330000] m-8 text-center">Notification</h1>
            {/* <h2 className="font-extrabold text-[#330000] m-8 text-center">No notification yet</h2> */}
            <div className="flex justify-center items-center mb-10">
            <div className="w-[60%] bg-white shadow-lg rounded-lg p-4">
            <Table className='border border-[#660000]'>
                <TableHead>
                    <TableRow>
                        <TableHeadCell className="bg-[#330000] text-white">Message</TableHeadCell>

                    </TableRow>
                </TableHead>
                <TableBody className="divide-y">
                    <TableRow>
                        <TableCell className="font-medium text-[#660000]">I will check the availabilty</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-[#660000]">we are proccessing the request and will be proceed zoon</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Notification
