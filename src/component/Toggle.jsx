import React, { useState } from 'react';
import Feedback from './Feedback';
const Toggle = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const toggleForm = () => setIsFormOpen((prev) => !prev);
  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-center space-y-3">
      <p className=" text-xl text-gray-700 font-bold">Have Feedback?</p>
      <button
        onClick={toggleForm}
        className=" bg-green-100 text-green-800 py-2 rounded-lg font-semibold  hover:bg-green-200 p-5" >
        Close Feedback!
      </button>
      {isFormOpen && <Feedback onClose={toggleForm} />}
    </div>
  );
};
export default Toggle;
