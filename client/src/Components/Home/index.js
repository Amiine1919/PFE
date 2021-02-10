import React from "react";

import NavBar from "../NavBar";
import Footer from "../Footer";
import "./index.css";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="bgImage">
        <Container id="headerHome"></Container>
      </div>
      <div className="div1">
        <div className="div1-11"></div>
        <div className="div1-2">
          <span>Présentation </span>
          <p>
            C’est à Grombalia, petite ville située à une quarantaine de
            kilomètres au sud-est de Tunis dans la région de Nabeul, que
            l’entreprise est installée depuis 2015. Tunisie Tomaia est une
            entreprise spécialisée dans la fabrication de chaussures et de tiges
            de chaussures pour différents clients européens.
          </p>
          <span>Services</span>
          <ul>
            <li>
              <i class="far fa-check-square"></i> Conception et Modélisation
              (CAO)
            </li>
            <li>
              <i class="far fa-check-square"></i> Complexité des modèles
            </li>
            <li>
              <i class="far fa-check-square"></i> Approvisionnement des matières
            </li>
            <li>
              <i class="far fa-check-square"></i> Personnel hautement qualifié
            </li>
            <li>
              <i class="far fa-check-square"></i> Suivi de la production en
              temps réel
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className="div1">
        <div className="div1-2">
          <span>Réalisations </span>
          <p>
            C’est à Grombalia, petite ville située à une quarantaine de
            kilomètres au sud-est de Tunis dans la région de Nabeul, que
            l’entreprise est installée depuis 2015. Tunisie Tomaia est une
            entreprise spécialisée dans la fabrication de chaussures et de tiges
            de chaussures pour différents clients européens.
          </p>
          <span>Features</span>
          <ul>
            <li>
              <i class="far fa-check-square"></i> Conception et Modélisation
              (CAO)
            </li>
            <li>
              <i class="far fa-check-square"></i> Complexité des modèles
            </li>
            <li>
              <i class="far fa-check-square"></i> Approvisionnement des matières
            </li>
            <li>
              <i class="far fa-check-square"></i> Personnel hautement qualifié
            </li>
            <li>
              <i class="far fa-check-square"></i> Suivi de la production en
              temps réel
            </li>
          </ul>
        </div>
        <div className="div1-12"></div>
      </div>
      <br />
      <div className="div1">
        <div className="div1-13"></div>
        <div className="div1-2">
          <span>Partenaires </span>
          <p>
            C’est à Grombalia, petite ville située à une quarantaine de
            kilomètres au sud-est de Tunis dans la région de Nabeul, que
            l’entreprise est installée depuis 2015. Tunisie Tomaia est une
            entreprise spécialisée dans la fabrication de chaussures et de tiges
            de chaussures pour différents clients européens.
          </p>
          <span>Marques</span>
          <ul>
            <li>
              <i class="far fa-check-square"></i> Conception et Modélisation
              (CAO)
            </li>
            <li>
              <i class="far fa-check-square"></i> Complexité des modèles
            </li>
            <li>
              <i class="far fa-check-square"></i> Approvisionnement des matières
            </li>
            <li>
              <i class="far fa-check-square"></i> Personnel hautement qualifié
            </li>
            <li>
              <i class="far fa-check-square"></i> Suivi de la production en
              temps réel
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
