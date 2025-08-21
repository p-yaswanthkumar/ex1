// src/components/AdminLayout.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => (
  <div style={{ display: 'flex', height: '100vh' }}>
    <aside style={{ width: '200px', background: '#001f4d', color: '#fff', padding: '20px' }}>
      <nav>
        <Link to="/admin" style={{ color: '#fff', display: 'block', margin: '10px 0' }}>
          Dashboard
        </Link>
        {/* Add admin-specific links here */}
      </nav>
    </aside>
    <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
      <Outlet />
    </div>
  </div>
);

export default AdminLayout;
