import React from "react";
import Pant1 from "../../assets/images/pant1.webp";
import Shirt1 from "../../assets/images/shirt1.jpg";
import Shoe1 from "../../assets/images/shoe4.webp";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./About.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-cont">
        <div className="cotainer-fluid">
          <h2>About Our Store</h2>
          <div className="about-inner">
            <div className="about-grid">
              <img src={Pant1} alt="" />
              <div>
                <h3>Premium Dress Pants</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia corrupti unde, quaerat iusto exercitationem
                  perferendis dicta quasi? Porro nostrum libero suscipit, harum
                  voluptas magni id earum, adipisci fugiat nobis non!
                </p>
              </div>
            </div>

            <div className="about-grid">
              <img src={Shirt1} alt="" />
              <div>
                <h3>Royal Shirts</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia corrupti unde, quaerat iusto exercitationem
                  perferendis dicta quasi? Porro nostrum libero suscipit, harum
                  voluptas magni id earum, adipisci fugiat nobis non!
                </p>
              </div>
            </div>

            <div className="about-grid">
              <img src={Shoe1} alt="" />
              <div>
                <h3>Comfortable Shoes</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia corrupti unde, quaerat iusto exercitationem
                  perferendis dicta quasi? Porro nostrum libero suscipit, harum
                  voluptas magni id earum, adipisci fugiat nobis non!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
