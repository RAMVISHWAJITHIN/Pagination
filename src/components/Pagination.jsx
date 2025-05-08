import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center gap-3 flex-wrap mt-6">
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-200
                        ${
                            page === currentPage
                                ? "bg-yellow-400 text-white shadow-inner"
                                : "bg-[#e0e5ec] text-gray-700 shadow-md hover:shadow-inner hover:bg-yellow-200"
                        }
                    `}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;






