import React from "react";
import { Link } from "react-router-dom";

const AlbumCard = ({ album, onAddToCart }) => {
  // return mmust return one elemnt thing

  //sanity check: make sure that product to display is not broken
  if (!album) return null;
  return (
    <article className="album-card">
      <Link className="album-img-link" to={`/product/${album.id}`}>
        <img
          className="album-image"
          src={album.image}
          alt={album.name}
          loading="lazy"
        />
      </Link>
      <div className="album-body">
        <span className="album-category">{album.category}</span>
        <h3 className="album-title">
          <Link to={`/product/${album.id}`}>{album.name}</Link>
        </h3>
        <p className="album-price">
          $
          {typeof album.price === "number"
            ? album.price.toFixed(2)
            : "contact for price"}
        </p>
        <button
          className="btn btn-secondary btn-block"
          type="button"
          onClick={() => onAddToCart(album.id)}
        >
          Add To Cart
        </button>
      </div>
    </article>
  );
};

export default AlbumCard;
