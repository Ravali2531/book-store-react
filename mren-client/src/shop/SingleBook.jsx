import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const {_id, booktitle} = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <h2>{booktitle}</h2>
    </div>
  )
}

export default SingleBook