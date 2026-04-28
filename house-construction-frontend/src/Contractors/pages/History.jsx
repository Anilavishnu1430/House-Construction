import React from 'react'
import ContractorHeader from '../components/ContractorHeader'
import Footer from '../../components/Footer'
import { Card, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { viewWorkHistoryAPI } from '../../services/allAPIs'
import { useEffect } from 'react'

function History() {
    const [workHistory, setWorkHistory] = React.useState([])
    
      useEffect(() => {
        getWorkHistory()
      }, [])
    
      const getWorkHistory = async () => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
          Authorization: `Bearer ${token}`
        }
        try {
          const response = await viewWorkHistoryAPI(reqHeader)
          console.log(response);
          setWorkHistory(response.data.history)
        }
        catch (err) {
          console.log(err)
        }
      }
    return (
        <div>
            <ContractorHeader />
            <h1 className="text-3xl font-bold text-[#660000] m-6">Work History</h1>
            {/* <div className="flex justify-end me-12">
                <Button className="bg-[#660000] hover:bg-[#5E445C] text-white">
                Download
                </Button>
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-5">
                {
                    workHistory.length>0?
                    workHistory.map(item=>(
                        <Card
                    className="max-w-sm shadow-md"
                    imgAlt="Afzal Khan Residence"
                    imgSrc={`http://localhost:3000/uploads/${item.uploadedImage}`}
                >
                    <h3 className="text-lg font-semibold text-[#660000]">Project Name : {item.projectname}</h3>
                    <p className="text-sm text-gray-600">Project Type : {item.type}</p>
                    <p className="text-sm text-gray-600">Location :{item.location}</p>
                    <p className="text-sm text-gray-600">Date :{item.date}</p>
                    <p className="text-sm text-gray-600">Status :{item.status}</p>

                </Card>
                    ))
                    :"No Work History Found"
                }
            </div>
            <Footer />
        </div>
    )
}

export default History
