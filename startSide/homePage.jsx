import React from "react"; // Importerer React-biblioteket
import Image from "./../images/gkmit.jpeg"; // Importerer et bilde fra den angitte banen
import "./Home.css"; // Importerer stilark for denne komponenten

const Home = () => { // Definerer Home-komponenten
  return (
    <>
      <section id="hero"> {/* Definerer en seksjon med id "hero" */}
        <div className="heroContainer"> {/* En container-div for innholdet i hero-seksjonen */}
          <div className="heroLogo"> {/* En div for logoen */}
            <img src={Image} alt="testRestaurant is busy"/> {/* Viser bildet av restauranten */}
          </div>
          <h1>Welcome To testRestaurant</h1> {/* Viser en velkomstmelding */}
          <h2>Delight in every bite</h2> {/* Viser en underoverskrift */}
          <div className="actions"> {/* En div for handlingselementer (knapper) */}
            <a href="/login" className="main2">Login</a> {/* Lenke til innloggingssiden */}
            <a href="/register" className="main1">Register</a> {/* Lenke til registreringssiden */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home; // Eksporterer Home-komponenten som standard eksport
