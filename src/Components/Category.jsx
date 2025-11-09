import React from 'react';

const Category = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl text-center mt-4 font-bold text-gray-800 mb-4">Manage Your Electricity, Gas, Water & Internet Bills Effortlessly!</h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-14 max-lg:px-4">
          <div
            className="bg-white rounded-2xl shadow-md p-6 text-center cursor-pointer 
  border border-gray-200 transition-all duration-500 
  hover:scale-105 hover:border-yellow-500 hover:shadow-yellow-200/70"
          >
            <div className="text-5xl mb-3">⚡</div>
            <h2 className="text-2xl font-bold text-gray-800">Electricity</h2>
          </div>

          <div
            className="bg-white rounded-2xl shadow-md p-6 text-center cursor-pointer 
  border border-gray-200 transition-all duration-500 
  hover:scale-105 hover:border-orange-500 hover:shadow-orange-200/70"
          >
            <div className="text-5xl mb-3">🔥</div>
            <h2 className="text-2xl font-bold text-gray-800">Gas</h2>
          </div>

          <div
            className="bg-white rounded-2xl shadow-md p-6 text-center cursor-pointer 
  border border-gray-200 transition-all duration-500 
  hover:scale-105 hover:border-sky-500 hover:shadow-sky-200/70"
          >
            <div className="text-5xl mb-3">💧</div>
            <h2 className="text-2xl font-bold text-gray-800">Water</h2>
          </div>

          <div
            className="bg-white rounded-2xl p-6 text-center cursor-pointer 
  border border-gray-200 shadow-md 
  transition-all duration-500 
  hover:scale-105 
  hover:border-indigo-500 
  hover:shadow-indigo-200/70"
          >
            <div className="text-5xl mb-3">🌐</div>
            <h2 className="text-2xl font-bold text-gray-800 transition-all duration-500">Internet</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
