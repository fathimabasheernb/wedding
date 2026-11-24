import React, { useState } from "react";

import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart
} from "lucide-react";

import "../styles/Footer.css";

function Footer() {

  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="marketplace-footer">

      <div className="footer-main container">

        {/* Brand Section */}

        <div className="footer-brand">

          <div className="footer-logo">
            <div className="footer-logo-icon">W</div>

            <div>
              <h2>WEDDING MARKETPLACE</h2>
              <span>EVERY DETAIL, BEAUTIFULLY CONNECTED</span>
            </div>
          </div>

          <p>
            Discover beautiful venues, talented wedding professionals,
            exceptional catering and personalised creations.
            Everything you need to make your special day unforgettable.
          </p>

          <div className="footer-socials">

            <a href="#instagram" aria-label="Instagram">
              <Instagram size={18} />
            </a>

            <a href="#facebook" aria-label="Facebook">
              <Facebook size={18} />
            </a>

            <a href="#youtube" aria-label="YouTube">
              <Youtube size={18} />
            </a>

          </div>

        </div>


        {/* Quick Links */}

        <div className="footer-column">

          <h3>Explore</h3>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#venues">Wedding Venues</a></li>
            <li><a href="#services">Wedding Services</a></li>
            <li><a href="#catering">Catering</a></li>
            <li><a href="#creations">Custom Creations</a></li>
            <li><a href="#inspiration">Inspiration Gallery</a></li>
          </ul>

        </div>


        {/* Vendor Links */}

        <div className="footer-column">

          <h3>For Partners</h3>

          <ul>
            <li><a href="#vendor">Become a Vendor</a></li>
            <li><a href="#venue-owner">List Your Venue</a></li>
            <li><a href="#event-organizer">Event Organizers</a></li>
            <li><a href="#caterer">Register as Caterer</a></li>
            <li><a href="#seller">Sell Custom Creations</a></li>
            <li><a href="#partner">Partner With Us</a></li>
          </ul>

        </div>


        {/* Support */}

        <div className="footer-column footer-contact">

          <h3>Get in Touch</h3>

          <p>
            <Mail size={16} />
            support@weddingmarketplace.com
          </p>

          <p>
            <Phone size={16} />
            +91 98765 43210
          </p>

          <p>
            <MapPin size={16} />
            Kerala, India
          </p>

          <div className="footer-support-links">
            <a href="#help">Help Centre</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>

        </div>

      </div>


      {/* Newsletter */}

      <div className="footer-newsletter container">

        <div>
          <span className="newsletter-label">STAY INSPIRED</span>

          <h2>
            A little wedding magic,
            <br />
            delivered to your inbox.
          </h2>
        </div>

        <form onSubmit={handleSubscribe}>

          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">
            Subscribe
            <ArrowRight size={17} />
          </button>

        </form>

      </div>


      {/* Bottom Footer */}

      <div className="footer-bottom">

        <div className="container footer-bottom-content">

          <p>
            © {new Date().getFullYear()} Wedding Marketplace.
            All rights reserved.
          </p>

          <p className="footer-made">
            Made with <Heart size={14} fill="currentColor" /> for beautiful beginnings.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;