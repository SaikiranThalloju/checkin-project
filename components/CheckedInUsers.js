

import React from 'react';

const CheckedInUsers = ({ users }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Checked-In Timestamps</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            {user.checkedInTimestamps && user.checkedInTimestamps.length > 0 ? (
              user.checkedInTimestamps.map((timestamp, index) => (
                <div key={index}>{new Date(timestamp).toLocaleString()}</div>
              ))
            ) : (
              <div>No check-ins</div>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default CheckedInUsers;
