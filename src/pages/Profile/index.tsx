

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'; // Menu icon for drawer button
import { RiCloseLine } from 'react-icons/ri'; // Close icon for drawer


export function Profile() {
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // Hardcoded password for testing mode
  const adminPassword = 'yourname@123';

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === adminPassword) {
      setErrorMessage(''); // Clear error message on success
      alert('Password accepted! Account creation unlocked.');
    } else {
      setErrorMessage(
        'Due to web testing mode being enabled, account creation is disabled. Only the admin can enable it.'
      );
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col relative">
      {/* Top Bar with Menu Icon */}
      <div className="bg-blue-500 text-white py-3 px-6 flex justify-between items-center">
        <h1 className="text-lg font-bold">Web Testing Mode is On</h1>
        <button
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded cursor-not-allowed"
          disabled
        >
          Account Creation is Disabled
        </button>
        <button onClick={toggleDrawer} className="text-white text-2xl">
          <FiMenu />
        </button>
      </div>

      {/* Drawer Menu */}
      <div
        className={`fixed top-0 right-0 bg-blue-500 text-white w-64 h-full transform ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-semibold">Pages</h2>
          <button onClick={toggleDrawer}>
            <RiCloseLine size={30} />
          </button>
        </div>

        <div className="px-4">
          <Link to="/about-us">
            <button className="w-full text-left px-4 py-2 mt-2 bg-blue-600 rounded hover:bg-blue-700">
              🧑‍💻 About Us
            </button>
          </Link>
          <Link to="/contact-us">
            <button className="w-full text-left px-4 py-2 mt-2 bg-blue-600 rounded hover:bg-blue-700">
              📞 Contact Us
            </button>
          </Link>
          <Link to="/privacy-policy">
            <button className="w-full text-left px-4 py-2 mt-2 bg-blue-600 rounded hover:bg-blue-700">
              🔒 Privacy Policy
            </button>
          </Link>

          {/* <Link to="/explorer">
  <button className="w-full text-left px-4 py-2 mt-2 bg-green-600 rounded hover:bg-green-700">
    🌍 Explorer
  </button>
</Link> */}

<Link to="/services">
  <button className="w-full text-left px-4 py-2 mt-2 bg-yellow-600 rounded hover:bg-yellow-700">
    🛠️ Services
  </button>
</Link>



        </div>
      </div>

      {/* Profile Section */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Do you want to enable portfolio mode?
          </h2>
          <form onSubmit={handlePasswordSubmit}>
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Enter Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              required
            />
            {errorMessage && (
              <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Enable
            </button>
          </form>
        </div>
      </div>
    </div>
  );

}

