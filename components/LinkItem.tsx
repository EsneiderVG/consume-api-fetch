import React from 'react'
import Link from 'next/link'

function LinkItem({icon, content, path}: any) {
  return (
    <Link href={path} className='flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
        <span className='h-6 w-6 flex items-center text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white text-xl'>{icon}</span>
        <span className='px-3 flex-1 whitespace-nowrap text-lg'>{content}</span>
        
    </Link>
  ) 
}

export default LinkItem