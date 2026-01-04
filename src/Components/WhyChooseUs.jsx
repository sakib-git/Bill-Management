import { ShieldCheck, Smile, Zap } from 'lucide-react';
import React from 'react';

const WhyChooseUs = () => {
  return (
       <div className="py-16 bg-base-100 rounded-md">
      <div className="max-w-6xl mx-auto px-4  ">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Why Choose Us</h2>
          <p className="text-gray-500">
            Smart and simple way to manage your bills
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          
          {/* Card 1 */}
          <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
            <div className="card-body items-center text-center">
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="card-title">Easy to Use</h3>
              <p className="text-gray-500 text-sm">
                Simple and clean interface that anyone can use easily.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
            <div className="card-body items-center text-center">
              <Smile className="w-10 h-10 text-primary mb-4" />
              <h3 className="card-title">Fast & Efficient</h3>
              <p className="text-gray-500 text-sm">
                Track and manage all your bills in just a few clicks.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
            <div className="card-body items-center text-center">
              <ShieldCheck className="w-10 h-10 text-primary mb-4" />
              <h3 className="card-title">Secure & Reliable</h3>
              <p className="text-gray-500 text-sm">
                Your data is protected with modern security standards.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;