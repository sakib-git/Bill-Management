import { Bell, CheckSquare, Clock } from 'lucide-react';
import React from 'react';

const Benefits = () => {
    const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Manage all your bills in one place and save hours every month.",
    },
    {
      icon: CheckSquare,
      title: "Stay Organized",
      description: "Track paid and unpaid bills, categorize, and stay on top.",
    },
    {
      icon: Bell,
      title: "Never Miss a Bill",
      description: "Get reminders and notifications so you never forget a payment.",
    },
  ];
  return (
      <div className="py-16 bg-base-100 rounded-md">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">User Benefits</h2>
          <p className="text-gray-500">
            Everything you need to manage your bills efficiently
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-base-200 p-8 rounded-lg shadow hover:shadow-xl transition"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Benefits;