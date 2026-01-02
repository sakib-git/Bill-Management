import React from 'react';

const About = () => {
  return (
<div>
      <div className="max-w-5xl mx-auto px-6 py-16 mt-20">
      <h1 className="text-4xl font-bold text-center mb-6">
        About Our Bill Payment Service
      </h1>

      <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-10">
        We offer a simple, fast, and secure solution for paying your Electricity,
        Water, Gas, and Internet bills from one convenient platform. Our service
        is designed to save your time and remove the hassle of standing in long
        queues or managing multiple payment platforms.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">What We Do</h3>
          <p className="text-gray-600 leading-relaxed">
            We help users pay all their utility bills easily and securely. Whether
            it is electricity, water, gas, or internet bills, our platform ensures
            smooth transactions with instant confirmation and transparent pricing.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">Why Choose Us</h3>
          <p className="text-gray-600 leading-relaxed">
            Our system focuses on reliability, security, and user satisfaction.
            With fast processing, clear billing details, and responsive customer
            support, we aim to provide a trusted digital payment experience.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make utility bill payments easy and accessible for
            everyone. We want to simplify everyday payments through modern and
            user-friendly technology.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
          <p className="text-gray-600 leading-relaxed">
            Security is our top priority. We use trusted payment methods and
            advanced security measures to ensure that every transaction is safe,
            reliable, and protected.
          </p>
        </div>
      </div>
    </div>
</div>
  );
};

export default About;