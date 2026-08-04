function ProductItem() {
  return (
    <div className="group relative w-full max-w-sm mx-auto">

      {/* گلوی گرادیانت پشت کارت — فقط در هاور نمایان می‌شود */}
      <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-amber-100/60 via-orange-50/30 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

      <div
        className="
          relative bg-white rounded-3xl overflow-hidden
          shadow-[0_2px_10px_-2px_rgba(43,36,32,0.08)]
          group-hover:shadow-[0_16px_32px_-8px_rgba(43,36,32,0.18)]
          transition-all duration-300 ease-out
          group-hover:-translate-y-1
        "
      >
        {/* Media */}
        <div className="relative w-full aspect-square overflow-hidden bg-[#f7f3ee]">
          <img
            src="https://studiomani.ir/wp-content/uploads/2025/04/facial-cleanser-photography-03.webp"
            alt="Product"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          <span className="absolute top-3 right-3 bg-white/90 backdrop-blur text-[11px] font-medium text-[#9a4b1f] px-3 py-1.5 rounded-full shadow-sm">
            جدید
          </span>

          {/* بج امتیاز شناور روی لبه تصویر */}
          <div className="absolute bottom-1  left-4  bg-white rounded-2xl shadow-[0_6px_16px_-4px_rgba(43,36,32,0.15)] px-3 py-2 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 fill-current text-[#b8860b]" viewBox="0 0 20 20">
              <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
            </svg>
            <span className="text-xs font-semibold text-[#2b2420]">4.8</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 pt-6">
          <p className="text-[11px] font-medium text-[#9a4b1f] uppercase tracking-wider mb-1.5">
            مراقبت پوستی
          </p>

          <h3 className="text-base sm:text-lg font-bold text-[#2b2420] leading-snug line-clamp-1">
            شوینده صورت
          </h3>

          <p className="mt-1.5 text-sm text-[#8a7f73] leading-relaxed line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia ratione delectus.
          </p>

          <div className="flex items-center justify-between mt-4">
            <span className="text-lg sm:text-xl font-bold text-[#2b2420]">$55.00</span>

          
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem