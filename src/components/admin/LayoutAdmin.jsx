import React from 'react'
import { useNavigate } from 'react-router-dom'

function LayoutAdmin({ children }) {
    const navigate = useNavigate()
    return (
        <div>
            <div class="flex h-screen bg-gray-100">
                <div class="w-64 bg-gray-800">
                    <div class="text-white font-bold text-xl p-8">Admin Panel</div>
                    <ul class="list-none p-0">
                        <li class="py-2 px-8 hover:bg-gray-700 cursor-pointer">Dashboard</li>
                        <li class="py-2 px-8 hover:bg-gray-700 cursor-pointer">Users</li>
                        <li class="py-2 px-8 hover:bg-gray-700 cursor-pointer">Products</li>
                        <li class="py-2 px-8 hover:bg-gray-700 cursor-pointer" onClick={()=>{
                        // localStorage.clear()
                        navigate('/admin')
                    }}>Logout</li>
                    </ul>
                </div>
                <div class="flex-1 p-10">
                    {children}
                </div>
            </div>

        </div>
    )
}

export default LayoutAdmin