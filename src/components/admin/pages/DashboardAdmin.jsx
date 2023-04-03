import React from 'react'
import LayoutAdmin from '../LayoutAdmin'
import Navbar from '../Navbar'

function DashboardAdmin() {
  return (
    <div>
      <Navbar/>
      <LayoutAdmin>
        <h1>Hello Admin Page</h1>
      </LayoutAdmin>
    </div>
  )
}

export default DashboardAdmin