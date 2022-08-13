import Sidebar from "../components/Sidebar.js";
import Navbar from "../components/Navbar.js";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

import React from 'react';

function New() {
    const [file, setFile] = React.useState();

    return (
        <div className="new box-border flex">
            <Sidebar />

            <div className="main-container h-screen w-[80%] xl:w-[85%]">
                <Navbar />

                <div className="new-supporter h-[92%] overflow-y-auto mx-4 scrollbar-hide font-nunito">
                    <div className="top card-shadow rounded-lg p-4 mt-4">
                        <h1 className="font-bold text-lg text-[#999]">Add New User</h1>
                    </div>

                    <div className="bottom box-border card-shadow rounded-lg p-4 mt-4 flex">
                        <div className="left box-border w-[30%] flex justify-center">
                            <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} className="w-24 h-24 rounded-full object-cover" />
                        </div>

                        <div className="right box-border w-[70%] flex flex-col items-center">
                            <div className="form box-border flex justify-between w-full">
                                <div className="form-left w-1/2 flex flex-col gap-6">
                                    <div className="input-container flex items-center">
                                        <span className="mr-2">Image:</span>

                                        <input type="file" id="chooseImg" name="chooseImg" className="hidden" onChange={(event) => setFile(event.target.files[0])} />
                                        <label htmlFor="chooseImg" className="cursor-pointer">
                                            <DriveFolderUploadIcon />
                                        </label>
                                    </div>

                                    <div className="input-box mt-8">
                                        <label className="input-label">Name and surname</label>
                                        <input type="text" name="name" id="name" placeholder="John Doe" className="input" />
                                    </div>

                                    <div className="input-box">
                                        <label className="input-label">Phone</label>
                                        <input type="text" name="phone" id="phone" placeholder="+1 234 567 89" className="input" />
                                    </div>

                                    <div className="input-box">
                                        <label className="input-label">Address</label>
                                        <input type="text" name="address" id="address" placeholder="Etton St. 216 New York" className="input" />
                                    </div>
                                </div>

                                <div className="form-right w-1/2 flex flex-col gap-6">
                                    <div className="input-box">
                                        <label className="input-label">Username</label>
                                        <input type="text" name="username" id="username" placeholder="john_doe" className="input" />
                                    </div>

                                    <div className="input-box">
                                        <label className="input-label">Email</label>
                                        <input type="email" name="email" id="email" placeholder="john.doe@gmail.com" className="input" />
                                    </div>

                                    <div className="input-box">
                                        <label className="input-label">Password</label>
                                        <input type="password" name="password" id="password" placeholder="•••••••••" className="input" />
                                    </div>

                                    <div className="input-box">
                                        <label for="country" className="input-label">Country</label>
                                        <input type="text" name="country" id="country" placeholder="USA" className="input" />
                                    </div>
                                </div>
                            </div>

                            <button className="btnSend bg-slate-400 py-2 rounded-md hover:bg-slate-500 text-white font-bold w-32 flex justify-center mt-12">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default New; 