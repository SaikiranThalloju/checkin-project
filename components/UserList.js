
import React from 'react';
import BarcodeGenerator from './BarcodeGenerator';

const UserList = ({ users }) => {
  if (!users || users.length === 0) {
    return <p className="text-center text-gray-500">No users found.</p>;
  }

  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div key={user.id} className="bg-white p-4 rounded-lg shadow-md">
          
          <div className="mt-4 flex items-center justify-center">
            <BarcodeGenerator user={user} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
