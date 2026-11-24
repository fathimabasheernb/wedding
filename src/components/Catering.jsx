import React, { useState } from "react";

import {
  MapPin,
  Star,
  ArrowRight,
  Utensils,
  Leaf,
  Drumstick,
  SlidersHorizontal
} from "lucide-react";

import caterers from "../data/caterers";
import "../styles/Catering.css";

function Catering() {

  const [foodFilter, setFoodFilter] = useState("all");

  const filteredCaterers = caterers.filter((caterer) => {
    if (foodFilter === "veg") return caterer.vegetarian;
    if (foodFilter === "nonveg") return caterer.nonVegetarian;
    return true;
  });

  return (
    <section className="catering-section section-padding" id="catering">

      <div className="container">

        <div className="catering-header">

          <div>
            <span className="catering-eyebrow">
              <Utensils size={15} />
              A FEAST TO REMEMBER
            </span>

            <h2 className="section-heading">
              Exceptional Food for
              <br />
              <span>Your Special Day</span>
            </h2>

            <p className="section-subtitle">
              Discover trusted wedding caterers, explore delicious
              menus and find the perfect food experience for your guests.
            </p>
          </div>

          <a href="#all-caterers" className="catering-view-all">
            Explore All Caterers
            <ArrowRight size={17} />
          </a>

        </div>

        <div className="catering-filter-bar">

          <div className="catering-filter-title">
            <SlidersHorizontal size={17} />
            <span>Filter by food preference</span>
          </div>

          <div className="catering-filter-buttons">

            <button
              className={foodFilter === "all" ? "active" : ""}
              onClick={() => setFoodFilter("all")}
            >
              All Caterers
            </button>

            <button
              className={foodFilter === "veg" ? "active" : ""}
              onClick={() => setFoodFilter("veg")}
            >
              <Leaf size={14} />
              Vegetarian
            </button>

            <button
              className={foodFilter === "nonveg" ? "active" : ""}
              onClick={() => setFoodFilter("nonveg")}
            >
              <Drumstick size={14} />
              Non-Vegetarian
            </button>

          </div>

        </div>

        <div className="catering-grid">

          {filteredCaterers.map((caterer) => (

            <article className="catering-card" key={caterer.id}>

              <div className="catering-image-wrapper">

                <img
                  src={caterer.image}
                  alt={caterer.name}
                  loading="lazy"
                />

                <span className="catering-tag">
                  {caterer.tag}
                </span>

                <div className="catering-rating">
                  <Star size={13} fill="currentColor" />
                  {caterer.rating}
                  <span>({caterer.reviews})</span>
                </div>

              </div>

              <div className="catering-card-content">

                <span className="catering-cuisine">
                  {caterer.cuisine}
                </span>

                <h3>{caterer.name}</h3>

                <div className="catering-location">
                  <MapPin size={15} />
                  {caterer.location}
                </div>

                <div className="catering-food-types">

                  {caterer.vegetarian && (
                    <span className="veg-label">
                      <Leaf size={13} />
                      Vegetarian
                    </span>
                  )}

                  {caterer.nonVegetarian && (
                    <span className="nonveg-label">
                      <Drumstick size={13} />
                      Non-Vegetarian
                    </span>
                  )}

                </div>

                <div className="catering-card-footer">

                  <div className="catering-price">
                    <span>{caterer.priceLabel}</span>
                    <strong>{caterer.price}</strong>
                  </div>

                  <button
                    onClick={() =>
                      alert(`Menu for ${caterer.name} coming soon!`)
                    }
                  >
                    View Menu
                    <ArrowRight size={14} />
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

        <div className="catering-provider-banner">

          <div>
            <span>ARE YOU A CATERING PROFESSIONAL?</span>
            <h3>Bring Your Culinary Expertise to More Weddings.</h3>
            <p>
              Showcase your menus, manage enquiries and grow
              your catering business through our marketplace.
            </p>
          </div>

          <button
            onClick={() => alert("Catering registration coming soon!")}
          >
            Register as Caterer
            <ArrowRight size={17} />
          </button>

        </div>

      </div>

    </section>
  );
}

export default Catering;