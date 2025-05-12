import React, { useState, useEffect } from 'react';

const AdminToggle = () => {
  const [adminMode, setAdminMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('adminMode');
    if (stored === 'true') setAdminMode(true);
  }, []);

  const toggleAdmin = () => {
    const newMode = !adminMode;
    setAdminMode(newMode);
    localStorage.setItem('adminMode', newMode);
  };

  return (
    <div style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
      <label>
        <input type="checkbox" checked={adminMode} onChange={toggleAdmin} />
        {' '}Admin Mode
      </label>
    </div>
  );
};

export default AdminToggle;
