import React from "react";

import {
  ArrowRight,
  MoveUpRight,
  Sparkles
} from "lucide-react";

import services from "../data/services";
import "../styles/WeddingServices.css";

function WeddingServices() {

  const handleExplore = (serviceName) => {
    alert(`Explore ${serviceName} providers – Coming soon!`);
  };

  return (
    <section className="services-section section-padding" id="services">

      <div className="container">

        <div className="services-header">

          <div>
            <span className="services-eyebrow">
              <Sparkles size={14} />
              EVERYTHING YOUR WEDDING NEEDS
            </span>

            <h2 className="section-heading">
              Meet the People Behind
              <br />
              <span>Your Perfect Celebration</span>
            </h2>

            <p className="section-subtitle">
              Connect with talented wedding professionals who
              turn your ideas into unforgettable experiences.
            </p>
          </div>

          <a href="#all-services" className="services-view-all">
            Explore All Services
            <ArrowRight size={17} />
          </a>

        </div>

        <div className="services-grid">

          {services.map((service) => (

            <article className="service-card" key={service.id}>

              <div className="service-image-wrapper">

                <img
                  src={service.image}
                  alt={service.name}
                  loading="lazy"
                />

                <div className="service-image-overlay"></div>

                <button
                  className="service-arrow"
                  onClick={() => handleExplore(service.name)}
                  aria-label={`Explore ${service.name}`}
                >
                  <MoveUpRight size={19} />
                </button>

              </div>

              <div className="service-card-content">

                <span className="service-provider-count">
                  {service.providers}
                </span>

                <h3>{service.name}</h3>

                <p>{service.description}</p>

                <button
                  className="service-explore-link"
                  onClick={() => handleExplore(service.name)}
                >
                  Explore Providers
                  <ArrowRight size={15} />
                </button>

              </div>

            </article>

          ))}

        </div>

        <div className="services-bottom-banner">

          <div>
            <span>ARE YOU A WEDDING PROFESSIONAL?</span>
            <h3>Grow Your Business With Us.</h3>
            <p>
              Showcase your services and connect with couples
              planning their dream wedding.
            </p>
          </div>

          <button
            onClick={() => alert("Provider registration coming soon!")}
          >
            Become a Provider
            <ArrowRight size={17} />
          </button>

        </div>

      </div>

    </section>
  );
}

export default WeddingServices;