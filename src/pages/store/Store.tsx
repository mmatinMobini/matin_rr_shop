import React from 'react'
import ProductItem from '../../components/productitem/ProductItem'
import Container from '../../components/container/Container'
import { Link } from 'react-router-dom'

function Store() {
  return (

    <Container>
      <div className="py-10">

        {/* هدر بخش محصولات */}
        <div className="text-center mb-10">
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-medium px-3 py-1 rounded-full mb-3">
            فروشگاه ما
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            جدیدترین محصولات
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            مجموعه‌ای منتخب از بهترین و تازه‌ترین محصولات که با کیفیت بالا و قیمت مناسب برای شما آماده شده‌اند.
          </p>
        </div>

        {/* گرید محصولات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Link to={`/Product/${1}`} > 
          <ProductItem />
          </Link>
           <Link to={`/Product/${2}`} > 
          <ProductItem />
          </Link>
           <Link to={`/Product/${3}`} > 
          <ProductItem />
          </Link>
           <Link to={`/Product/${4}`} > 
          <ProductItem />
          </Link>
           
          
        </div>

      </div>
    </Container>
  )
}

  


export default Store