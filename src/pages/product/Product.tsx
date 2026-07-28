import Container from '../../components/container/Container'

function Product() {
  return (
    <>
      <Container>
        <div className="py-6 sm:py-10 lg:py-14 pb-28 lg:pb-14">

          {/* Breadcrumb */}
          {/* <nav className="text-xs text-[#8a7f73] mb-8 flex items-center gap-2">
            <span className="hover:text-[#9a4b1f] cursor-pointer transition-colors duration-200">فروشگاه</span>
            <span>/</span>
            <span className="hover:text-[#9a4b1f] cursor-pointer transition-colors duration-200">مراقبت پوستی</span>
            <span>/</span>
            <span className="text-[#2b2420]">شوینده صورت</span>
          </nav> */}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

            {/* تصویر محصول */}
            <div className="lg:col-span-7">
              <div className="relative">
                {/* پس‌زمینه نور/درخشندگی — سیگنیچر صفحه */}
                <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-amber-100/70 via-orange-50/40 to-transparent blur-2xl -z-10" />

                <div className="relative rounded-[2rem] overflow-hidden bg-white shadow-[0_10px_40px_-8px_rgba(43,36,32,0.15)] aspect-square">
                  <img
                    className="w-full h-full object-cover"
                    src="https://studiomani.ir/wp-content/uploads/2025/04/facial-cleanser-photography-03.webp"
                    alt="Product"
                  />
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[11px] font-medium text-[#9a4b1f] px-3 py-1.5 rounded-full shadow-sm">
                    جدید
                  </span>
                </div>

                {/* بج امتیاز شناور — نیمه روی لبه تصویر */}
                <div className="absolute -bottom-5 right-6 bg-white rounded-2xl shadow-[0_8px_24px_-4px_rgba(43,36,32,0.18)] px-4 py-3 flex items-center gap-2">
                  <svg className="w-5 h-5 fill-current text-[#b8860b]" viewBox="0 0 20 20">
                    <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                  </svg>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-[#2b2420]">4.8</p>
                    <p className="text-[11px] text-[#8a7f73]">۱۲۸ نظر</p>
                  </div>
                </div>
              </div>
            </div>

            {/* اطلاعات محصول */}
            <div className="lg:col-span-5 flex flex-col pt-6 lg:pt-0">

              <span className="text-xs font-medium text-[#9a4b1f] uppercase tracking-wider mb-3">
                مراقبت پوستی
              </span>

              <h1 className="text-2xl sm:text-3xl font-bold text-[#2b2420] leading-snug">
                شوینده صورت
              </h1>

              <p className="mt-4 text-sm sm:text-base text-[#6b6259] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quo cupiditate. Sed accusantium, eveniet aliquid maiores iure aperiam aut voluptates.
              </p>

              <div className="flex items-baseline gap-2 mt-6">
                <span className="text-3xl sm:text-4xl font-bold text-[#2b2420]">$55.00</span>
                <span className="text-sm text-[#8a7f73] line-through">$68.00</span>
              </div>

              {/* بج‌های اعتماد */}
              <div className="flex flex-wrap gap-2 mt-5">
                {['ارسال رایگان', 'ضمانت اصالت کالا', 'بازگشت ۷ روزه'].map((item) => (
                  <span
                    key={item}
                    className="text-xs text-[#6b6259] bg-[#f7f3ee] border border-[#ede6dc] rounded-full px-3 py-1.5"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="h-px bg-[#ede6dc] my-7" />

              {/* انتخاب تعداد */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#2b2420]">تعداد</span>

<div className="flex items-center gap-1 bg-[#f7f3ee] rounded-full p-1">
                  <button className="w-9 h-9 rounded-full flex items-center justify-center text-[#2b2420] hover:bg-white hover:shadow-sm transition-all duration-200">
                    −
                  </button>
                  <span className="w-8 text-center text-sm font-medium text-[#2b2420]">1</span>
                  <button className="w-9 h-9 rounded-full flex items-center justify-center text-[#2b2420] hover:bg-white hover:shadow-sm transition-all duration-200">
                    +
                  </button>
                </div>
              </div>

              {/* دکمه‌های خرید — فقط دسکتاپ، در موبایل نوار چسبان پایین جایگزین می‌شود */}
              <div className="hidden lg:flex flex-col gap-3 mt-7">
                <button
                  className="
                    w-full h-13 py-3.5 flex items-center justify-center gap-2 rounded-2xl
                    bg-[#9a4b1f] hover:bg-[#7c3a15] active:scale-[0.98]
                    text-white text-sm font-semibold
                    shadow-[0_8px_20px_-6px_rgba(154,75,31,0.5)]
                    transition-all duration-200
                  "
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  افزودن به سبد خرید
                </button>

                {/* <button className="w-full py-3.5 rounded-2xl border border-[#ede6dc] text-[#2b2420] text-sm font-medium hover:bg-[#f7f3ee] transition-colors duration-200">
                  افزودن به علاقه‌مندی‌ها
                </button> */}
              </div>
            </div>
          </div>

          {/* مشخصات فنی — شبکه کارت‌های نرم */}
          <div className="mt-16 lg:mt-24">
            <h2 className="text-lg font-bold text-[#2b2420] mb-5">مشخصات فنی</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[
                { label: 'حجم', value: '150 میلی‌لیتر' },
                { label: 'نوع پوست', value: 'همه انواع پوست' },
                { label: 'کشور سازنده', value: 'ایران' },
                { label: 'ماندگاری', value: '24 ماه' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#f7f3ee] rounded-2xl p-4 hover:shadow-sm transition-shadow duration-200"
                >
                  <p className="text-[11px] text-[#8a7f73] uppercase tracking-wide mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-[#2b2420]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* نوار خرید چسبان — فقط موبایل */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#ede6dc] px-4 py-3 flex items-center gap-3 shadow-[0_-8px_24px_-8px_rgba(43,36,32,0.1)]">
        <div className="leading-tight">
          <p className="text-[11px] text-[#8a7f73]">قیمت</p>
          <p className="text-lg font-bold text-[#2b2420]">$55.00</p>
        </div>
        <button
          className="
            flex-1 h-12 flex items-center justify-center gap-2 rounded-2xl
            bg-[#9a4b1f] active:scale-[0.98]
            text-white text-sm font-semibold
            shadow-[0_8px_20px_-6px_rgba(154,75,31,0.5)]
            transition-transform duration-200
          "
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5

.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          افزودن به سبد خرید
        </button>
      </div>
    </>
  )
}

export default Product