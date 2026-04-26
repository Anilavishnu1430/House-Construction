import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { viewReplyAPI } from '../../services/allAPIs';


function Notification() {
    const [token, setToken] = React.useState("")
        console.log(token);
        const [reply, setReply] = React.useState([])

        useEffect(() => {
                setToken(sessionStorage.getItem("token"))
                viewReply()
            }, [token])
        
            const viewReply = async () => {
                try {
                    const reqHeader = {
                        Authorization: `Bearer ${token}`
                    }
                    const response = await viewReplyAPI(reqHeader)
                    console.log(response);
                    setReply(response.data.viewReply)
                }
                catch (err) {
                    console.log(err)
                }
            }
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
                    {
                        reply.length > 0?
                         reply.map(item=>(
                            <TableRow>
                        <TableCell className="font-medium text-[#660000]">{item.message}</TableCell>
                    </TableRow>
                         ))
                    :"No Reply Found"
                    }
                   
                </TableBody>
            </Table>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Notification
