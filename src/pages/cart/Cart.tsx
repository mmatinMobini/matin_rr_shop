import Container from '../../components/container/Container'
import CartItem from '../../components/cartitem/CartItem'

function Cart() {
  return (
    <div className="overflow-x-hidden">
      <Container>
        <div className="py-8 sm:py-12 lg:py-16 pb-28 lg:pb-16">

          {/* عنوان اصلی */}
          <div className="mb-8 lg:mb-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#2b2420]">سبد خرید</h1>
            <p className="text-sm text-[#8a7f73] mt-1">۳ کالا در سبد شما</p>
          </div>

          {/* چیدمان اصلی صفحه */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

            {/* لیست آیتم‌ها (۸ ستون) */}
            <div className="lg:col-span-8 lg:order-2">
              <CartItem />
            </div>

            {/* خلاصه سفارش (۴ ستون) */}
            <div className="lg:col-span-4 lg:order-1">
              <div className="lg:sticky lg:top-24 bg-white rounded-3xl shadow-[0_10px_40px_-8px_rgba(43,36,32,0.1)] p-5 sm:p-6">
                <h2 className="text-lg font-bold text-[#2b2420] mb-5">خلاصه سفارش</h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-[#6b6259]">
                    <span>جمع کل کالاها</span>
                    <span className="text-[#2b2420] font-medium">$165.00</span>
                  </div>
                  <div className="flex justify-between text-[#6b6259]">
                    <span>تخفیف</span>
                    <span className="text-[#9a4b1f] font-medium">−$16.50</span>
                  </div>
                  <div className="flex justify-between text-[#6b6259]">
                    <span>هزینه ارسال</span>
                    <span className="text-[#2b2420] font-medium">$8.00</span>
                  </div>
                  <div className="flex justify-between text-[#6b6259]">
                    <span>مالیات</span>
                    <span className="text-[#2b2420] font-medium">$4.95</span>
                  </div>
                </div>

                <div className="h-px bg-[#ede6dc] my-5" />

                <div className="flex justify-between items-baseline mb-6 lg:mb-6">
                  <span className="text-sm font-medium text-[#2b2420]">مبلغ نهایی</span>
                  <span className="text-2xl font-bold text-[#2b2420]">$161.45</span>
                </div>

                {/* دکمه خلاصه سفارش - فقط در دسکتاپ نمایش داده می‌شود */}
                <button className="hidden lg:flex w-full py-3.5 rounded-2xl bg-[#9a4b1f] hover:bg-[#7c3a15] active:scale-[0.98] text-white text-sm font-semibold shadow-[0_8px_20px_-6px_rgba(154,75,31,0.5)] transition-all duration-200 items-center justify-center gap-2">
                  تکمیل خرید
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5" />
                    <path d="M12 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </Container>

      {/* نوار چسبان پایین - فقط در موبایل و تبلت نمایش داده می‌شود */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#ede6dc] px-4 py-3 flex items-center gap-3 shadow-[0_-8px_24px_-8px_rgba(43,36,32,0.1)]">
        <div className="leading-tight shrink-0">
          <p className="text-[11px] text-[#8a7f73]">مبلغ نهایی</p>
          <p className="text-lg font-bold text-[#2b2420]">$161.45</p>
        </div>
        <button className="flex-1 h-12 flex items-center justify-center gap-2 rounded-2xl bg-[#9a4b1f] active:scale-[0.98] text-white text-sm font-semibold shadow-[0_8px_20px_-6px_rgba(154,75,31,0.5)] transition-transform duration-200">
          تکمیل خرید
        </button>
      </div>
    </div>
  )
}

export default Cart