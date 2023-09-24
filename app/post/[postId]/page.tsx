import React from 'react'
import PostPage from '@/components/PostPage'
import Posts from '../page'
import {Suspense} from 'react'


export async function loadData(id: any){
    const rest = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await rest.json();
    return data;

}


async function filterPost({params}: any) {

  const post = await loadData(params.postId);
  return (

    <div className='flex flex-col'>
      <PostPage post={post} uwu="componentOne"/>
    
      <hr />
      <h3>Otras publicaciones:</h3>

      <Suspense fallback={<div>Loading...</div>}>
        <Posts />
      </Suspense>

    </div>


    
  )
}

export default filterPost