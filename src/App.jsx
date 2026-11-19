import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";
import CatalogPage from "./pages/CatalogPage";
import CheckoutPage from "./pages/CheckoutPage";
import AlbumDetailPage from "./pages/AlbumDetailPage";
import { ALBUMS as albums } from "./data/albums";


const App = () => {
  // universal states of the application
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // cart handlers -> unidirectional data flow
  // event handler to add items to cart
  const handleAddToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id); //no duplicates
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    setIsCartOpen(true); // open the cart drawer after adding an item
  };
  const handleUpdateCartQuantity = (albumId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === albumId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean),
    );
  };
  // removing items from cart
  const handleRemoveFromCart = (albumId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== albumId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // subtotal of cart must persist universally
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  //jsx fomrulation
  return (
    <div className="app-container">
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <CatalogPage albums={albums} onAddToCart={handleAddToCart} />
            }
          />
          <Route
            path="/album/:albumId"
            element={
              <AlbumDetailPage
                albums={albums}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={<CheckoutPage cart={cart} onClearCart={handleClearCart} />}
          />
        </Routes>
      </main>

      <CartDrawer
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
};

export default App;
