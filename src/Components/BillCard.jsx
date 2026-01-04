import { format } from 'date-fns';
import { MapPin } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router';

const BillCard = ({ bill }) => {
  const { image, title, category, location, amount, date, _id , } = bill;
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative">
        <img src={image} alt={title} className="h-52 w-full object-cover transition-transform duration-300 hover:scale-105" />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">{category}</span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div className="space-y-2">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>

          <div className="flex items-center gap-3 text-gray-500 dark:text-gray-300 text-sm">
            <MapPin className="w-4 h-4" /> {location}
          </div>

          <p className="text-gray-800 dark:text-gray-200 font-semibold text-lg">৳ {amount}</p>

          <p className="text-gray-500 dark:text-gray-400 text-sm">{format(date, 'd MMMM, y')}</p>
      
        </div>

        {/* Button */}
        <NavLink to={`/details/${_id}`} className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-xl text-center font-semibold shadow-md hover:from-indigo-500 hover:to-blue-500 transition-all duration-300">
          See Details
        </NavLink>
      </div>
    </div>
  );
};

export default BillCard;
