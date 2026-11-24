import React, { useState } from "react";

import {
  Heart,
  ArrowRight,
  Sparkles,
  X,
  Bookmark
} from "lucide-react";

import inspirations from "../data/inspirations";
import "../styles/Inspiration.css";

function Inspiration() {

  const [activeCategory, setActiveCategory] = useState("All");
  const [savedItems, setSavedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    "All",
    "Decoration",
    "Bridal Looks",
    "Flowers",
    "Stage Design",
    "Photography",
    "Colour Themes"
  ];

  const filteredInspirations =
    activeCategory === "All"
      ? inspirations
      : inspirations.filter(
          (item) => item.category === activeCategory
        );

  const toggleSave = (id) => {
    setSavedItems((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  return (
    <section className="inspiration-section section-padding" id="inspiration">

      <div className="container">

        <div className="inspiration-header">

          <div>
            <span className="inspiration-eyebrow">
              <Sparkles size={15} />
              IDEAS THAT INSPIRE
            </span>

            <h2 className="section-heading">
              Imagine It. Plan It.
              <br />
              <span>Make It Beautiful.</span>
            </h2>

            <p className="section-subtitle">
              Explore wedding inspiration, discover beautiful
              styles and collect ideas for your dream celebration.
            </p>
          </div>

          <div className="inspiration-count">
            <strong>01 — 06</strong>
            <span>CURATED IDEAS</span>
          </div>

        </div>

        <div className="inspiration-filters">

          {categories.map((category) => (

            <button
              key={category}
              className={
                activeCategory === category ? "active" : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>

          ))}

        </div>

        <div className="inspiration-grid">

          {filteredInspirations.map((item) => (

            <article className="inspiration-card" key={item.id}>

              <div className="inspiration-image-wrapper">

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <span className="inspiration-category">
                  {item.category}
                </span>

                <button
                  className={`inspiration-save ${
                    savedItems.includes(item.id) ? "saved" : ""
                  }`}
                  onClick={() => toggleSave(item.id)}
                  aria-label="Save inspiration"
                >
                  <Heart
                    size={18}
                    fill={
                      savedItems.includes(item.id)
                        ? "currentColor"
                        : "none"
                    }
                  />
                </button>

                <button
                  className="inspiration-view"
                  onClick={() => setSelectedItem(item)}
                >
                  View Inspiration
                  <ArrowRight size={15} />
                </button>

              </div>

              <div className="inspiration-card-content">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </article>

          ))}

        </div>

        <div className="inspiration-bottom">

          <div>
            <Bookmark size={18} />
            <span>
              Save your favourite ideas and create your own wedding vision.
            </span>
          </div>

          <span className="inspiration-bottom-decoration">
            MADE WITH LOVE ✦
          </span>

        </div>

      </div>

      {/* Inspiration detail modal */}

      {selectedItem && (

        <div
          className="inspiration-modal-overlay"
          onClick={() => setSelectedItem(null)}
        >

          <div
            className="inspiration-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="inspiration-modal-close"
              onClick={() => setSelectedItem(null)}
            >
              <X size={21} />
            </button>

            <img
              src={selectedItem.image}
              alt={selectedItem.title}
            />

            <div className="inspiration-modal-content">

              <span>{selectedItem.category}</span>

              <h2>{selectedItem.title}</h2>

              <p>{selectedItem.description}</p>

              <button
                onClick={() => toggleSave(selectedItem.id)}
              >
                <Heart
                  size={17}
                  fill={
                    savedItems.includes(selectedItem.id)
                      ? "currentColor"
                      : "none"
                  }
                />

                {savedItems.includes(selectedItem.id)
                  ? "Saved to Wishlist"
                  : "Save This Inspiration"}
              </button>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Inspiration;