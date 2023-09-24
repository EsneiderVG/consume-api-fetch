import React from 'react'
import PostPage from '../../components/PostPage';
import {loadData} from '../data/datafetch';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar'



async function FetchData() {
    const dataPosted = await loadData();    

    return (
        <>
            <div className='flex flex-col gap-6 my-6'>
                {dataPosted.map((post: any) => (
                    <PostPage post={post} uwu="componentOne"/>
                ))}

            </div>
         
        </>
    )
}

export default FetchData