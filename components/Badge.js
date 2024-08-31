// Badge.js
import React from 'react';

const Badge = ({ user }) => {
  return (
    <div className="badge">
      <p>{user.name}</p>
      <p>{user.email}</p>
      {user.barcode && <img src={user.barcode} alt="Barcode" />}
      
    </div>
  );
};

export default Badge;


