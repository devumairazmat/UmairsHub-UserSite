import React from "react";
import client1 from "../../assets/images/client1.jpg";
import client2 from "../../assets/images/client2.jpg";

function Feedback() {
  return (
    <div>
      <div className="container mt-4 mb-4 text-center bg-light">
        <h1 className="heading-4">Our Customers</h1>
        <div className="row mt-4 mb-4">
          <div className="col-4">
            <img
              style={{ width: "50%" }}
              src={client1}
              alt=""
              className="img-fluid p-4"
            />
          </div>
          <div className="col-8 p-4 d-flex align-items-center ">
            <p className="d-flex">
              “I love this product! I've gone through the entire collection and
              have not found one that I didn't like. Fantastic service and quick
              delivery as well.” — John
            </p>
          </div>
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-8 p-4 d-flex align-items-center">
            <p>
              “This product is amazing. Experience ordering and receiving
              products are more than exceptional. Thank you, highly recommending
              it.” — Francis Perry
            </p>
          </div>
          <div className="col-4">
            <img
              style={{ width: "50%" }}
              src={client2}
              alt=""
              className="img-fluid p-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
