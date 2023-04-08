import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { adminUrl } from '../../../API/Api'
import LayoutAdmin from '../LayoutAdmin'
import Navbar from '../Navbar'
function Notification() {
  const [manager, setManager] = useState()
  const [block, setBlock] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[])

  const Block = async (id) => {
    const response = await axios.post(`${adminUrl}block?managerId=${id}`,{block})
    if (response.data.block) {
      toast.success(response.data.message)
      setBlock(true)
    } else if(response.data.unBlock) {
      toast.success(response.data.message)
      setBlock(false)
    } else {
      console.log('error');
    }
  }

  useEffect(() => {
    const notify = async () => {
      try {
        await axios.get(`${adminUrl}notify`).then((response) => {
          const manager = response.data
          setManager(manager)
        })
      } catch (error) {
        console.log(error);
      }
    }
    notify()
  }, [])
  return (
    <div>
      <Navbar />
      <LayoutAdmin>
      {
        loading ? (
          <div>Please wait...</div>
        ) : (
          <>
        <div>

          <h1 className='px-6 pb-5 font-medium text-lg'>ManagerApproval List</h1>
          <table class="min-w-full divide-y divide-gray-200" />
          <thead>
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mobile
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acesss
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Permission
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Details 
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200" />
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              {manager.map((data) => (
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="https://via.placeholder.com/150" alt="" />
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      {data.name}
                    </div>
                    <div class="text-sm text-gray-500">
                      {data.email}
                    </div>
                  </div>
                </div>
              ))}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              {manager.map((data) => (
                <div class="text-sm text-gray-900">{data.email}</div>
              ))}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              {manager.map((data) => (
                <div class="text-sm text-gray-900">{data.mobile}</div>
              ))}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                {block == false ? (
              manager.map((data) => (
                <button onClick={()=>Block(data._id)} value={block}
                  class=" custom-select font-weight-bold bg-transparent text-info border-0"
                  name="orderStatus">
                  Block
                </button>
              ))
              ):(
                manager.map((data) => (
                  <button onClick={()=>Block(data._id)} value={block}
                    class=" custom-select font-weight-bold bg-transparent text-info border-0"
                    name="orderStatus">
                    Un Block
                  </button>
                ))
              )}
              
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <a href="#" class="text-indigo-600 hover:text-indigo-900">View</a>
            </td>
          </tr>
        </div>
          </>
        )
      }
      </LayoutAdmin>
      
    </div>
  )
}

export default Notification
