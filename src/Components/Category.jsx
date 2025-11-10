import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bills')
      .then((res) => res.json())
      .then((data) => {
        const allCategories = data.map((bill) => bill.category);
        const uniqueCategories = [];
        allCategories.forEach((c) => {
          if (!uniqueCategories.includes(c)) {
            uniqueCategories.push(c);
          }
        });

        setCategories(uniqueCategories);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl md:text-4xl text-center py-10 font-bold text-gray-800 ">Manage Your Electricity, Gas, Water & Internet Bills Effortlessly!</h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 max-lg:px-4">
          {categories.map((category) => (
            <Link to={`/category/${category.toLowerCase()}`} key={category} className="bg-white rounded-2xl shadow-md p-6 text-center cursor-pointer  border border-gray-200 transition-all duration-500  hover:scale-105 hover:border-yellow-500 hover:shadow-yellow-200/70">
              <span className="text-2xl font-bold text-gray-800">{category}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
