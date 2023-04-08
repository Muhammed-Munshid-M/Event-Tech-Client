import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import axios from 'axios'
import { managerUrl } from '../../../API/Api'
import './Login.css'
import { Toaster, toast } from 'react-hot-toast'
import { auth } from '../../../firebase/config'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'

function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [aadhar, setAadhar] = useState([])
    const [voterId, setVoterId] = useState([])
    const [mobile, setMobile] = useState('')
    const [license, setLicence] = useState([])
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const managerData = { name, email, mobile, password }

    function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
                'size': 'invisible',
                callback: (response) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    // ...
                },
                'expired-callback': () => {
                    // Response expired. Ask user to solve reCAPTCHA again.
                    // ...
                }
            }, auth);
        }
    }

    const sendOtp = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${managerUrl}signUp`, managerData)
                .then((response) => {
                    if (response.data.success) {
                        onCaptchVerify()
                        const formatPhone = '+91' + mobile
                        const appVerifier = window.recaptchaVerifier;
                        signInWithPhoneNumber(auth, formatPhone, appVerifier)
                            .then((confirmationResult) => {
                                window.confirmationResult = confirmationResult;
                                toast(response.data.message)
                                navigate('/manager/otp')
                            }).catch((error) => {
                                console.log(error);
                            })
                    } else if (response.data.exist) {
                        toast(response.data.message)
                        navigate('/manager')
                    } else {
                        toast.error('something error')
                        navigate('/manager/signUp')
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        } catch (error) {
            console.log(error)
            toast.error('something error')
        }
    }

    return (
        <>
            <Navbar />
            <body className="h-full overflow-hidden flex items-center justify-center my-20">
                <div id='recaptcha-container'></div>
                <Toaster toastOptions={{ duration: 4000 }} />
                <section className="max-h-screen flex items-stretch text-white h-full w-4/5">
                    <div className="lg:flex w-1/3 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center bg-[url('/dec4.png')]">
                        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                    </div>
                    <div className="lg:w-3/4 w-full flex items-center md:px-16 px-0 z-0 bg-slate-950">
                        <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center">
                            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                        </div>
                        <div className="z-20">
                            <h1 className="my-6 w-auto h-7  inline-flex font-semibold text-3xl">Hey, Event Manager
                            </h1>
                            <div className="text-left text-gray-300 text-lg">
                                <p>Just signup</p>
                            </div>
                            <div className="sm:w-2/3 w-full lg:px-0">
                                <div className="pb-1 pt-2">
                                    <label className='text-left text-gray-400 ps-2' htmlFor="">Name <span className='text-red-600'>*</span></label>
                                    <input type="text" name="name" id="name" placeholder="Name" value={name} className="mt-2 block w-full p-4 text-lg rounded-sm bg-black"
                                        onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="pb-1 pt-2">
                                    <label className='text-left text-gray-400 ps-2' htmlFor="">Email <span className='text-red-600'>*</span></label>
                                    <input type="email" name="email" id="email" placeholder="Email" value={email} className="mt-2 block w-full p-4 text-lg rounded-sm bg-black"
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="pb-1 pt-2">
                                    <label className='text-left text-gray-400 ps-2' htmlFor="">Aadhar card <span className='text-red-600'>*</span></label>
                                    <input className="block w-full mt-2 p-4 text-lg rounded-sm bg-black" value={aadhar} type="file" name="mobile" id="mobile" placeholder="Adhar"
                                        onChange={(e) => setAadhar(e.target.files[0])} />
                                </div>
                                <div className="pb-1 pt-2">
                                    <label className='text-left text-gray-400 ps-2' htmlFor="">Voter Id card</label>
                                    <input className="block w-full p-4 text-lg rounded-sm bg-black mt-2" value={voterId} type="file" name="mobile" id="mobile" placeholder="Mobile"
                                        onChange={(e) => setVoterId(e.target.files[0])} />
                                </div>
                            </div>
                        </div>
                        <div className="z-20 mt-8 pt-8">
                            <div className="sm:w-2/3 w-full lg:px-0 mt-8 pt-8">
                                <div className="pb-1 pt-4">
                                    <label className='text-left text-gray-400 ps-2' htmlFor="">Mobile <span className='text-red-600'>*</span></label>
                                    <input className="mt-2 block w-full p-4 text-lg rounded-sm bg-black" value={mobile} type="number" name="mobile" id="mobile" placeholder="Mobile"
                                        onChange={(e) => setMobile(e.target.value)} />
                                </div>
                                <div className="pb-1 pt-2">
                                    <label className='text-left text-gray-400 ps-2' htmlFor="">Address <span className='text-red-600'>*</span></label>
                                    <input className="mt-2 block w-full p-4 text-lg rounded-sm bg-black" value={address} type="text" name="address" id="address" placeholder="Address"
                                        onChange={(e) => setAddress(e.target.value)} />
                                </div>
                                <div className="pb-1 pt-2">
                                    <label className='text-left text-gray-400 ps-2' htmlFor="">License card</label>
                                    <input className="block w-full p-4 text-lg rounded-sm bg-black mt-2" value={license} type="file" name="mobile" id="mobile" placeholder="Adhar"
                                        onChange={(e) => setLicence(e.target.files[0])} />
                                </div>
                                <div className="pb-1 pt-2">
                                    <label className='text-left text-gray-400 ps-2' htmlFor="">Password <span className='text-red-600'>*</span></label>
                                    <input className="block w-full p-4 text-lg rounded-sm bg-black mt-2" value={password} type="password" name="password" id="password" placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="px-4 pb-2 pt-2">
                                    <button onClick={sendOtp} className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none" type='button'>sign up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </>
    )
}

export default SignUp
