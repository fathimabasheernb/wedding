import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedVenues from "./components/FeaturedVenues";
import WeddingServices from "./components/WeddingServices";
import Catering from "./components/Catering";
import CustomCreations from "./components/CustomCreations";
import Inspiration from "./components/Inspiration";
import Footer from "./components/Footer";

function App() {

  return (

    <>

      <Navbar />
      <Hero />
      <FeaturedVenues />
      <WeddingServices />
      <Catering />
      <CustomCreations />
      <Inspiration />
      <Footer />

      <main id="home">

        <div style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center"
        }}>

          <h1 className="section-heading">
            Welcome to Your Wedding Marketplace
          </h1>

          <p className="section-subtitle">
            Your beautiful wedding journey starts here.
          </p>

        </div>

      </main>

    </>

  );

}

export default App;