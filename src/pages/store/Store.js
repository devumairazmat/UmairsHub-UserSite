import React from "react";
import Card from "../../components/card/Card";
import Contactus from "../../components/contactus/Contactus";
import Feedback from "../../components/feedback/Feedback";
import Storecom from "../../components/storecom/Storecom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import shirt1 from "../../assets/images/shirt1.jpg";
import "./Store.css";

function Store() {
  return (
    <>
      <Navbar />
      <Storecom />
      <Feedback />
      <Contactus />
      <Footer />
    </>
  );
}

export default Store;
