"use client";

import React, { useEffect, useState } from "react";
import UserList from "../../../components/UserList";
import Sidebar from "../../../components/Sidebar";

export default function AdminPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Conditional rendering based on loading state
  if (loading) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <div className="loader"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-100 p-6 h-[calc(100vh-48px)] overflow-y-scroll">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Admin Portal
          </h1>
          <UserList users={users} />
        </div>
      </div>
    </div>
  );
}
