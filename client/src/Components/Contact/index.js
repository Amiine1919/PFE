import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import "./index.css";

import MyForm from "./myForm";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <br />
      <MyForm />
      <br />
      <br />
      <div className="div-map0">
        <div className="div-map1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d800.818372614848!2d10.501418720631225!3d36.5957216802099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd5b3f017e0f6f%3A0x1924dac5e2f0e59a!2sINFOMED%20PLUS!5e0!3m2!1sfr!2sfr!4v1612711060432!5m2!1sfr!2sfr"
            width="600"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Contact;
