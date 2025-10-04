import React from 'react';

export default function ProductCard({ product, wished, onToggleWish }) {
  const { id, title, badge, rating, ratingCount, priceCurrent, priceMrp, offText, icon, wide } = product;
  const showIcon = Boolean(icon);

  return (
    <article className={`card ${wide ? 'wide' : ''}`}>
      {badge ? <div className="badge">{badge}</div> : null}
      <button
        className={`wish ${wished ? 'active' : ''}`}
        aria-label="wishlist"
        onClick={() => onToggleWish(id)}
      >
        {wished ? '❤️' : '🤍'}
      </button>
      <div className={showIcon ? 'media icon-center' : 'media'}>{showIcon ? icon : ''}</div>
      <div className="card-body">
        <h3>{title}</h3>
        <div className="rating">
          <span>★ {rating}</span>
          <small>({ratingCount})</small>
        </div>
        <div className="price">
          <span className="current">{priceCurrent}</span>
          <span className="mrp">{priceMrp}</span>
          <span className="off">{offText}</span>
        </div>
      </div>
    </article>
  );
}
