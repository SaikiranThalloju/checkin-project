
"use client";

import { useState, useRef } from 'react';
import BarcodeGenerator from '../../components/BarcodeGenerator';
import { generateBarcode } from '../../utils/barcodeUtility';
import { toPng } from 'html-to-image';
import Sidebar from '../../components/Sidebar';

export default function AuthPage() {
  const [user, setUser] = useState({ name: '', email: '', password: '', barcode: '' });
  const [showBarcode, setShowBarcode] = useState(false);
  const badgeRef = useRef(null);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const barcode = generateBarcode(user.name, user.email, user.password);

    
    setUser({ ...user, barcode });

    try {
      await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...user, barcode }),
      });
    } catch (error) {
      alert('Error submitting data:', error);
    }

    
    setShowBarcode(true);
  };

  const handleDownload = () => {
    if (!badgeRef.current) return;

    toPng(badgeRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `${user.name}_barcode.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((err) => {
        console.error('Error generating image', err);
      });
  };

  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col items-center justify-center bg-blue-400 p-4">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Create Your Barcode</h2>
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>

        {showBarcode && user.barcode && (
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Your Barcode:</h3>
            <div ref={badgeRef} className="inline-block p-4 bg-white rounded shadow-md">
              <BarcodeGenerator user={user} />
            </div>
            <button onClick={handleDownload} className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              Download Barcode
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

