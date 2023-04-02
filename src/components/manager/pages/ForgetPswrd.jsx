import React, { useState } from 'react'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios'
import { managerUrl } from '../../../API/Api'

function ForgetPswrd() {
    const [mobile,setMobile] = useState('')
    const navigate = useNavigate()
    const verifyNumber = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${managerUrl}forgot`,{mobile}).then((response)=>{
                if (response.data.success) {
                    navigate('/manager/reset-otp')
                } else {
                    navigate('/manager/forgot')
                    toast.error(response.data.message)
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
                        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-slate-950">
                            <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center">
                                <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                            </div>
                            <div className="w-full py-6 z-20">
                                <h1 className="my-6 w-auto h-7 sm:h-8 inline-flex font-semibold text-3xl">Forgot Password ?
                                </h1>
                                <form onSubmit={verifyNumber} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                                <div className="text-left text-gray-400">
                                        <p>Just enter your mobile number</p>
                                    </div>
                                    <div className="pb-2 pt-4">
                                        <input type="number" name="mobile" id="mobile" placeholder="Mobile" className="block w-full p-4 text-lg rounded-sm bg-black" value={mobile}
                                        onChange={(e)=>setMobile(e.target.value)}/>
                                    </div>
                                    <div className="px-4 pb-2 pt-4">
                                        <button className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none" type='submit'>submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </body>
        </div>
    )
}

export default ForgetPswrd
