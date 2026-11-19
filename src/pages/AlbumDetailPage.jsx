import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function AlbumDetailPage({ albums, onAddToCart }) {
  //create the state of the compontnnt
  const { albumId } = useParams();
  const [qty, setQty] = useState(1);

  const album = albums.find((a) => a.id === albumId);

  // sanity check if album is missing or not exist
  if (!album) {
    return (
      <div className="detail-error">
        <h2>Album not found</h2>
        <Link className="btn btn-secondary" to="/">
          {" "}
          Return to main selection
        </Link>
      </div>
    );
  }
  return (
    <div className="detail-container">
      <nav className="breadcrumb">
        <Link to="/">Catalog</Link> &gt; <span>{album.title}</span>
      </nav>

      <div className="detail-grid">
        <img src={album.image} alt={album.title} className="detail-img" />

        <div className="detail-info">
          <span className="album-genre">{album.genre}</span>
          <h1 className="detail-title">{album.title}</h1>
          <h2 className="detail-artist">{album.artist}</h2>
          <p className="detail-price">${album.price.toFixed(2)}</p>
          <p className="detail-desc">{album.description}</p>

          <div className="album-specs">
            <h3>Vinyl Specifications</h3>

            <p>
              <strong>Catalog Number:</strong> {album.specs.catalogNumber}
            </p>

            <p>
              <strong>Pressing Weight:</strong> {album.specs.weight}
            </p>

            <p>
              <strong>Playback Speed:</strong> {album.specs.speed}
            </p>

            <p>
              <strong>Record Label:</strong> {album.specs.label}
            </p>
          </div>

          <div className="stock-tag">
            {album.stock > 0
              ? `✔️ In Stock (${album.stock} units available)`
              : "Out of stock"}
          </div>

          <div className="detail-actions">
            <div className="qty-input-group">
              <label htmlFor="detail-qty">Quantity: </label>
              <input
                type="number"
                id="detail-qty"
                min="1"
                max={album.stock}
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, parseInt(e.target.value, 10) || 1))
                }
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => onAddToCart(album, qty)}
            >
              Add {qty} to cart
            </button>
          </div>
        </div>
      </div>
      
      <section className="album-tracklist">
        <h2>Tracklist</h2>

        <ol>
          {album.tracklist.map((track, index) => (
            <li key={`${album.id}-${index}`}>{track}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default AlbumDetailPage;
