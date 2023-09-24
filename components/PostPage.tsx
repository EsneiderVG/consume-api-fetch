'use client'
import React from "react";
import Link from 'next/link'


function PostPage({post, uwu}: any) {
  return (
    <div className="h-fit p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" key={post.id}>
        <p className="text-2xl font-semibold">{post.title}</p>
        <p>{post.body}</p>
        <p className="text-sm">{uwu}</p>
        <Link href={`/post/${post.id}`} className="w-fit block focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" >Ver post</Link>
        <br />
    </div>
  )
}

export default PostPage;
