import { useState } from "react";
import userIcon from "./assets/images/user.png";
import locationIcon from "./assets/images/location.png";
import serverIcon from "./assets/images/Server.png";
import featureImage from "./assets/images/corp.jpeg";
import checkIcon from "./assets/images/check.png";
import rome from "./assets/images/rome.jpeg";
import maldives from "./assets/images/maldives.jpeg";
import france from "./assets/images/paris.jpeg";

import Modal from "./Modal";
import Contact from "./Contact";

import "./App.css";

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal open={modalVisible} close={() => setModalVisible(false)}>
        <Contact />
      </Modal>

      <header>
        <nav>
          <div>
            <p className="logo">BagTrip</p>
          </div>
          <div>
            <button
              className="btn_primary"
              onClick={() => setModalVisible(true)}
            >
              Log In
            </button>
          </div>
        </nav>
        <div className="header_hero">
          <h1>Where do you want to go ?</h1>
          <p>
            The all-in-one business travel platform. Our primary focus is
            delivering in-depth and first-class tourism and hospitality services
            for corporate bodies and businesses across the globe.
          </p>

          <div>
            <button
              className="btn_primary"
              onClick={() => setModalVisible(true)}
            >
              Contact Us
            </button>
          </div>
        </div>
      </header>
      <section className="statistics_section">
        <div className="stat_card">
          <div>
            <img src={userIcon} alt="user" />
          </div>
          <div>
            <h2>900+</h2>
            <p>Trips</p>
          </div>
        </div>
        <div className="stat_card">
          <div>
            <img src={locationIcon} alt="location" />
          </div>
          <div>
            <h2>98.6%</h2>
            <p>Satisfaction rate</p>
          </div>
        </div>
        <div className="stat_card">
          <div>
            <img src={serverIcon} alt="server" />
          </div>
          <div>
            <h2>100%</h2>
            <p>Security and Discretion</p>
          </div>
        </div>
      </section>
      <section className="section_features">
        <div className="section_flex">
          <img src={featureImage} alt="features" />
        </div>
        <div className="section_flex_info">
          <h2>Our Services</h2>
          <div className="info_check">
            <p>
              <img src={checkIcon} alt="check icon" />
              Corporate Visa Counselling
            </p>
            <p>
              <img src={checkIcon} alt="check icon" />
              Corporate Travel Insurance
            </p>
            <p>
              <img src={checkIcon} alt="check icon" />
              Corporate Travel
            </p>
            <p>
              <img src={checkIcon} alt="check icon" />
              Corporate Ticketing and Reservations
            </p>
            <p>
              <img src={checkIcon} alt="check icon" />
              Corporate International Conferences / Fairs
            </p>
            <p>
              <img src={checkIcon} alt="check icon" />
              Corporate immigration Services
            </p>
            <p>
              <img src={checkIcon} alt="check icon" />
              Corporate Expatriate Management
            </p>
          </div>
        </div>
      </section>

      <section class="bestT">
        <h2>Our Best Tour</h2>
        <p>
          These are locations where we recommend for your team to feel
          healthier, happier and less stressed than before. Sourced from the
          Global Retirement Index
        </p>

        <div class="cities">
          <div>
            <img src={rome} alt="rome" />
            <p>Rome, Italy</p>
            <p>$ 3000</p>
          </div>
          <div>
            <img src={maldives} alt="maldives" />
            <p>Maldives</p>
            <p>$ 5900</p>
          </div>
          <div>
            <img src={france} alt="paris" />
            <p>Paris, France</p>
            <p>$ 8870</p>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <p>Copyright © 2020 BagTrip</p>
        </div>
        <div>
          <h2>Address</h2>
          <p>Nigeria- Plot 8 The Providence St, Lekki Phase I, Lekki</p>
          <p>Kenya- Royal Offices, Mogotio Road, Westland District, Nairobi</p>
        </div>
      </footer>
    </>
  );
}

export default App;
