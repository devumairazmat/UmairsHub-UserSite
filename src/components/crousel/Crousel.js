import React from "react";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
function Crousel() {
  return (
    <>
      <div className="container-fluid mt-4 mb-4">
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                style={{ height: "100vh" }}
                src={img3}
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                style={{ height: "100vh" }}
                src={img2}
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                style={{ height: "100vh" }}
                src={img1}
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Crousel;
