import React from 'react'

function ProductItem() {
  return (
    <div className='shadow border-amber-50 rounded pb-3'>

    <img className='rounded-t ' src="https://studiomani.ir/wp-content/uploads/2025/04/facial-cleanser-photography-03.webp" alt="" />
    <div className ="flex justify-between flex-row-reverse p-4 mt-3">

        <h1>title</h1>
        <span> 55$ </span>
    </div>
    <div className=' px-4'>

    <p className='line-clamp-2'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia ratione delectus. Omnis quos alias accusamus similique a cumque facilis rerum dolores vel, incidunt, nesciunt necessitatibus. Repellendus eos minima iste.
    </p>

    </div>
    </div>
  )
}

export default ProductItem