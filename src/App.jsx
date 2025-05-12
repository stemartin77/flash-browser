import React from 'react';
import './App.css';
import AdminToggle from './components/AdminToggle';

function App() {
  return (
    <div className="app-container">
      {/* 🔲 Navigation Sidebar */}
      <aside className="sidebar">
        <h2>Flash Browser</h2>
        <AdminToggle />
        <ul>
          <li>All Flash</li>
          <li>Styles</li>
          <li>Resident Artists</li>
          <li>Admin / Metrics</li>
        </ul>
      </aside>

      {/* 🔲 Main Display Area */}
      <main className="main-content">
        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search flash..." />
        </div>

        {/* Placeholder for Flash Display */}
        <div className="flash-gallery">
          <p>Flash designs will appear here...</p>
        </div>
      </main>
    </div>
  );
}

export default App;
