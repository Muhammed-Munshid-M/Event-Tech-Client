import axios from 'axios';
import React, { useEffect } from 'react'
import Layout from '../Layout'

function Dashboard() {
    const getData = async () => {
        try {
            const {data} =await axios.post('/get-manager-id',{ token: localStorage.getItem('token') },
            {
                headers :{
                  Authorization : `Bearer ${localStorage.getItem('token')}`
                },
            })
            console.log('data'+data);
          } catch (error) {
            console.log(error);
          }
    }

    useEffect(()=>{
        getData()
    })

    return (
        <div>
            <Layout>
                <h1>Hello</h1>
            </Layout>
        </div>
    )
}

export default Dashboard