import React from 'react'

function Layout() {
  return (
    <div className='main'>
        <div className='d-flex layout'>
            <div className='sidebar'>
                <div className='sidebar-header'>
                    <h1 className='logo'>Hello</h1>
                </div>
                <div className='menu'>
                                <div className={'d-flex menu-item'}>
                                   {/* <i className= {menu.icon}></i> */}
                                   {/* {!collapsed && <Link to={menu.path}>{menu.name}</Link>} */}
                                </div>
                    <div className={'d-flex menu-item'}>
                         <i className= 'ri-logout-box-line'></i> 
                         {/* {!collapsed && <Link to='/login'>Logout</Link>} */}
                    </div>
                </div>
            </div>
            <div className='content'>
                <div className='header'>
                         <i
                            className="ri-menu-2-fill header-action-icon">
                        </i>
                        <i
                            className="ri-close-fill header-action-icon">
                        </i>
                    <div className='d-flex align-items-center px-4'>
                        <i className="ri-notification-line header-action-icon px-3"></i> 
                         {/* <Link className='anchor' to='/profile'>{user ? user.name : ''}</Link> */}
                    </div>
                </div>
                <div className='body'>
                   {/* {children} */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout