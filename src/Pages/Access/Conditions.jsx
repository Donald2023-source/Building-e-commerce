import React from 'react'

export default function() {
  return (
    <div> 
    <div className="mb-4">
       <label className="block text-sm font-medium text-gray-700">
         <input type="checkbox" className="mr-2"/> By creating an account, I agree to the terms of use and privacy policy
       </label>
     </div>

     <div className="mb-6">
       <label className="block text-sm font-medium text-gray-700">
         <input type="checkbox" className="mr-2"/> By creating an account, I am also consenting to receive SMS messages and emails including product updates, events, and marketing promotions
       </label>
     </div>
    </div>
  )
}

