import React, { useState } from "react";
import {
  MapPin,
  CalendarDays,
  Users,
  Search,
  ArrowRight,
  Sparkles
} from "lucide-react";

import "../styles/Hero.css";

function Hero() {
  const [location, setLocation] = useState("");
  const [weddingDate, setWeddingDate] = useState("");
  const [guests, setGuests] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    console.log({
      location,
      weddingDate,
      guests
    });

    alert("Your venue search is ready!");
  };

  return (
    <section className="hero-section" id="home">

      <div className="hero-overlay"></div>

      <div className="hero-content container">

        <div className="hero-text">

          <div className="hero-tag">
            <Sparkles size={15} />
            <span>YOUR DREAM WEDDING STARTS HERE</span>
          </div>

          <h1>
            Every Love Story
            <br />
            Deserves a <span>Beautiful</span>
            <br />
            Beginning.
          </h1>

          <p>
            Discover extraordinary venues, talented wedding
            professionals and everything you need to create
            a celebration that feels truly yours.
          </p>

          <div className="hero-buttons">
            <a href="#venues" className="hero-primary-btn">
              Explore Venues
              <ArrowRight size={17} />
            </a>

            <a href="#services" className="hero-secondary-btn">
              Discover Services
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <strong>500+</strong>
              <span>Wedding Venues</span>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <strong>1,200+</strong>
              <span>Trusted Vendors</span>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <strong>2,000+</strong>
              <span>Happy Couples</span>
            </div>
          </div>

        </div>

        <div className="hero-search-wrapper">

          <div className="hero-search-heading">
            <div>
              <span>LET'S FIND YOUR PERFECT PLACE</span>
              <h3>Plan Your Celebration</h3>
            </div>
            <Sparkles size={23} />
          </div>

          <form className="hero-search-form" onSubmit={handleSearch}>

            <div className="search-field">
              <label>
                <MapPin size={17} />
                Location
              </label>

              <input
                type="text"
                placeholder="Where are you planning?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="search-field">
              <label>
                <CalendarDays size={17} />
                Wedding Date
              </label>

              <input
                type="date"
                value={weddingDate}
                onChange={(e) => setWeddingDate(e.target.value)}
              />
            </div>

            <div className="search-field">
              <label>
                <Users size={17} />
                Number of Guests
              </label>

              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value="">Select guests</option>
                <option value="Below 100">Below 100</option>
                <option value="100 - 300">100 - 300</option>
                <option value="300 - 500">300 - 500</option>
                <option value="500 - 1000">500 - 1000</option>
                <option value="Above 1000">Above 1000</option>
              </select>
            </div>

            <button type="submit" className="hero-search-btn">
              <Search size={19} />
              Find Venues
            </button>

          </form>

          <p className="search-note">
            Find a place where your forever begins.
          </p>

        </div>

      </div>

      <div className="hero-bottom-decoration">
        <span>CELEBRATE LOVE</span>
        <div></div>
        <span>CREATE MEMORIES</span>
      </div>

    </section>
  );
}

export default Hero;