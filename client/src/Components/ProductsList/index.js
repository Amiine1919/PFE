import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "./index.css";

const breakPoints = [
  { width: 300, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];
const ProductsList = () => {
  return (
    <div>
      <NavBar />
      <div className="title-products">
        <span>Les produits temoins de notre savoir faire !</span>
      </div>
      <div className="products">
        <div className="category">
          <span style={{ textAlign: "center" }}>Enfants</span>
        </div>
        <br />
        <div className="product">
          <Carousel breakPoints={breakPoints}>
            <Item>
              <img src="/Images/Products/Product1.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product2.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product3.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product4.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product5.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product6.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product7.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product8.jpg" alt="Product" />
            </Item>
          </Carousel>
        </div>
        <br />
        <div className="category">
          <span style={{ textAlign: "center" }}>Femmes</span>
        </div>
        <br />
        <div className="product">
          <Carousel breakPoints={breakPoints}>
            <Item>
              <img src="/Images/Products/Product9.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product10.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product11.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product12.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product13.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product14.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product15.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product16.jpg" alt="Product" />
            </Item>
          </Carousel>
        </div>
        <br />
        <div className="category">
          <span style={{ textAlign: "center" }}>Hommes</span>
        </div>
        <br />
        <div className="product">
          <Carousel breakPoints={breakPoints}>
            <Item>
              <img src="/Images/Products/Product17.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product18.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product19.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product20.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product21.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product22.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product15.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product16.jpg" alt="Product" />
            </Item>
          </Carousel>
        </div>
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default ProductsList;
