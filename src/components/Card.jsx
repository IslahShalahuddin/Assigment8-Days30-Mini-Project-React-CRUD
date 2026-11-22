export default function CardCategory({
  selectedCategory,
  onCategoryChange,
}) {
  const categories = [
    "Semua",
    "AI Tools",
    "UI Kit",
    "Template",
    "Assets",
  ];

  return (
    <div
      id="categories"
      className="mb-8 flex flex-wrap items-center gap-3"
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-5 py-2 transition ${
            selectedCategory === category
              ? "bg-[#1558ff] text-white"
              : "border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`min-h-[326px] w-full overflow-hidden rounded-2xl border border-[#202531] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardImage({ src, alt, children }) {
  return (
    <div className="relative h-[171px] w-full overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return (
    <div className="flex w-full flex-col items-center justify-center px-4 py-4">
      {children}
    </div>
  );
}
