import React, { useMemo, useState } from 'react';
import Topbar from './components/Topbar.jsx';
import Hero from './components/Hero.jsx';
import Categories from './components/Categories.jsx';
import GridSection from './components/GridSection.jsx';
import Tabbar from './components/Tabbar.jsx';
import { categories, deals, recommended } from './data.js';

export default function App() {
  const [wishlist, setWishlist] = useState(() => new Set());

  const handleToggleWish = (id) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const memoWishlist = useMemo(() => wishlist, [wishlist]);

  return (
    <>
      <Topbar />
      <main className="container">
        <Hero />
        <Categories categories={categories} />

        <GridSection
          title="Deals"
          products={deals}
          wishlist={memoWishlist}
          onToggleWish={handleToggleWish}
        />

        <GridSection
          title="Recommended for You"
          products={recommended}
          viewAll
          wishlist={memoWishlist}
          onToggleWish={handleToggleWish}
        />
      </main>
      <Tabbar cartCount={3} />
    </>
  );
}
