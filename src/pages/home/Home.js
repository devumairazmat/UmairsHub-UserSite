import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Aboutus from "../../components/aboutus/Aboutus";
import Contactus from "../../components/contactus/Contactus";
import Store from "../../components/storecom/Storecom";
import Crousel from "../../components/crousel/Crousel";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import Feedback from "../../components/feedback/Feedback";

function Home() {
  return (
    <div>
      <Navbar />
      <Crousel />
      <Jumbotron />
      <Aboutus />
      <Store />
      <Contactus />
      <Footer />
    </div>
  );
}

export default Home;
