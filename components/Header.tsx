'use client';

import { Avatar, Badge, Dropdown, Navbar, Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import Link from 'next/link'



export default function Header() {
  return (
    <>
    
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="https://seeklogo.com/images/R/recycling-logo-FD00AE4529-seeklogo.com.png"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Re:cycle
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 list-none items-center">

        <Navbar.Link href="#" className='text-lg list-none'>
          <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="https://www.veryicon.com/download/png/miscellaneous/ionicons-1/ios-notifications-5?s=256"
        />
        </Navbar.Link>

        <Dropdown
          inline
          label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Neider Caceres
            </span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <div className="flex flex-col py-2 px-4 gap-1">
            <div className='cursor-pointer'>
              Dashboard
            </div>
            <div className='cursor-pointer'>
              Settings
            </div>
            <div className='cursor-pointer'>
              Earnings
            </div>
            <Dropdown.Divider />
            <div className='cursor-pointer'>
              Sign out
            </div>
          </div>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        
        <Link href="/" className='text-lg'>
          <p>
            Home
          </p>
        </Link>
        

          <Link href="/post" className='text-lg' >
            <p>
              Post
            </p>
          </Link>
        <Navbar.Link href="#" className='text-lg'>
          Notifications
        </Navbar.Link>
      
        
      </Navbar.Collapse>
    </Navbar>
    
    
    </>
    
  )
}