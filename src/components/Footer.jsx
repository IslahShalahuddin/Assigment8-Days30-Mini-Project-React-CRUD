function Footer(){
    return(
    <footer className="py-5 mt-[20px] border-t-1 border-gray-800">
      <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          <span className="block w-3 h-3 rounded-sm bg-white"></span>
          <span className="text-[15px] font-semibold text-[#69748b]">DibiTech</span>
        </div>
        <div className="text-[15px] text-[#69748b]">
          &copy;2026 DibiTech
        </div>  
      </div>
    </footer>
    )
}

export default Footer