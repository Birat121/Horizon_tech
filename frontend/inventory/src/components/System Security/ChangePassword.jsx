import React, { useState } from 'react';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    // Add your form submission logic here
  };

  return (
    <div className='h-[85vh] flex items-center justify-center '>
      <div className='p-6 max-w-lg w-full bg-white border-2 rounded-lg shadow-lg'>
      <h1 className=" text-white text-lg text-center font-semibold p-2 rounded-md mb-2">
            Change Password
          </h1>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
          <div className="form-group">
            <label htmlFor="oldPassword" className='text-lg text-gray-800'>Old Password:</label>
            <input
              type="password"
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full p-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="newPassword" className='text-lg text-gray-800'>New Password:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className='text-lg text-gray-800'>Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <button
            type="submit"
            className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
