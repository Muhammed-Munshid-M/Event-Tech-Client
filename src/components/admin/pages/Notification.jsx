import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { adminUrl } from '../../../API/Api'
import LayoutAdmin from '../LayoutAdmin'
import Navbar from '../Navbar'
function Notification() {
  const [manager, setManager] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

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
              <div class="overflow-x-auto">
                <div class="inline-block min-w-full">
                  <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <h1 className='font-bold text-xl mb-5'>Notifications</h1>
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead class="bg-gray-50">
                        <tr>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                          </th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Mobile
                          </th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Permission
                          </th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                        {manager.map((data,index) => (
                          <tr class="hover:bg-gray-100 transition duration-300">
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="flex-shrink-0 h-10 w-10">
                                  <img class="h-10 w-10 rounded-full" src="https://via.placeholder.com/150" alt="" />
                                </div>
                                <div class="ml-4">
                                  <div key={index} class="text-sm font-medium text-gray-900">
                                    {data.name}
                                  </div>
                                  <div key={index} class="text-sm text-gray-500">
                                    {data.email}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div key={index} class="text-sm text-gray-900">{data.email}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div key={index} class="text-sm text-gray-900">{data.mobile}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <select name="" id="" class="py-1 px-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value="">Pending</option>
                                <option value="">Approval</option>
                                <option value="">Reject</option>
                              </select>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <a href="#" class="text-indigo-600 hover:text-indigo-900">View</a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          )
        }
      </LayoutAdmin>
    </div>
  )
}

export default Notification
