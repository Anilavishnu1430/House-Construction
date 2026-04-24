import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import { Card } from 'flowbite-react'


function Users() {
    return (
        <div>
            <AdminHeader />
            <h1 className="text-3xl font-bold text-[#660000] m-6">User Details</h1>
            <div className="flex justify-center gap-6 p-6">
                <Card className="w-72 shadow-md p-4">
                    <p className="text-sm font-medium text-red-600 mb-3">
                        ID: 68149df73
                    </p>
                    <div className="flex items-center gap-4">
                        <img
                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="Profile"
                            className="w-12 h-12 rounded-full border"
                        />
                        <div>
                            <h5 className="text-lg font-semibold text-blue-600">Vivek</h5>
                            <p className="text-sm text-orange-500">Vivek@gmail.com</p>
                        </div>
                    </div>
                </Card>
                <Card className="w-72 shadow-md p-4">
                    <p className="text-sm font-medium text-red-600 mb-3">
                        ID: 681875803
                    </p>
                    <div className="flex items-center gap-4">
                        <img
                            src=""
                            alt="Profile"
                            className="w-12 h-12 rounded-full border"
                        />
                        <div>
                            <h5 className="text-lg font-semibold text-blue-600">Maya</h5>
                            <p className="text-sm text-orange-500">maya@gmail.com</p>
                        </div>
                    </div>
                </Card>
                <Card className="w-72 shadow-md p-4">
                    <p className="text-sm font-medium text-red-600 mb-3">
                        ID: 681880303
                    </p>
                    <div className="flex items-center gap-4">
                        <img
                            src=""
                            alt="Profile"
                            className="w-12 h-12 rounded-full border"
                        />
                        <div>
                            <h5 className="text-lg font-semibold text-blue-600">manu</h5>
                            <p className="text-sm text-orange-500">manu@gmail.com</p>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="flex justify-center gap-6 p-6">
                <Card className="w-72 shadow-md p-4">
                    <p className="text-sm font-medium text-red-600 mb-3">
                        ID: 68149df73
                    </p>
                    <div className="flex items-center gap-4">
                        <img
                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="Profile"
                            className="w-12 h-12 rounded-full border"
                        />
                        <div>
                            <h5 className="text-lg font-semibold text-blue-600">Vivek</h5>
                            <p className="text-sm text-orange-500">Vivek@gmail.com</p>
                        </div>
                    </div>
                </Card>
                <Card className="w-72 shadow-md p-4">
                    <p className="text-sm font-medium text-red-600 mb-3">
                        ID: 681875803
                    </p>
                    <div className="flex items-center gap-4">
                        <img
                            src=""
                            alt="Profile"
                            className="w-12 h-12 rounded-full border"
                        />
                        <div>
                            <h5 className="text-lg font-semibold text-blue-600">Maya</h5>
                            <p className="text-sm text-orange-500">maya@gmail.com</p>
                        </div>
                    </div>
                </Card>
                <Card className="w-72 shadow-md p-4">
                    <p className="text-sm font-medium text-red-600 mb-3">
                        ID: 681880303
                    </p>
                    <div className="flex items-center gap-4">
                        <img
                            src=""
                            alt="Profile"
                            className="w-12 h-12 rounded-full border"
                        />
                        <div>
                            <h5 className="text-lg font-semibold text-blue-600">manu</h5>
                            <p className="text-sm text-orange-500">manu@gmail.com</p>
                        </div>
                    </div>
                </Card>
            </div>
            <Footer />
        </div>
    )
}

export default Users
