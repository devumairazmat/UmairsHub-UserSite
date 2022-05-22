import React from "react";
import Card from "../../components/card/Card";
import Contactus from "../../components/contactus/Contactus";
import Feedback from "../../components/feedback/Feedback";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import shirt1 from "../../assets/images/shirt1.jpg";
import "./Store.css";

function Store() {
  return (
    <>
      <Navbar />
      <div id="cont-bak" className="container bg-light mt-4 mb-4">
        <div className="row mt-4 mb-4">
          <div className="col p-4">
            <p className="mt-4  p-2">IT'S EASY</p>
            <h1 className="mb-4  p-2">
              Make your life better with our Products
            </h1>
          </div>
          <div className="col p-4">
            <p className="mt-4  p-2">
              We have made quality our habit. It’s not something that we just
              strive for – we live by this principle every day.
            </p>
            <br />
            <br />
            <p className="mt-1  p-2">
              While most of the things about the creative process will be
              forgotten, the excellence of our products and services will be
              remembered.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container text-center heading-4 mt-4 mb-4">
        Our Products
      </div>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col">
            <Card
              img={shirt1}
              description="Hanes Men's 12 Pack Crew Socks, White, 10-13/Shoe Size 6-12, 10-13 / Shoe: 6-12"
              price="20.00$"
            />
          </div>
          <div className="col">
            <Card
              img={shirt1}
              title="Shoe"
              description="Hanes Men's 12 Pack Crew Socks, White, 10-13/Shoe Size 6-12, 10-13 / Shoe: 6-12"
              price="20.00$"
            />
          </div>
          <div className="col">
            <Card
              img={shirt1}
              title="Shirt"
              description="Hanes Men's 12 Pack Crew Socks, White, 10-13/Shoe Size 6-12, 10-13 / Shoe: 6-12"
              price="20.00$"
            />
          </div>
        </div>
      </div>
      <Feedback />
      <Contactus />
      <Footer />
    </>
  );
}

export default Store;
