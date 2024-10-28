import React from 'react'
import TopNavigation from './Layouts/TopNavigation';
import SideNavigation from './Layouts/SideNavigation';
import MainBox from './Layouts/MainBox'

const Layouts = () => {
  return (
    <div className='layout'>
        <div className='topNavbar'>
            <TopNavigation/>
            </div>
        <div className='sideNavigation'>
            <SideNavigation/>
            </div>
        <div className='mainBox'>
            <MainBox/>
            </div>
    </div>
  )
}

export default Layouts