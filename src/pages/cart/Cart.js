import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increment,
  decrement,
} from "../../store/features/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart.value);
  console.log(cartProduct);
  return (
    <>
      <Navbar />
      <div class="container mt-4 mb-4">
        <div class="d-flex justify-content-center row">
          <div class="col-md-8">
            <div class="p-2">
              <h4>Shopping cart</h4>
              <div class="d-flex flex-row align-items-center pull-right">
                <span class="mr-1">Sort by:</span>
                <span class="mr-1 font-weight-bold">Price</span>
                <i class="fa fa-angle-down"></i>
              </div>
            </div>
            {cartProduct.map((item) => {
              return (
                <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                  <div class="mr-1">
                    <img class="rounded" src={item.img} width="70" />
                  </div>
                  <div class="d-flex flex-column align-items-center product-details">
                    <span class="font-weight-bold">{item.title}</span>
                    <div class="d-flex flex-row product-desc">
                      <div class="size mr-1">
                        <span class="text-grey">Size:</span>
                        <span class="font-weight-bold">&nbsp;M</span>
                      </div>
                      <div class="color">
                        <span class="text-grey">Color:</span>
                        <span class="font-weight-bold">&nbsp;Grey</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center qty">
                    <i
                      class="fa fa-minus text-danger"
                      onClick={() => {
                        dispatch(decrement(item.id));
                      }}
                    ></i>
                    <h5 class="text-grey mt-1 mr-1 ml-1">{item.qty}</h5>
                    <i
                      class="fa fa-plus text-success"
                      onClick={() => {
                        dispatch(increment(item.id));
                      }}
                    ></i>
                  </div>
                  <div>
                    <h5 class="text-grey">{item.finalPrice}</h5>
                  </div>
                  <div
                    class="d-flex align-items-center"
                    onClick={() => {
                      dispatch(removeFromCart(item.id));
                    }}
                  >
                    <i class="fa fa-trash mb-1 text-danger"></i>
                  </div>
                </div>
              );
            })}
            <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
              <button
                class="btn  btn-block btn-lg ml-2 btton"
                type="button"
                onClick={() => {
                  console.log(cartProduct);
                }}
              >
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
