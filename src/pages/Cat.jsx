import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { product } from '../data/data'



function Cat() {
    let {cid}=useParams()
    let cc=product.filter((a)=>a.category==cid)
  return (
    <div className='container mx-auto py-11 my-11'>
        <h1 className='text-center text-[30px] py-7'>
            {cid}
        </h1>
        <div className="flex flex-wrap gap-4">
            {cc.map((a, i)=>(
                <div key={i} className="w-[300px] shadow">
                    <img className="w-full h-48" src={a.thumbnail} alt="" />
                    <div className='p-4 flex justify-between'>
                    <h2 className="text-xl font-bold mb-2">{a.title}</h2>
                    <Link className="text-xl font-bold mb-2 bg-[#F9942A] p-2 rounded hover:underline" to={`/details/${a.id}`}>Read More</Link>
                    </div>
                </div>
            ))}
            </div>
    </div>
  )
}

export default Cat