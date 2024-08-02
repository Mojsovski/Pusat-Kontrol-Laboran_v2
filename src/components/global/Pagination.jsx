import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Pagination = ({ currentPage, totalPages, paginate }) => {
  return (
    <div>
      <button
        className={`px-4 py-2 mx-1 rounded ${
          currentPage === 1 ? "text-[#CCCCCC]" : "text-[#253E8D]"
        }`}
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <KeyboardArrowLeftIcon />
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`px-4 py-2 mx-1  rounded-xl ${
            currentPage === index + 1
              ? "bg-[#253E8D] text-white"
              : "bg-[#CCCCCC] hover:bg-neutral-200 text-black"
          }`}
          onClick={() => paginate(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className={`px-4 py-2 mx-1  rounded ${
          currentPage === totalPages ? "text-[#CCCCCC]" : "text-[#253E8D]"
        }`}
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <KeyboardArrowRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
