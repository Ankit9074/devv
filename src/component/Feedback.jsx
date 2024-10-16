import React, { useState } from 'react';
import Toggle from './Toggle';

function Feedback({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    address: '',
    country: '',
    email: '',
    phone: ''
  });

  const [isToggled, setIsToggled] = useState(false);


  const toggleActive = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div className="fixed inset-0 flex widthss bg-[#e3ebf0]  z-10 shadow-lg">
      <div className="bg-[#e3ebf0]  rounded-lg p-6 relative h-full left ">
        <button onClick={onClose} className="absolute top-4 left-4 text-gray-600">
          <div className="flex flex-row items-center space-x-3 bg-white p-3 rounded-xl shadow-md mb-5">
            <img
              src="https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div className=''>
              <div className='flex flex-col items-center'>
                <p className="text-sm font-semibold">Hi Reader,</p>
                <p className="text-xs text-gray-500">Here's your News!</p>
              </div>
            </div>
          </div>
          <Toggle isActive={isToggled} onToggle={toggleActive} />
        </button>
      </div>

      <div className="max-w-lg ml-80 flex flex-col p-1 h-[80vh] right bg-[#e3ebf0] ">
        <h3 className="text-xl text-left pl-4">Thank you so much tacking the time!</h3>
        <p className='text-sm text-left pl-4'>Please provide the below details</p>

        <div className="flex flex-col mt-1">
          <label htmlFor="firstName" className="text-left pl-4 mt-1">First Name</label>
          <input
            type="text"
            id="firstName"
            className="w-full sm:w-64 mt-1 border-2 rounded-lg p-1 ml-4"
            placeholder="John"
          />
        </div>

        <div className="flex flex-col mt-1">
          <label htmlFor="lastName" className="text-left pl-4 mt-1">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="w-full sm:w-64 mt-1 border-2 rounded-lg p-1 ml-4"
            placeholder="Doe"
          />
        </div>

        <div className="flex flex-col mt-1">
          <label htmlFor="address" className="text-left pl-4 mt-1">Address</label>
          <textarea
            id="address"
            className="w-full sm:w-96 h-32 mt-1 border-2 rounded-lg p-1 ml-4"
            placeholder="Enter your full Postal Address"
          />
        </div>

        <div className="flex flex-col mt-1">
          <label htmlFor="country" className="text-left pl-4 mt-1">Country</label>
          <input
            type="text"
            id="country"
            className="w-full sm:w-64 mt-1 border-2 rounded-lg p-1 ml-4"
            placeholder="Country"
          />
        </div>

        <div className="flex flex-col mt-1">
          <label htmlFor="email" className="text-left pl-4 mt-1">Email</label>
          <input
            type="email"
            id="email"
            className="w-full sm:w-64 mt-1 border-2 rounded-lg p-1 ml-4"
            placeholder="example@example.com"
          />
        </div>

        <div className="flex flex-col mt-1">
          <label htmlFor="phone" className="text-left pl-4 mt-1">Phone Number</label>
          <input
            type="number"
            id="phone"
            className="w-full sm:w-64 mt-1 border-2 rounded-lg p-1 ml-4"
            placeholder="+91 1234567890"
          />
        </div>
        <div className="flex flex-col mt-1">
          <button className='mt-1 border-2 rounded-lg p-1 ml-4 w-64 bg-[#90e4c2]'>Submite Feedback</button>

        </div>
      </div>


    </div>
  );
}

export default Feedback;
