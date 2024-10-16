import React, { useState } from 'react';
import Feedback from './Feedback';

const FeedbackForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-center space-y-3">
      <p className="text-xl text-gray-700 font-bold">Have Feedback?</p>
      <button
        onClick={() => setIsFormOpen(!isFormOpen)}
        aria-label={isFormOpen ? "Close feedback form" : "Open feedback form"}
        className="bg-[#90e4c2] text-green-800 py-2 px-4 rounded-lg font-semibold mt-3 hover:bg-green-200 transition duration-200"
      >
        {isFormOpen ? "Close Feedback" : "We're Listening!"}
      </button>
      {isFormOpen && <Feedback onClose={() => setIsFormOpen(false)} />}
    </div>
  );
};

export default FeedbackForm;
