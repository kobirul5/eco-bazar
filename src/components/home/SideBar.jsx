import React from 'react'
import AllCategory from './SideBarComponents/AllCategory'
import Price from './SideBarComponents/Price'
import Rating from './SideBarComponents/Rating'
import PopularTag from './SideBarComponents/PopularTag'
import Discount from './SideBarComponents/Discount'

export default function SideBar() {
  return (
    <div className='p-5'>
        <AllCategory/>
        <div className="divider"></div>
        <Price/>
        <div className="divider"></div>
        <Rating/>
        <div className="divider"></div>
        <PopularTag/>
        <div className="divider"></div>
        <Discount/>
    </div>
  )
}
