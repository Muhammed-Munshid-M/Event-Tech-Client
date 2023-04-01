import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import {managerUrl} from '../../../API/Api'
import toast from 'react-hot-toast'

function Otp() {
    const [otp, setOtp ] = useState('')
    const navigate = useNavigate()
    const submitOtp =async (e)=>{
        e.preventDefault()
        try {
            await axios.post(`${managerUrl}otp`,{otp}).then((response)=>{
                if (response.data.success) {
                    navigate('/manager')
                    toast.success(response.data.message)
                } else {
                    navigate('/manager/otp')
                    toast.error('Your otp is invalid,Please try again')
                }
            })
            
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Navbar/>
            <body className="h-screen overflow-hidden flex items-center justify-center my-20">
                <section className="min-h-screen flex items-stretch text-white w-3/4">
                    <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat  relative items-center bg-[url('/dec2.png')]">
                        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                    </div>
                    <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-color">
                        <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center">
                            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                        </div>
                        <div className="w-full py-6 z-20">
                            <h1 className="my-6 w-auto h-7 sm:h-8 inline-flex font-semibold text-3xl">Otp
                            </h1>
                            <form action="" onSubmit={submitOtp} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                                <div className="pb-2 pt-4">
                                    <input type="number" name="otp" id="otp" placeholder="Enter your Otp" value={otp} className="block w-full p-4 text-lg rounded-sm bg-black" 
                                    onChange={(e) => setOtp(e.target.value)}/>
                                </div>
                                <div className="px-4 pb-2 pt-4">
                                    <button className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none" type="submit">submit</button>
                                </div>
                                <div className="px-4 pb-2 pt-4">
                                    <button className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none" type="submit">resend otp</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </body>
        </div>
    )
}

export default Otp
