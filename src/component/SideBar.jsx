import React, { useState } from 'react';
import FeedbackForm from './FeedbackForm';

function SideBar({ setView, view }) {
  const [isGridView, setIsGridView] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return (
    <>
      <button
        onClick={() => setIsSidebarOpen(prev => !prev)}
        className="sm:hidden fixed top-4 left-4 bg-[#90e4c2] text-white p-2 rounded-full z-20"
      >
        {isSidebarOpen ? 'Close' : 'Menu'}
      </button>
      <div
        className={`fixed top-0 left-0 h-full bg-[#e3ebf0] transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 transition-transform duration-300 ease-in-out z-10 w-64 max-w-xs sm:w-full p-4 space-y-6 `}
      >
        <div className="flex items-center space-x-3 bg-white p-3 rounded-xl shadow-lg">
          <img
            src="https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col items-center">
            <p className="text-sm font-semibold">Hi Reader,</p>
            <p className="text-xs text-gray-500">Here's your News!</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md text-center space-y-3">
          <p className="text-xl text-gray-700 font-bold">View Toggle</p>
          <div className="flex justify-center items-center ">
            <button
              onClick={() => setView('cardList')}
              aria-label="Card List View"
              className={`p-2 w-12 h-12 flex justify-center items-center ${view === 'cardList' ? 'bg-[#90e4c2]' : 'bg-gray-100 hover:bg-gray-200'} focus:outline-none`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h4v4H3V6zM10 6h4v4h-4V6zM17 6h4v4h-4V6zM3 13h4v4H3v-4zM10 13h4v4h-4v-4zM17 13h4v4h-4v-4z" />
              </svg>
            </button>
            <button
              onClick={() => setView('cart')}
              aria-label="Cart View"
              className={`p-2 w-12 h-12 flex justify-center items-center ${view === 'cart' ? 'bg-[#90e4c2]' : 'bg-gray-100 hover:bg-gray-200'} focus:outline-none`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.008v.008H3.75V6.75zm0 5.25h.008v.008H3.75V12zm0 5.25h.008v.008H3.75v-.008z" />
              </svg>
            </button>
          </div>
        </div>
        <FeedbackForm />
      </div>

      {isSidebarOpen && (
        <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black opacity-50 sm:hidden"></div>
      )}
    </>
  );
}

export default SideBar;
