function Hero(){
    return(
    //<!-- hero -->
      <section className="flex min-h-[360px] w-full flex-col items-start justify-center gap-5 border-y border-[#1c243a] py-10 text-left sm:min-h-[390px] sm:items-center sm:py-12 sm:text-center">
        <div className="text-[#7ca5ff] font-bold text-[10px]">
          <span>KOLEKSI DIGITAL PILIHAN</span>
        </div>
        <div>
          <h1 className="text-[32px] font-semibold leading-tight sm:text-[40px] lg:text-[50px]">Produk digital untuk ide yang lebih besar.</h1>
          <p className="mt-2 text-sm text-[#8c96ad] sm:text-[15px]">Temukan template, aset, dan tools praktis untuk mempercepat proses <br class="hidden sm:block"/>kreatifmu.</p>
        </div>
        <div><a href="#products" className="mt-2 flex w-[150px] items-center justify-center rounded-full bg-[#1558ff] px-5 py-2 font-semibold hover:-translate-y-0.5">
          <p>Lihat koleksi</p></a>
        </div>
      </section> 
    )
}

export default Hero;