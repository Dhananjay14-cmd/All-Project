import React from 'react';

export default function Tabbar({ cartCount = 0 }) {
  return (
    <nav className="tabbar">
      <a className="tab active" href="#">
        <span>🏠</span>
        <small>Home</small>
      </a>
      <a className="tab" href="#">
        <span>📁</span>
        <small>Categories</small>
      </a>
      <a className="tab" href="#">
        <span className="cart-badge" data-count={cartCount}>🛒</span>
        <small>Cart</small>
      </a>
      <a className="tab" href="#">
        <span>❤️</span>
        <small>Wishlist</small>
      </a>
      <a className="tab" href="#">
        <span>👤</span>
        <small>Account</small>
      </a>
    </nav>
  );
}
