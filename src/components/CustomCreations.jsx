import React, { useState } from "react";

import {
  Palette,
  Heart,
  Gift,
  Flower2,
  X,
  Sparkles,
  ArrowRight,
  CalendarDays,
  MessageSquare,
  Check
} from "lucide-react";

import creations from "../data/creations";
import "../styles/CustomCreations.css";

function CustomCreations() {

  const [selectedCreation, setSelectedCreation] = useState(null);

  const [formData, setFormData] = useState({
    names: "",
    date: "",
    color: "Sage Green",
    style: "Elegant",
    message: "",
    giftType: "Personalised Gift Box",
    flowers: "Roses"
  });

  const updateField = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value
    }));
  };

  const openCustomizer = (creation) => {
    setSelectedCreation(creation);

    setFormData({
      names: "",
      date: "",
      color: "Sage Green",
      style: "Elegant",
      message: "",
      giftType: "Personalised Gift Box",
      flowers: "Roses"
    });
  };

  const closeCustomizer = () => {
    setSelectedCreation(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const customOrder = {
      product: selectedCreation.title,
      ...formData
    };

    console.log("Custom creation request:", customOrder);

    alert(
      "Your custom design request has been prepared! Order submission will be available soon."
    );
  };

  return (
    <section
      className="custom-section section-padding"
      id="custom-creations"
    >

      <div className="container">

        <div className="custom-heading">

          <span className="custom-eyebrow">
            <Sparkles size={15} />
            MADE PERSONAL, MADE SPECIAL
          </span>

          <h2 className="section-heading">
            Create Something
            <br />
            <span>Uniquely Yours</span>
          </h2>

          <p className="section-subtitle">
            Your wedding deserves personal touches.
            Design invitations, thoughtful gifts and beautiful
            bouquets that reflect your story.
          </p>

        </div>

        <div className="custom-intro-banner">

          <div className="custom-intro-icon">
            <Palette size={27} />
          </div>

          <div>
            <h3>Your Ideas. Your Style. Your Creation.</h3>
            <p>
              Choose a product, personalise the details and
              preview your design before requesting an order.
            </p>
          </div>

        </div>

        <div className="creations-grid">

          {creations.map((creation) => (

            <article className="creation-card" key={creation.id}>

              <div className="creation-image-wrapper">

                <img
                  src={creation.image}
                  alt={creation.title}
                  loading="lazy"
                />

                <span className="creation-category">
                  {creation.category}
                </span>

              </div>

              <div className="creation-content">

                <h3>{creation.title}</h3>

                <p>{creation.description}</p>

                <div className="creation-footer">

                  <div className="creation-price">
                    <span>Starting from</span>
                    <strong>{creation.startingPrice}</strong>
                    <small>{creation.priceUnit}</small>
                  </div>

                  <button
                    onClick={() => openCustomizer(creation)}
                    className="customize-btn"
                  >
                    <Palette size={15} />
                    Customise
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

        <div className="custom-bottom-note">
          <Heart size={17} />
          <p>
            Every detail matters. Make your wedding celebration
            truly yours.
          </p>
        </div>

      </div>

      {/* CUSTOMIZATION MODAL */}

      {selectedCreation && (

        <div
          className="custom-modal-overlay"
          onClick={closeCustomizer}
        >

          <div
            className="custom-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="custom-modal-header">

              <div>
                <span>PERSONALISATION STUDIO</span>
                <h2>{selectedCreation.title}</h2>
              </div>

              <button
                className="custom-modal-close"
                onClick={closeCustomizer}
              >
                <X size={21} />
              </button>

            </div>

            <div className="custom-modal-body">

              <form
                className="custom-form"
                onSubmit={handleSubmit}
              >

                <div className="custom-form-group">

                  <label>Your Names</label>

                  <input
                    type="text"
                    placeholder="e.g. Adam & Aisha"
                    value={formData.names}
                    onChange={(e) =>
                      updateField("names", e.target.value)
                    }
                    required
                  />

                </div>

                <div className="custom-form-group">

                  <label>
                    <CalendarDays size={15} />
                    Wedding Date
                  </label>

                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      updateField("date", e.target.value)
                    }
                  />

                </div>

                <div className="custom-form-group">

                  <label>Choose Your Colour</label>

                  <select
                    value={formData.color}
                    onChange={(e) =>
                      updateField("color", e.target.value)
                    }
                  >
                    <option>Sage Green</option>
                    <option>Burgundy</option>
                    <option>Blush Pink</option>
                    <option>Ivory Cream</option>
                    <option>Royal Blue</option>
                    <option>Lavender</option>
                    <option>Gold</option>
                  </select>

                </div>

                <div className="custom-form-group">

                  <label>Design Style</label>

                  <select
                    value={formData.style}
                    onChange={(e) =>
                      updateField("style", e.target.value)
                    }
                  >
                    <option>Elegant</option>
                    <option>Traditional</option>
                    <option>Minimal</option>
                    <option>Floral</option>
                    <option>Luxury</option>
                    <option>Modern</option>
                  </select>

                </div>

                {selectedCreation.category === "Gifts" && (

                  <div className="custom-form-group">

                    <label>
                      <Gift size={15} />
                      Gift Type
                    </label>

                    <select
                      value={formData.giftType}
                      onChange={(e) =>
                        updateField("giftType", e.target.value)
                      }
                    >
                      <option>Personalised Gift Box</option>
                      <option>Couple Gift Set</option>
                      <option>Wedding Return Gifts</option>
                      <option>Personalised Mugs</option>
                      <option>Custom Photo Frames</option>
                    </select>

                  </div>

                )}

                {selectedCreation.category === "Bouquets" && (

                  <div className="custom-form-group">

                    <label>
                      <Flower2 size={15} />
                      Preferred Flowers
                    </label>

                    <select
                      value={formData.flowers}
                      onChange={(e) =>
                        updateField("flowers", e.target.value)
                      }
                    >
                      <option>Roses</option>
                      <option>Tulips</option>
                      <option>Orchids</option>
                      <option>Lilies</option>
                      <option>Mixed Flowers</option>
                      <option>Preserved Flowers</option>
                    </select>

                  </div>

                )}

                <div className="custom-form-group">

                  <label>
                    <MessageSquare size={15} />
                    Personal Message
                  </label>

                  <textarea
                    placeholder="Write your message or special instructions..."
                    value={formData.message}
                    onChange={(e) =>
                      updateField("message", e.target.value)
                    }
                    rows="3"
                  />

                </div>

                <button
                  type="submit"
                  className="custom-submit-btn"
                >
                  Request Custom Order
                  <ArrowRight size={17} />
                </button>

              </form>

              {/* LIVE PREVIEW */}

              <div className="custom-preview">

                <div className="preview-heading">
                  <Sparkles size={17} />
                  <span>LIVE DESIGN PREVIEW</span>
                </div>

                <div
                  className={`preview-design preview-${selectedCreation.category.toLowerCase()}`}
                  style={{
                    "--preview-color":
                      formData.color === "Sage Green"
                        ? "#82947C"
                        : formData.color === "Burgundy"
                        ? "#742F40"
                        : formData.color === "Blush Pink"
                        ? "#D9A7A7"
                        : formData.color === "Royal Blue"
                        ? "#405A83"
                        : formData.color === "Lavender"
                        ? "#A99AC7"
                        : formData.color === "Gold"
                        ? "#C5A66B"
                        : "#E8DFCF"
                  }}
                >

                  {selectedCreation.category === "Invitations" && (
                    <>
                      <span className="preview-small-text">
                        TOGETHER WITH THEIR FAMILIES
                      </span>

                      <h2>
                        {formData.names || "Your Names"}
                      </h2>

                      <span className="preview-design-divider">
                        ✦
                      </span>

                      <p>
                        REQUEST THE PLEASURE OF YOUR COMPANY
                      </p>

                      <strong>
                        {formData.date || "Your Wedding Date"}
                      </strong>
                    </>
                  )}

                  {selectedCreation.category === "Gifts" && (
                    <>
                      <Gift size={36} />

                      <span className="preview-small-text">
                        A LITTLE SOMETHING SPECIAL FOR
                      </span>

                      <h2>
                        {formData.names || "Your Names"}
                      </h2>

                      <strong>{formData.giftType}</strong>
                    </>
                  )}

                  {selectedCreation.category === "Bouquets" && (
                    <>
                      <Flower2 size={42} />

                      <h2>
                        {formData.flowers}
                      </h2>

                      <strong>
                        For {formData.names || "Your Special Someone"}
                      </strong>
                    </>
                  )}

                  {formData.message && (
                    <p className="preview-message">
                      "{formData.message}"
                    </p>
                  )}

                </div>

                <div className="preview-details">

                  <p>
                    <span>Colour</span>
                    <strong>{formData.color}</strong>
                  </p>

                  <p>
                    <span>Style</span>
                    <strong>{formData.style}</strong>
                  </p>

                  <p>
                    <span>Product</span>
                    <strong>{selectedCreation.category}</strong>
                  </p>

                </div>

                <div className="preview-tip">
                  <Check size={15} />
                  Your changes appear in the preview automatically.
                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default CustomCreations;