import React from 'react';
import { toast } from 'react-toastify';

const Newsletter = () => {
  const handleNew = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    const form = e.target;
    if (email) {
      toast.success('Successfully Subscribed');
    }

    form.reset();
  };
  return (
    <div className=" py-6">
   
        <form onSubmit={handleNew} className="max-w-[500px] w-full flex gap-2 mx-auto ">
          <input type="email" name="email" className="border border-[#c9c9c9] rounded-md  px-2 py-2 focus:outline-none focus:border-[#c9c9c9]  focus:ring-2 focus:ring-[#c9c9c9] transition w-full " required placeholder="Email" />
          <button type="submit" className="px-5 py-2 rounded-md bg-[#001351] text-white font-bold">
            Subscribe
          </button>
        </form>
        <p className='text-center mt-2'>We respect your privacy. Unsubscribe at any time.</p>
      </div>
 
  );
};

export default Newsletter;
