import React from 'react';
import { Facebook, Instagram, X } from 'lucide-react';

const Footer = () => {
  return (
  <footer class="bg-gray-900 text-white py-10">
  <div class=" max-w-[1440px] mx-auto px-6 md:flex md:justify-between md:items-start">
    
    <div class="mb-6 md:mb-0">
      <h1 class="text-2xl font-bold mb-2">Utility Bill Management</h1>
      <p class="text-gray-400 max-w-sm">
        Manage your utility bills efficiently and stay on top of payments with our easy-to-use platform.
      </p>
    </div>

    <div class="mb-6 md:mb-0">
      <h2 class="text-xl font-semibold mb-4">Useful Links</h2>
      <ul>
         <li class="mb-2">
          <a href="#" class="text-gray-400 hover:text-white transition-colors">Profile</a>
        </li>
        <li class="mb-2">
          <a href="#" class="text-gray-400 hover:text-white transition-colors">Bill</a>
        </li>
       
        <li>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">Support</a>
        </li>
      </ul>
    </div>

    <div>
      <h2 class="text-xl font-semibold mb-4">Contact</h2>
      <p class="text-gray-400 mb-2">© 2025 Utility Bill Management System</p>
      <p class="text-gray-400">All rights reserved.</p>
    </div>

  </div>
    <div className='flex gap-4 justify-end max-w-[1440px] mx-auto'>
       <Facebook className="w-6 h-6" />
       <Instagram className="w-6 h-6" />
          <X className="w-6 h-6" />
</div>
</footer>

  );
};

export default Footer;