import React, { useState } from 'react';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

function ContactButtons() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const contacts = [
    {
      number: "+353899504694",
      type: "both",
      label: "Ireland"
    },
    {
      number: "+923181010080",
      type: "whatsapp",
      label: "Pakistan"
    }
  ];

  return (
    <div className="fixed bottom-20 right-4 z-50 flex flex-col gap-3">
      {contacts.map((contact, index) => (
        <div key={index} className="flex flex-col items-end gap-2">
          {contact.type === "both" && (
            <a
              href={`https://t.me/${contact.number.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0088cc] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
              title={`Telegram ${contact.label}`}
            >
              <FaTelegram className="text-2xl" />
            </a>
          )}
          {index === 0 && (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                title="WhatsApp Numbers"
              >
                <FaWhatsapp className="text-2xl" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute bottom-full right-0 mb-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2">
                  {contacts.map((contact, idx) => (
                    <a
                      key={idx}
                      href={`https://wa.me/${contact.number.replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      WhatsApp {contact.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ContactButtons; 