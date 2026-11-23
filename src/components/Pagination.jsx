
function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-4">

            {/* Previous */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-lg border border-white/10 bg-[#202337] px-4 py-2 text-sm text-gray-300 transition hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-40"
            >
                ← Previous
            </button>

            {/* Page Indicator */}
            <span className="text-sm text-gray-300">
                Page <span className="font-bold text-white">{currentPage}</span> of {totalPages}
            </span>

            {/* Next */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-lg border border-white/10 bg-[#202337] px-4 py-2 text-sm text-gray-300 transition hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-40"
            >
                Next →
            </button>

        </div>
    );
}

export default Pagination;
