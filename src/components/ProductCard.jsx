
import { Card, CardImage, CardContent } from "./Card";

export default function ProductCard({
  image,
  title,
  category,
  price,
  badge,
  number,
  onAddToCart,
}) {
  const formatPrice = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <Card className="transition hover:-translate-y-0.5 hover:border-[#2a468f]">
      <CardImage src={image} alt={title}>
        {badge && (
          <span className="absolute left-3 top-3 flex h-[26px] min-w-[54px] items-center justify-center rounded-full border border-[#363843] px-2 text-[10px] font-semibold">
            {badge}
          </span>
        )}

        <span className="absolute bottom-3 right-3 text-[10px] font-semibold text-gray-400">
          {number}
        </span>
      </CardImage>

      <CardContent>
        <div className="mb-3 w-full">
          <span className="text-[10px] text-gray-500">
            {category}
          </span>

          <h3 className="font-semibold">{title}</h3>
        </div>

        <div className="flex w-full items-center justify-between border-t border-gray-800 pt-4">
          <strong className="text-[13px]">
            {formatPrice(price)}
          </strong>

          <button
            onClick={onAddToCart}
            className="flex h-[32px] w-[70px] items-center justify-center rounded-full bg-[#1558ff] text-sm font-semibold hover:bg-blue-600"
          >
            Tambah
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
