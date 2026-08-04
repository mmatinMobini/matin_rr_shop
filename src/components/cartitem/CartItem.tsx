function CartItem() {
  return (
    <div className="bg-white rounded-3xl shadow-[0_10px_40px_-8px_rgba(43,36,32,0.1)] divide-y divide-[#ede6dc]">
      
      {/* آیتم ۱ */}
      <div className="p-4 sm:p-6 flex gap-4 sm:gap-6">
        <div className="shrink-0 w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-[#f7f3ee]">
          <img className="w-full h-full object-cover" src="https://studiomani.ir/wp-content/uploads/2025/04/facial-cleanser-photography-03.webp" alt="شوینده صورت" />
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-semibold text-[#2b2420] text-sm sm:text-base truncate">شوینده صورت</h3>
              <p className="text-xs sm:text-sm text-[#8a7f73] mt-1">سایز: ۱۵۰ میلی‌لیتر · رنگ: بژ</p>
            </div>
            <button className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full text-[#8a7f73] hover:text-red-600 hover:bg-red-50 active:scale-90 transition-all duration-200" aria-label="حذف">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
              </svg>
            </button>
          </div>
          <div className="flex items-end justify-between mt-3 sm:mt-0">
            <div className="flex items-center gap-1 bg-[#f7f3ee] rounded-full p-1">
              <button className="w-9 h-9 rounded-full flex items-center justify-center text-[#2b2420] hover:bg-white hover:shadow-sm active:scale-90 transition-all duration-200">−</button>
              <span className="w-7 text-center text-sm font-medium text-[#2b2420]">1</span>
              <button className="w-9 h-9 rounded-full flex items-center justify-center text-[#2b2420] hover:bg-white hover:shadow-sm active:scale-90 transition-all duration-200">+</button>
            </div>
            <span className="font-bold text-[#2b2420] text-sm sm:text-base">$55.00</span>
          </div>
        </div>
      </div>

      {/* آیتم ۲ */}
      <div className="p-4 sm:p-6 flex gap-4 sm:gap-6">
        <div className="shrink-0 w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-[#f7f3ee]">
          <img className="w-full h-full object-cover" src="https://studiomani.ir/wp-content/uploads/2025/04/facial-cleanser-photography-03.webp" alt="کرم مرطوب‌کننده" />
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-semibold text-[#2b2420] text-sm sm:text-base truncate">کرم مرطوب‌کننده</h3>
              <p className="text-xs sm:text-sm text-[#8a7f73] mt-1">سایز: ۵۰ گرم · رنگ: سفید</p>
            </div>
            <button className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full text-[#8a7f73] hover:text-red-600 hover:bg-red-50 active:scale-90 transition-all duration-200" aria-label="حذف">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
              </svg>
            </button>
          </div>
          <div className="flex items-end justify-between mt-3 sm:mt-0">
            <div className="flex items-center gap-1 bg-[#f7f3ee] rounded-full p-1">
              <button className="w-9 h-9 rounded-full flex items-center justify-center text-[#2b2420] hover:bg-white hover:shadow-sm active:scale-90 transition-all duration-200">−</button>
              <span className="w-7 text-center text-sm font-medium text-[#2b2420]">1</span>
              <button className="w-9 h-9 rounded-full flex items-center justify-center text-[#2b2420] hover:bg-white hover:shadow-sm active:scale-90 transition-all duration-200">+</button>
            </div>
            <span className="font-bold text-[#2b2420] text-sm sm:text-base">$68.00</span>
          </div>
        </div>
      </div>

      {/* آیتم ۳ */}
      <div className="p-4 sm:p-6 flex gap-4 sm:gap-6">
        <div className="shrink-0 w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-[#f7f3ee]">
          <img className="w-full h-full object-cover" src="https://studiomani.ir/wp-content/uploads/2025/04/facial-cleanser-photography-03.webp" alt="سرم ویتامین C" />
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-semibold text-[#2b2420] text-sm sm:text-base truncate">سرم ویتامین C</h3>
              <p className="text-xs sm:text-sm text-[#8a7f73] mt-1">سایز: ۳۰ میلی‌لیتر · رنگ: زرد</p>
            </div>
            <button className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full text-[#8a7f73] hover:text-red-600 hover:bg-red-50 active:scale-90 transition-all duration-200" aria-label="حذف">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
              </svg>
            </button>
          </div>
          <div className="flex items-end justify-between mt-3 sm:mt-0">
            <div className="flex items-center gap-1 bg-[#f7f3ee] rounded-full p-1">
              <button className="w-9 h-9 rounded-full flex items-center justify-center text-[#2b2420] hover:bg-white hover:shadow-sm active:scale-90 transition-all duration-200">−</button>
              <span className="w-7 text-center text-sm font-medium text-[#2b2420]">1</span>
              <button className="w-9 h-9 rounded-full flex items-center justify-center text-[#2b2420] hover:bg-white hover:shadow-sm active:scale-90 transition-all duration-200">+</button>
            </div>
            <span className="font-bold text-[#2b2420] text-sm sm:text-base">$42.00</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartItem