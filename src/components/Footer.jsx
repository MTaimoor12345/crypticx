import React, { useState } from 'react';
import { FaWhatsapp, FaTelegram, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
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
    <footer className="bg-card-dark dark:bg-dark text-white py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">CrypticX</h3>
            <p className="text-gray-400">
              Empowering innovation through technology, trading, and education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="/trading" className="text-gray-300 hover:text-white transition-colors">Trading</a></li>
              <li><a href="/academy" className="text-gray-300 hover:text-white transition-colors">Academy</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-[#25D366] hover:text-[#25D366]/80 transition-colors text-2xl"
                  title="WhatsApp Numbers"
                >
                  <FaWhatsapp />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute bottom-full left-0 mb-2 w-48 bg-gray-800 rounded-lg shadow-xl py-2 z-50">
                    {contacts.map((contact, idx) => (
                      <a
                        key={idx}
                        href={`https://wa.me/${contact.number.replace("+", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
                      >
                        WhatsApp {contact.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a
                href={`https://t.me/${contacts[0].number.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0088cc] hover:text-[#0088cc]/80 transition-colors text-2xl"
                title="Telegram"
              >
                <FaTelegram />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-secondary-light transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-secondary hover:bg-secondary-dark text-white rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CrypticX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
