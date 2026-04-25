import React, { useEffect } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import { Card, Label, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Textarea } from 'flowbite-react'
import { Table, Button } from "flowbite-react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";
import { viewAllQuoteAPI } from '../../services/allAPIs';


function AdminHome() {
    const [openModal, setOpenModal] = useState(false);

    const [token, setToken] = React.useState("")
    console.log(token);
    const [quote, setQuote] = React.useState([])

    useEffect(() => {
        setToken(sessionStorage.getItem("token"))
        viewQuote()
    }, [token])

    const viewQuote = async () => {
        try {
            const reqHeader = {
                Authorization: `Bearer ${token}`
            }
            const response = await viewAllQuoteAPI(reqHeader)
            console.log(response);
            setQuote(response.data.viewQuote)
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <AdminHeader />
            <section className="p-8">
                <h1 className="text-3xl font-bold text-[#660000] mb-6">Admin Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-[#5E445C] p-6 rounded-lg text-center">
                        <p className="text-xl font-semibold">TotalProjects</p>
                        <p className="text-3xl font-bold">120</p>
                    </div>
                    <div className="bg-[#5E445C] p-6 rounded-lg text-center">
                        <p className="text-xl font-semibold">Total Users</p>
                        <p className="text-3xl font-bold">60</p>
                    </div>
                    <div className="bg-[#5E445C] p-6 rounded-lg text-center">
                        <p className="text-xl font-semibold">Contractors</p>
                        <p className="text-3xl font-bold">38</p>
                    </div>
                </div>
                <Card>
                    <h2 className="text-xl font-bold mb-4">Notifications</h2>
                    <Table className="border border-[#330000]">
                        <TableHead>
                            <TableRow className="bg-[#330000] text-white">
                                <TableHeadCell className="bg-[#330000] text-white">Name</TableHeadCell>
                                <TableHeadCell className="bg-[#330000] text-white">Mobile</TableHeadCell>
                                <TableHeadCell className="bg-[#330000] text-white">Location</TableHeadCell>
                                <TableHeadCell className="bg-[#330000] text-white">City</TableHeadCell>
                                <TableHeadCell className="bg-[#330000] text-white">Email</TableHeadCell>
                                <TableHeadCell className="bg-[#330000] text-white">Service</TableHeadCell>
                                <TableHeadCell className="bg-[#330000] text-white">Message</TableHeadCell>
                                <TableHeadCell className="bg-[#330000] text-white"></TableHeadCell>
                            </TableRow>
                        </TableHead>

                        <TableBody className="divide-y">
                            {
                                quote.length>0?
                                quote.map(item=>(
                                    <TableRow>
                                <TableCell className='text-[#660000]'>{item.name}</TableCell>
                                <TableCell className='text-[#660000]'>{item.mobile}</TableCell>
                                <TableCell className='text-[#660000]'>{item.location}</TableCell>
                                <TableCell className='text-[#660000]'>{item.city}</TableCell>
                                <TableCell className='text-[#660000]'>{item.email}</TableCell>
                                <TableCell className='text-[#660000]'>{item.service}</TableCell>
                                <TableCell className='text-[#660000]'>{item.message}</TableCell>
                                <TableCell>
                                    <Button onClick={() => setOpenModal(true)} className="bg-[#660000] hover:bg-[#5E445C] text-white text-sm">
                                        Replay
                                    </Button>
                                </TableCell>
                            </TableRow>
                                ))
                                :"No quote found"
                            }

                        </TableBody>
                    </Table>
                </Card>
            </section>
            <Modal size='xl' dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <ModalHeader><span className="text-[#660000] font-bold text-2xl">Replay</span></ModalHeader>
                <ModalBody>
                    <form>
                        <div>
                            <Textarea id="message" placeholder="Type your Replay..." rows={4} className="mt-2" />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button className='bg-[#330000] hover:bg-[#5E445C]' onClick={() => setOpenModal(false)}>Send</Button>
                </ModalFooter>
            </Modal>
            <Footer />
        </div>
    )
}

export default AdminHome
