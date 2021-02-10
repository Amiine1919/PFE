import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <div className="div-0">
      <section className="footer">
        <div className="div-1">
          <ul>
            <span>Coordonnées :</span>
            <br />
            <li>
              <i class="fas fa-industry"></i>
              {"  "}
              Tunisie Tomaia
            </li>
            <li>
              <i class="fas fa-map-marked-alt"></i>
              {"  "}
              Rue abou bakker errazi, 8030 Grombalia, Tunisie
            </li>
            <li>
              <i class="fas fa-phone-square-alt"></i>
              {"  "}
              Téléphone : 22 449 879
            </li>
            <li>
              <i class="fas fa-fax"></i>
              {"  "}
              Fax : 72 255 255
            </li>
            <li>
              <i class="fas fa-mail-bulk"></i>
              {"  "}
              Email : tunisietomaia@gmail.com
            </li>
          </ul>
        </div>
        <div className="div-2">
          <img src="/Images/officialLogo.png" alt="logo" />
        </div>
        <div className="div-3">
          <ul>
            <span>Services :</span>
            <br />
            <li>
              <i class="fas fa-check-square"></i>
              {"  "}
              Fabrication de chaussures et de tiges
            </li>
            <li>
              <i class="fas fa-check-square"></i>
              {"  "}
              Homme, Femme et Enfants
            </li>
            <li>
              <i class="fas fa-check-square"></i>
              {"  "}
              Sous Traitance
            </li>
            <li>
              <i class="fas fa-check-square"></i>
              {"  "}
              Co-Traitance
            </li>
            <li>
              <i class="fas fa-check-square"></i>
              {"  "}
              Produit fini
            </li>
          </ul>
        </div>
      </section>
      <div className="copyrights">
        <p>
          &copy; {new Date().getFullYear()} Copyrights:{" "}
          <a href="/"> Tunisie Tomaia </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
