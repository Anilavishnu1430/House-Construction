import React from 'react'
import { Button, Drawer, DrawerHeader, DrawerItems, Label, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";


function EditProfile() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);
    return (
        <div>
            <Button onClick={() => setIsOpen(true)} size="md" className='bg-[#660000] hover:bg-[#5E445C]'>
                Edit
            </Button>
            <Drawer open={isOpen} onClose={handleClose} position="left">
                <DrawerHeader title="Edit Profile" />
                <DrawerItems>
                    <div className="flex flex-col items-center mb-6">
                        <div className="relative">
                            <img
                                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                alt="Profile"
                                className="w-24 h-24 rounded-full object-cover"
                            />
                            <label htmlFor="file" className="absolute bottom-0 right-0 cursor-pointer flex flex-col items-center">
                                <input id="file" type="file" className="hidden" />
                                <img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" alt="" className="w-5 h-5" />
                            </label>

                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <h2 className="text-xl font-semibold">Vihaan</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24hy9dlk78YXM0cFFOHtKkihBPWKRDch0tQ&s"
                            className='w-5 h-5' />
                    </div>
                    <div className="space-y-4">
                        <div>
                            <TextInput id="fullName" placeholder="Full Name"  />
                        </div>
                        <div>
                            <TextInput id="email" type="email" placeholder="Email" />
                        </div>
                        <div>
                            <TextInput id="phone" type="tel" placeholder="Phone Number" />
                        </div>
                        <div>
                            <Textarea id="address" placeholder="Address" />
                        </div>
                        <div>
                            <TextInput id="password" type="password" placeholder="Enter new password" />
                        </div>
                        <div>
                            <TextInput id="password" type="password" placeholder="confirm password" />
                        </div>
                        </div>
                    <div className="flex justify-end gap-4 mt-6">
                        <Button className="bg-[#660000] hover:bg-[#5E445C]">Reset</Button>
                        <Button className="bg-[#660000] hover:bg-[#5E445C]">Update</Button>
                    </div>
                </DrawerItems>
            </Drawer>
        </div>
    )
}

export default EditProfile
