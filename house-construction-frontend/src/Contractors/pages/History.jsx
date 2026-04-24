import React from 'react'
import ContractorHeader from '../components/ContractorHeader'
import Footer from '../../components/Footer'
import { Card, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'

function History() {
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
                <Card
                    className="max-w-sm shadow-md"
                    imgAlt="Afzal Khan Residence"
                    imgSrc="https://cdn.jswonehomes.com/cover_laptop_38_8cb1e8dcff/cover_laptop_38_8cb1e8dcff.webp"
                >
                    <h3 className="text-lg font-semibold text-[#660000]">Mr Afzal Khan’s Residence</h3>
                    <p className="text-sm text-gray-600">Home Construction</p>
                    <p className="text-sm text-gray-600">Kochi</p>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="text-sm text-gray-600">Status</p>

                </Card>
                <Card
                    className="max-w-sm shadow-md"
                    imgAlt="Lloyd Lopez Residence"
                    imgSrc="https://cdn.jswonehomes.com/cover_laptop_41_3ba841eb0b/cover_laptop_41_3ba841eb0b.webp"
                >
                    <h3 className="text-lg font-semibold text-[#660000]">Mr Lloyd Lopez’s Residence</h3>
                    <p className="text-sm text-gray-600">Home Construction</p>
                    <p className="text-sm text-gray-600">Kochi</p>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="text-sm text-gray-600">Status</p>
                </Card>
                <Card
                    className="max-w-sm shadow-md"
                    imgAlt="Luxury Villa"
                    imgSrc="https://cdn.jswonehomes.com/Cover_NEW_Laptop_1_c6b8c7e9ab/Cover_NEW_Laptop_1_c6b8c7e9ab.webp"
                >
                    <h3 className="text-lg font-semibold text-[#660000]">Ms Mary ES Residence</h3>
                    <p className="text-sm text-gray-600">Home Construction</p>
                    <p className="text-sm text-gray-600">Kochi</p>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="text-sm text-gray-600">Status</p>
                </Card>

            </div>
            <Footer />
        </div>
    )
}

export default History
