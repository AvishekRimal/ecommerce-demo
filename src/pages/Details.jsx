import React from 'react'
import { useParams } from 'react-router-dom'
import { product } from '../data/data'

function Details() {
    let {id}=useParams()
    let dd=product.find((a)=>a.id==id)
  return (
    <div className="container my-[70px] mx-auto">
        <h2  className="text-center text-[50px]">Details</h2>
        <div className="flex justify-center">
        <div><img src={dd.thumbnail} alt="" /></div>
        </div>
        <div className="text-center py-11">
                <h2 className='text-3xl'>{dd.title}</h2>
                <p>{dd.description}</p>
            </div>
    </div>
  )
}

export default Details