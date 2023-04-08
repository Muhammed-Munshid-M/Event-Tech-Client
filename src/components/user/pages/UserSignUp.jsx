import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import { Toaster, toast } from 'react-hot-toast'
import { auth } from '../../../firebase/config'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { userUrl } from '../../../API/Api'
import axios from 'axios'

function UserSignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const userData = { name, email, mobile, password }

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
        // try {
        await axios.post(`${userUrl}signUp`, userData)
        .then((response) => {
                console.log('Hiiiiiiiiii');
                if (response.data.success) {
                    onCaptchVerify()
                    const formatPhone = '+91' + mobile
                    const appVerifier = window.recaptchaVerifier;
                    console.log(appVerifier);
                    signInWithPhoneNumber(auth, formatPhone, appVerifier)
                        .then((confirmationResult) => {
                            window.confirmationResult = confirmationResult;
                            toast(response.data.message)
                            navigate('/otp')
                        }).catch((error) => {
                            console.log(error);
                        })
                } else if (response.data.exist) {
                    toast(response.data.message)
                    navigate('/')
                } else {
                    toast.error('something error')
                    navigate('/signUp')
                }
            })
            .catch((err) => {
                console.log(err);
            })
        // } catch (error) {
        //     console.log(error)
        //     toast.error('something error')
        // }
    }
    return (
        <div>
            <Navbar />
            <body className="h-screen overflow-hidden flex items-center justify-center my-20">
            <div id='recaptcha-container'></div>
                <section className="min-h-screen flex items-stretch text-white w-3/4">
                <Toaster toastOptions={{ duration: 4000 }} />
                    <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center bg-[url('/dec4.png')]">
                        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                    </div>
                    <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-slate-950">
                        <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center">
                            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                        </div>
                        <div className="w-full py-6 z-20">
                            <h1 className="my-6 w-auto h-7 sm:h-8 inline-flex font-semibold text-3xl">Hai, Welcome
                            </h1>
                            <form onSubmit={sendOtp} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                                <div className="text-left text-gray-400">
                                    <p>Just signup</p>
                                </div>
                                <div className="pb-2 pt-4">
                                    <input type="text" name="name" id="name" placeholder="Name" value={name} className="block w-full p-4 text-lg rounded-sm bg-black"
                                        onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="pb-2 pt-4">
                                    <input type="email" name="email" id="email" placeholder="Email" value={email} className="block w-full p-4 text-lg rounded-sm bg-black"
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="pb-2 pt-4">
                                    <input className="block w-full p-4 text-lg rounded-sm bg-black" value={mobile} type="number" name="mobile" id="mobile" placeholder="Mobile"
                                        onChange={(e) => setMobile(e.target.value)} />
                                </div>
                                <div className="pb-2 pt-4">
                                    <input className="block w-full p-4 text-lg rounded-sm bg-black" value={password} type="password" name="password" id="password" placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="px-4 pb-2 pt-4">
                                    <button className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none" type='submit'>sign up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </body>
        </div>
    )
}

export default UserSignUp
