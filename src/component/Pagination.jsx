import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPaginationGroup = () => {
    const startPage = Math.max(1, currentPage - 1);
    return Array.from({ length: Math.min(3, totalPages - startPage + 1) }, (_, i) => startPage + i);
  };

  return (
    <div className="flex justify-center mt-5">
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1} 
        className="bg-gray-500 text-white text-xs px-3 py-1 rounded-full mx-1 transition duration-300 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
        </svg>
      </button>

      {getPaginationGroup().map((pageNumber) => (
        <button 
          key={pageNumber} 
          onClick={() => onPageChange(pageNumber)} 
          className={`text-xs px-3 py-1 rounded-full mx-1 transition duration-300 ${currentPage === pageNumber ? 'bg-blue-600' : 'bg-gray-500'} text-white`}
        >
          {pageNumber}
        </button>
      ))}

      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages} 
        className="bg-gray-500 text-white text-xs px-3 py-1 rounded-full mx-1 transition duration-300 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
