import React, { useState } from 'react';

function Last() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      
      <div className="md:flex md:flex-row items-center p-4 gap-10">
        
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-white font-bold text-xl mb-2">
            SUBSCRIBE TO GET UPDATED
          </h2>
          <p className="text-center whitespace-nowrap text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Subscription form */}
        <div className="flex justify-center items-center w-full">
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="email"
              id="subscribeEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-white bg-black border border-gray-500 rounded-l px-4 py-2"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-silver hover:bg-blue-700 text-white px-4 py-2 rounded border-l-0 ml-3"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Last;
