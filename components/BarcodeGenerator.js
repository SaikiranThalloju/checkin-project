


import React from 'react';
import Barcode from 'react-barcode';

const BarcodeGenerator = ({ user }) => {
  if (!user) {
    return <p>User data is missing.</p>; 
  }

  return (
    <div className="text-center">
      <h1 className="text-xl font-bold">{user.name || 'Unknown Name'}</h1> {/* Fallback text */}
      <p className="text-gray-600">{user.email || 'Unknown Email'}</p> {/* Fallback text */}
      <div className="mt-4">
        {user.barcode ? <Barcode value={user.barcode} /> : <p>No Barcode Available</p>}
      </div>
    </div>
  );
};

export default BarcodeGenerator;



