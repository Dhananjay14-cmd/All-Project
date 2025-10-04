import React from 'react';

export default function Categories({ categories }) {
  return (
    <section className="categories">
      {categories.map((c) => (
        <div className="category" key={c.id}>
          <div className={`avatar ${c.muted ? 'avatar-muted' : ''}`}>
            <span>{c.icon}</span>
          </div>
          <p>{c.label}</p>
        </div>
      ))}
    </section>
  );
}
