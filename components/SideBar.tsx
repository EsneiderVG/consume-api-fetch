"use client";

import React from 'react'
import {Badge, Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import Link from 'next/link'
import LinkItem from './LinkItem';

function SideBar() {
  return (
    <Sidebar className='w-48 inline-block' aria-label="Sidebar with call to action button example">
      <Sidebar.Items className='w-48'>
        <Sidebar.ItemGroup>

           
          <LinkItem icon={<HiChartPie/>} content="Home" path="/" />
          <LinkItem icon={<HiViewBoards/>} content="Post" path="/post" />

          
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      <Sidebar.CTA>
        <div className="mb-3 flex items-center">
          <Badge color="warning">
            Beta
          </Badge>
          <button
            aria-label="Close"
            className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
            type="button"
          >
            {/* <SeeSourceCodeForSVG /> */}
          </button>
        </div>
        <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iure dolores eaque 
          </p>
        </div>
        <a
          className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
          href="#"
        >
          <p>
            Turn new navigation off
          </p>
        </a>
      </Sidebar.CTA>
    </Sidebar>
 
  )
}

export default SideBar