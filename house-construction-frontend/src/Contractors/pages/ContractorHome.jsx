import React from 'react'
import ContractorHeader from '../components/ContractorHeader'
import Footer from '../../components/Footer'

function ContractorHome() {
  
  return (  
    <div>
      <ContractorHeader/>
      <section className="p-8">
        <h1 className="text-3xl font-bold text-[#660000] mb-6">Contractor Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#5E445C] p-6 rounded-lg text-center">
            <p className="text-xl font-semibold">Work Request</p>
            <p className="text-3xl font-bold">5</p>
          </div>
          <div className="bg-[#5E445C] p-6 rounded-lg text-center">
            <p className="text-xl font-semibold">Work Completed</p>
            <p className="text-3xl font-bold">12</p>
          </div>
          <div className="bg-[#5E445C] p-6 rounded-lg text-center">
            <p className="text-xl font-semibold">Pending Approvals</p>
            <p className="text-3xl font-bold">3</p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default ContractorHome
