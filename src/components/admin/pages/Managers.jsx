import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { adminUrl } from '../../../API/Api'
import LayoutAdmin from '../LayoutAdmin'
import Navbar from '../Navbar'
function Managers() {
  const [manager, setManager] = useState()
  const [block, setBlock] = useState(false)
  const [loading, setLoading] = useState(true)
  const [showDetails, setShowDetails] = useState(false)
  const [managerDetails, setManagerDetails] = useState()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  const Block = async (id) => {
    const response = await axios.post(`${adminUrl}block-manager?managerId=${id}`, { block })
    if (response.data.block) {
      toast.success(response.data.message)
      setBlock(true)
    } else if (response.data.unBlock) {
      toast.success(response.data.message)
      setBlock(false)
    } else {
      console.log('error');
    }
  }

  const viewDetails = async (id) => {
    setShowDetails(true)
    await axios.post(`${adminUrl}managers${id}`).then((response) => {
      console.log(response.data.data);
      setManagerDetails(response.data.data)
    })
  }

  useEffect(() => {
    const managers = async () => {
      try {
        await axios.get(`${adminUrl}managers`).then((response) => {
          const manager = response.data
          setManager(manager)
        })
      } catch (error) {
        console.log(error);
      }
    }
    managers()
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
              {showDetails ? (
                <div>
                  <body class="bg-gray-100">
                    <header class="bg-gray-800 text-white py-4">
                      <div class="container mx-auto px-4">
                        <h1 class="text-2xl font-bold">Details Page</h1>
                      </div>
                    </header>
                    <main class="container mx-auto mt-8 px-4">
                      <section class="bg-white shadow-lg rounded-lg p-8">
                        <h2 class="text-xl font-bold mb-4">Manager Details</h2>
                        <p>Manager Name : {managerDetails?.name}</p>
                        <p className='mb-4'>Company Name : {managerDetails?.company_name}</p>
                        <h3 className='text-lg font-semibold mt-4'>1. Services</h3>
                        <h4 className='text-base font-semibold mt-4'>Catering service</h4>
                        <p>Leader of worker : sufiyan</p>
                        <p>Mobile Number : 9072065394</p>
                        <p>Total workers : 30 workers</p>
                        <h5 className='text-sm font-medium mt-4'>Starters</h5>
                        <p>Spicy lemon</p>
                        <p>got in soup</p>
                        <h3 className='text-lg font-semibold mt-4'>2. Stage service</h3>
                      </section>
                    </main>
                  </body>
                </div>
              ) : (

                <div class="overflow-x-auto">
                  <div class="inline-block min-w-full">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <h1 className='font-bold text-xl mb-5'>Managers List</h1>
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
                              Access
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Details
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                          {manager.map((data, index) => (
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
                              <td class="px-6 py-4 whitespace-nowrap">
                                {block == false ? (
                                  <button onClick={() => Block(data._id)} value={block} class="custom-select font-weight-bold bg-transparent text-info border-0" name="orderStatus">
                                    Block
                                  </button>
                                ) : (
                                  <button onClick={() => Block(data._id)} value={block} class="custom-select font-weight-bold bg-transparent text-info border-0" name="orderStatus">
                                    Un Block
                                  </button>
                                )}
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <a onClick={() => viewDetails(data._id)} class="text-indigo-600 hover:text-indigo-900">View</a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </>
          )
        }
      </LayoutAdmin>
    </div>
  )
}

export default Managers
