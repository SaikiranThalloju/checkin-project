
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Portal</h1>
        <ul>
          <li
            className={`mb-4 cursor-pointer ${pathname === '/admin' ? 'bg-gray-700' : ''}`}
          >
            <Link href="/admin" className="block py-2 px-4">Admin</Link>
          </li>
          <li
            className={`mb-4 cursor-pointer ${pathname === '/admin/checked-in' ? 'bg-gray-700' : ''}`}
          >
            <Link href="/admin/checked-in" className="block py-2 px-4">Checked-In Users</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-6">
        {/* Content will be displayed here based on the route */}
      </div>
    </div>
  );
};

export default Sidebar;
