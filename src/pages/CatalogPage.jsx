import React, { useState } from "react";
import AlbumCard from "../components/AlbumCard";

function CatalogPage({ albums, onAddToCart }) {
  const genres = ["All", "Jazz", "Electronic", "Rock", "Classical"];
  const [selectedGenre, setSelectedGenre] = useState("All");

  // safety check - what hapens if data is bad or missing
  const validAlbums = albums || [];

  const filteredAlbums =
    selectedGenre === "All"
      ? validAlbums
      : validAlbums.filter((a) => a.genre === selectedGenre);

  return (
    <div className="catalog-container">
      <header className="catalog-hero">
        <h1> Find your next favorite record!</h1>
        <p>
          Find your aged to perfection classics on vinyl
        </p>
      </header>
      <div className="filter-bar">
        {genres.map((genre) => {
          return (
            <button
              key={genre}
              className={`filter-pill ${
                selectedGenre === genre ? "active" : ""
              }`}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <div className="album-grid">
        {filteredAlbums.map((album) => (
          <AlbumCard
            key={album.id}
            album={album}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
