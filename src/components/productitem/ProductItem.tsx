import React from 'react'

function ProductItem() {
  return (

    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-amber-50 overflow-hidden transition-all duration-300 hover:-translate-y-1">
      
      {/* تصویر */}
      <div className="relative overflow-hidden aspect-square">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src="https://studiomani.ir/wp-content/uploads/2025/04/facial-cleanser-photography-03.webp"
          alt="شوینده"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-medium text-amber-700 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          جدید
        </span>
      </div>

      {/* اطلاعات */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-gray-800 text-base line-clamp-1">
            شوینده صورت
          </h3>
          <span className="font-bold text-amber-600 whitespace-nowrap">
            $55
          </span>
        </div>

        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque sequi nemo nostrum eos veritatis quaerat veniam, inventore ex pariatur, nihil modi assumenda perferendis architecto vero? Debitis voluptatum voluptates delectus?
        </p>

        {/* <button className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-medium py-2.5 rounded-xl transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          افزودن به سبد خرید
        </button> */}
      </div>
    </div>
  )
}

export default ProductItem