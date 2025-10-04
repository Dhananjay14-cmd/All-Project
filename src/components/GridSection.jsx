import React from 'react';
import ProductCard from './ProductCard.jsx';

export default function GridSection({ title, products, viewAll, wishlist, onToggleWish }) {
  return (
    <section className="grid">
      <div className="grid-header">
        <h2>{title}</h2>
        {viewAll ? (
          <a href="#" className="view-all">View All →</a>
        ) : null}
      </div>
      <div className="grid-2col">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            wished={wishlist.has(p.id)}
            onToggleWish={onToggleWish}
          />
        ))}
      </div>
    </section>
  );
}
