import React from 'react'

function Button() {
  return (
     

    <div className="flex justify-between items-center mt-8">
    <button type="submit" className="py-2 px-4 bg-silver text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
      Sign Up
    </button>
    <p className="text-sm text-gray-600">
      Already have an account? <a href="#" className="text-blue-600 mr-[8rem]">Log In</a>
    </p>
  </div>
  )
}

export default Button
