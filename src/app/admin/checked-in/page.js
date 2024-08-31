

"use client";

import { useEffect, useState } from 'react';
import CheckedInUsers from '../../../../components/CheckedInUsers';
import Sidebar from '../../../../components/Sidebar';

export default function CheckedInPage() {
  const [checkedInUsers, setCheckedInUsers] = useState([]);

  useEffect(() => {
    const fetchCheckedInUsers = async () => {
      try {
        const res = await fetch('/api/users'); 
        const users = await res.json();
        const checkedIn = users.filter(user => user.checkedInTimestamps && user.checkedInTimestamps.length > 0);
        setCheckedInUsers(checkedIn);
      } catch (error) {
        console.error("Error fetching checked-in users:", error);
      }
    };

    fetchCheckedInUsers();
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Checked-In Users</h1>
          <CheckedInUsers users={checkedInUsers} />
        </div>
      </div>
    </div>
  );
}
