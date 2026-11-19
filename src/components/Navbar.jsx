import React from "react";
//  if react -router doesnt work; change to react-router-dom
import { Link } from "react-router-dom";

const Navbar = ({ cartCount, onOpenCart }) => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand-logo" to="/">
          🎵 VinylVault
        </Link>
        <nav className="nav-actions">
          <Link className="nav-link" to="/">
            Check Albums
          </Link>
          <button
            type="button"
            className="btn-cart-badge"
            onClick={onOpenCart}
            aria-label={"Shipping with ${cartCount} items"}
          >
            🛒{" "}
            {cartCount > 0 && <span className="badge-pill">{cartCount}</span>}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
