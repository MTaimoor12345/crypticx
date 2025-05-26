import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

function EmailButton() {
  const email = 'crypticxglobal@gmail.com';
  
  return (
    <a 
      href={`mailto:${email}`}
      className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
      title="Email Us"
    >
      <FaEnvelope className="text-2xl" />
    </a>
  );
}

export default EmailButton;
