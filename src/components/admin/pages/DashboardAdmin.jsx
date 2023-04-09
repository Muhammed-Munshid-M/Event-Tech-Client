import React, { useState } from 'react'
// import LayoutAdmin from '../LayoutAdmin'
import Navbar from '../Navbar'
import Sidebar from '../SideBar'
import LayoutAdmin from '../LayoutAdmin';

function DashboardAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <LayoutAdmin>
        <h1>Hello Admin</h1>
      </LayoutAdmin>
      {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
    </div>
  )
}

export default DashboardAdmin