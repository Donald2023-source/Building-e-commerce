import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '../../assets/Ellipse 1.png'
import google from '../../assets/Social media logo.png';
import Logside from './Logside';
import Under from './Under';
import Last from './Last';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (  
    <div>
    <div className="flex justify-center h-screen background ">
      <Logside/>
      
      <div className="bg-gray-600 flex items-center justify-center gap-[3rem] flex-col  rounded shadow-md w-full max-w-sm mt-[64px]">
        
          <img src={logo} alt="Logo" className="w-[5rem]  justify-center mt-[15rem]" />
          <p className='font-medium text-2xl text-gray-200'>
            Log in
          </p>
        <div className=''>
          <input
            type="text"
            placeholder="Phone number, username, or email"
            className="w-[20rem] p-2 mb-4 border border-gray-300 rounded"
          />
          <div className="relative mb-4">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 cursor-pointer"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button className="w-full p-2 mb-4 md:text-white bg-silver hover:bg-blue-700 rounded">
            Log In
          </button>
          <div className="flex items-center justify-center mb-4 gap-2">
            <img src={google} alt="Google Logo" className="w-6 h-6" />
            <button className="text-white border border-blue-500 px-4 py-2 rounded">
              Continue with Google
            </button>
          </div>
          <div className="text-center">
            <a href="#" className="text-blue-500 hover:underline">
              Forgot your password?
            </a>
          </div>
          
        </div>
        
        <Under/>
        
      </div>
      
    </div>
   
  
  <Last/>
    </div>
    
  );
};

export default Login;













