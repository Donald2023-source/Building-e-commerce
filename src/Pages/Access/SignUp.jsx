import React, { useState } from 'react';
import Button from '../Access/Button';
import Conditions from '../Access/Conditions'

import '@fortawesome/fontawesome-free/css/all.min.css';


function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen background">
      <div className="relative mr-16 mt-[32rem]">
        <h1 className="text-white font-bold text-3xl ml-4">
          Shop With Us
        </h1>
        <p className="text-white ml-4 mt-2">
          Lorem ipsum dolor  <br />
          velit ducimus, quidem tempore <br /> veniam possimus <br />
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6">Sign Up Now</h2>
        
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div className="relative sm:w-1/2 sm:mr-2 mb-4 sm:mb-0">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative sm:w-1/2 sm:ml-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
      Password
    </label>
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 -top-5 text-gray-600 focus:outline-none"
      >
        <i className={`fas fa-eye${showPassword ? "-slash" : ""}`}></i> Hide
      </button>
    </div>
    <p className="text-sm mt-1 text-gray-500">Use 8 or more characters with a mix of numbers & symbols</p>
  </div>

      <Conditions/>
       
      <Button/>
       

      
      </form>
    </div>
  );
}

export default SignUp;


