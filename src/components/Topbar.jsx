import React from 'react';

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="container">
        <div className="searchbar">
          <span className="icon">🔍</span>
          <input type="text" placeholder="Search for products, brands and more" />
        </div>
      </div>
    </header>
  );
}
