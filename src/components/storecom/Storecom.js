import React from "react";
import Card from "../card/Card";
import { doc, getDocFromCache, collection, getDocs } from "firebase/firestore";
import { db } from "../../config/Config";
import shirt1 from "../../assets/images/shirt1.jpg";
import pant from "../../assets/images/pant2.jpg";
import shoes from "../../assets/images/soe4.jpg";

function Store() {
  const [products, setProducts] = React.useState([]);
  const getData = async () => {
    let tempData = [];
    const querySnapshot = await getDocs(collection(db, "cartData"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      let allData = { ...doc.data(), id: doc.id };
      tempData.push(allData);
    });
    setProducts(tempData);
  };
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
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
          {products.map((product) => (
            <div className="col-md-4">
              <Card
                key={product.id}
                img={product.img}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Store;
