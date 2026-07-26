import React from 'react'
import ProductItem from '../../components/productitem/ProductItem'
import Container from '../../components/container/Container'

function Store() {
  return (


        <Container >
          <>
      <h1 className='text-right mt-2.5 '> جدید ترین محصولات </h1>
    <div className=' grid grid-cols-4 gap-5'> 
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  </>
        </Container>
  )
}

export default Store