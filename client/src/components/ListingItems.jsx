import React from 'react'
import { Link } from 'react-router-dom'
import { MdLocationOn } from 'react-icons/md'

function ListingItems({list}) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
        <Link to={`/listing/${list._id}`}>
        <img  src={list.imageUrls[0]}  className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transiction-scale duration-300' />
         <div className="p-3">
           <p className='text-lg font-semibold text-slate-700 truncate'>{list.name}</p>

           <div className="flex items-center gap-1">
            <MdLocationOn className='h-4 w-4 text-green-700'/>
            <p className="text-sm text-gray-600 truncate w-full">{list.address}</p>
           </div>
           <p className='text-sm text-gray-600 line-clamp-2'>
            {list.description}
           </p>

           <p className="text-slate-500 mt-2 font-semibold">₹ 
           {list.offer && typeof list.discountPrice === 'number' 
    ? list.discountPrice.toLocaleString('en-US')
    : typeof list.regularPrice === 'number' 
        ? list.regularPrice.toLocaleString('en-US')
        : "Price not available"
  }
        {list.type === 'rent' && ' /month'}

           </p>
           <div className="text-slate-700 flex gap-4">
            <div className="font-bold text-xs">
                {list.bedrooms > 1 ? `${list.bedrooms} beds  ` : `${list.bedrooms}  bed`}
            </div>

            <div className="font-bold text-xs">
                {list.bathrooms > 1 ? `${list.bathrooms} baths` : `${list.bathrooms} baths`}
            </div>
           </div>
         </div>
        </Link>
    </div>
  )
}

export default ListingItems