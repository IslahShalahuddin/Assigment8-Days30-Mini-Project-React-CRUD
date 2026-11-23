function Footer() {
    return (
        <footer className="mt-10 border-t border-gray-800 px-5 py-6 md:px-10">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">

                <div className="flex items-center gap-3">
                    <span className="block h-3 w-3 rounded-sm bg-white"></span>

                    <span className="text-[15px] font-semibold text-[#69748b]">
                        DibiTech
                    </span>
                </div>

                <div className="text-[15px] text-[#69748b]">
                    &copy; 2026 DibiTech
                </div>

            </div>
        </footer>
    );
}

export default Footer;
