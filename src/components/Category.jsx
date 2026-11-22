function Category({ searchTerm, onSearchChange }) {
  return (
    <div
      id="catalog"
      className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
    >
      <div>
        <span className="text-[10px] font-semibold text-[#7ca5ff]">
          KATALOG PRODUK
        </span>

        <h2 className="text-[23px] font-[Arial] sm:text-[27px]">
          Dibuat untuk kreator modern
        </h2>
      </div>

      <div className="w-full md:w-auto">
        <label className="flex h-[40px] w-full items-center gap-3 rounded-xl border border-[#252937] bg-[#0c1120] px-4 sm:w-[280px]">
          <img
            src="/iconsearch.png"
            alt="Search"
            className="w-[20px]"
          />

          <input
            type="search"
            placeholder="Cari Produk"
            aria-label="Cari Produk"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-400"
          />
        </label>
      </div>
    </div>
  );
}

export default Category;