function CategoryFilter({
    categories,
    selectedCategory,
    onCategoryChange
}) {
    return (
        <div className="flex flex-wrap gap-3">

            {/* Semua Categories */}
            <button
                onClick={() => onCategoryChange("all")}
                className={`rounded-full px-5 py-2 text-sm font-medium trasition ${
                    selectedCategory === "all"
                        ? "bg-indigo-600 text-white"
                        : "border border-white/10 bg-[#202337] text-gray-400 hover:text-white"
                }`}
            >
                Semua
            </button>

            {/* API Categories */}
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition ${
                        selectedCategory === category
                            ? "bg-indigo-600 text-white"
                            : "border border-white/10 bg-[#202337] text-gray-400 hover:text-white"
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}

export default CategoryFilter;