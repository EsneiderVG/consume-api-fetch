import React from 'react'

export async function loadData(){
    const rest = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await rest.json();

    await new Promise((resolve) => {
        setTimeout(resolve, 3000)
    })

    return data;


}


