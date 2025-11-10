import React, {  useRef } from 'react';
import { NavLink, useLoaderData } from 'react-router';

const BillDetails = () => {
  const data = useLoaderData()
  const  {image,title,category, location,amount,email,date, description, 
} = data

const billModalRef = useRef(null)
const handleModal = () => {
 billModalRef.current.showModal()
}
  return (
   
      <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg flex flex-col md:flex-row gap-6">
      
      <div className="md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl shadow-md"
        />
      </div>

      <div className="md:w-1/2 flex flex-col justify-between">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>

          <div className="flex flex-col gap-2 text-gray-600">
            <p><span className="font-semibold">Category:</span> {category}</p>
            <p><span className="font-semibold">Location:</span> {location}</p>
            <p><span className="font-semibold">Amount:</span> ৳ {amount}</p>
            <p><span className="font-semibold">Date:</span> {date}</p>
            <p><span className="font-semibold">Posted by:</span> {email}</p>
          </div>

          <p className="text-gray-700 mt-4">{description}</p>
        </div>

     <NavLink to='/bills' className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all w-fit ">
          Back to Bills
        </NavLink>
      <div className='flex justify-end'>
          <button onClick={handleModal} className=' bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all w-fit font-bold '>Pay Bill</button>
      </div>

<dialog ref={billModalRef}  className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Bill Payment</h3>
    <p className="py-4"> Please fill in the required form</p>
   <form >
     
   </form>
  </div>

 
</dialog>
      </div>
    </div>
  );
};

export default BillDetails;