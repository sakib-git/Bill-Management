import { format } from 'date-fns';
import React from 'react';
import { NavLink } from 'react-router';

const BillCard = ({ bill }) => {
  const { image, title, category, location, amount, date, _id } = bill;
  return (



    <div className="bg-[var(--navbar-bg)] border border-[var(--border-card)] rounded-2xl shadow-xl p-4 flex flex-col justify-between  ">
  {/* Image */}
  <img
    src={image}
    alt={title}
    className="rounded-xl h-48 w-full object-cover mb-4"
  />

  {/* Content */}
  <div className="space-y-2">
    <h2 className="text-2xl font-bold text-[var(--category)]">{title}</h2>
    <p className="text-[var(--category)] text-sm font-medium">
      Category: {category}
    </p>
    <p className="text-[var(--category)] text-sm font-medium">
      Location: {location}
    </p>
    <p className="text-[var(--category)] font-semibold text-lg">
      ৳ {amount}
    </p>
    <p className="text-[var(--category)] font-medium text-sm">
      {format(date, 'd MMMM, y')}
    </p>
  </div>

  {/* Button */}
  <NavLink
    to={`/details/${_id}`}
    className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 text-center font-semibold shadow-md transition-all"
  >
    See Details
  </NavLink>
</div>

  );
};

export default BillCard;
