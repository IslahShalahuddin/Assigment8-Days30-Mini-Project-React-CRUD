
export default function CartSummary({ cart, onRemove }) {
  const formatPrice = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(value);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section id="cart" className="mt-16 mb-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-semibold text-[#7ca5ff]">
            YOUR SHOPPING CART
          </span>
          <h2 className="text-2xl font-semibold">
            Keranjang Belanja
          </h2>
        </div>

        <span className="rounded-full bg-[#192135] px-4 py-2 text-sm text-white">
          {cart.reduce((sum, item) => sum + item.quantity, 0)} Produk
        </span>
      </div>

      <div className="rounded-2xl border border-[#252937] bg-[#0c1120] p-5">
        {cart.length === 0 ? (
          <p className="py-8 text-center text-sm text-gray-400">
            Keranjang masih kosong. Yuk, pilih produk favoritmu!
          </p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-3 border-b border-gray-800 pb-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 rounded-lg object-cover"
                  />

                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-400">
                      {formatPrice(item.price)} × {item.quantity}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 sm:justify-end">
                  <strong className="text-sm">
                    {formatPrice(item.price * item.quantity)}
                  </strong>

                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-xs text-red-400 hover:text-red-300"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TOTAL */}
        <div className="mt-5 flex items-center justify-between">
          <span className="font-medium text-gray-300">
            Total Keseluruhan
          </span>

          <strong className="text-xl text-white">
            {formatPrice(total)}
          </strong>
        </div>
      </div>
    </section>
  );
}
