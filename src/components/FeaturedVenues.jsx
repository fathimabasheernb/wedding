import React, { useState } from "react";

import {
  MapPin,
  Star,
  Heart,
  ArrowRight,
  Users,
  MoveUpRight
} from "lucide-react";

import venues from "../data/venues";
import "../styles/FeaturedVenues.css";

function FeaturedVenues() {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  return (
    <section className="featured-section section-padding" id="venues">

      <div className="container">

        <div className="featured-header">

          <div className="featured-heading-content">
            <span className="featured-eyebrow">
              <span></span>
              FIND YOUR PERFECT SETTING
            </span>

            <h2 className="section-heading">
              Beautiful Venues for
              <br />
              <span>Unforgettable Moments</span>
            </h2>

            <p className="section-subtitle">
              From grand celebrations to intimate gatherings,
              discover extraordinary places to begin your forever.
            </p>
          </div>

          <a href="#all-venues" className="view-all-link">
            Explore All Venues
            <ArrowRight size={17} />
          </a>

        </div>

        <div className="venue-grid">

          {venues.map((venue) => (

            <article className="venue-card" key={venue.id}>

              <div className="venue-image-wrapper">

                <img
                  src={venue.image}
                  alt={venue.name}
                  className="venue-image"
                  loading="lazy"
                />

                <span className="venue-tag">
                  {venue.tag}
                </span>

                <button
                  className={`venue-wishlist ${
                    wishlist.includes(venue.id) ? "selected" : ""
                  }`}
                  onClick={() => toggleWishlist(venue.id)}
                  aria-label="Add to wishlist"
                >
                  <Heart
                    size={19}
                    fill={
                      wishlist.includes(venue.id)
                        ? "currentColor"
                        : "none"
                    }
                  />
                </button>

                <div className="venue-image-type">
                  {venue.type}
                </div>

              </div>

              <div className="venue-details">

                <div className="venue-title-row">

                  <h3>{venue.name}</h3>

                  <div className="venue-rating">
                    <Star size={14} fill="currentColor" />
                    <span>{venue.rating}</span>
                  </div>

                </div>

                <div className="venue-location">
                  <MapPin size={15} />
                  <span>{venue.location}</span>
                  <span className="venue-review-count">
                    ({venue.reviews} reviews)
                  </span>
                </div>

                <div className="venue-capacity">
                  <Users size={15} />
                  <span>{venue.capacity}</span>
                </div>

                <div className="venue-card-footer">

                  <div className="venue-price">
                    <span>{venue.priceLabel}</span>
                    <strong>{venue.price}</strong>
                  </div>

                  <button
                    className="venue-details-btn"
                    onClick={() =>
                      alert(`Details for ${venue.name} coming soon!`)
                    }
                  >
                    View Details
                    <MoveUpRight size={15} />
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

        <div className="featured-bottom">

          <p>
            <span>✦</span>
            Discover handpicked wedding destinations across Kerala.
          </p>

          <a href="#all-venues">
            Browse More Venues
            <ArrowRight size={16} />
          </a>

        </div>

      </div>

    </section>
  );
}

export default FeaturedVenues;