import { EasypaisaIcon, JazzCashIcon } from "../SvgIcon/SvgIcon";
import "../customStyle.scss";

import countryList from "country-list";
import { PiNumberCircleOneLight, PiNumberCircleTwoLight } from "react-icons/pi";
import { IoCheckmarkCircle, IoLockClosed } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
const CheckoutComponent = (prop) => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <div className="container my-5">
      <h2 className="top-checkout-heading" >Checkout</h2>
      <div className="row">
        <div className="col-12 col-md-6 col-sm-12">
          <div className="checkout-content checkout-left-side mb-4">

            {/* Authentication  */}
            {!isAuth ?
              <div className="payment-method mb-4">
                <div className="checkout-heading mb-3">
                  <div className="icon p-0 m-0">
                    <PiNumberCircleOneLight />
                    {/* <IoCheckmarkCircle /> */}
                  </div>
                  <h4>Login</h4>
                </div>

                <form>
                  <div className="inputForm mb-4">
                    <input type="email" className="input m-0" placeholder="Email" />
                  </div>

                  <div className="inputForm mb-3">
                    <input type="password" className="input m-0" placeholder="Password" />
                  </div>
                  <p className="d-flex justify-content-start flex-row align-items-center m-0"><Link to="/forget-password">Forget Password?</Link></p>
                  <button className="button-submit button-submit-black">Login</button>
                  <p className="d-flex justify-content-start flex-row align-items-center m-0"><Link to="/signup">Account Create? Sign Up</Link></p>
                </form>
              </div>
              :
              <>
                {/* Billing Address */}
                <div className="billing-address mb-4">

                  <div className="checkout-heading mb-3">
                    <div className="icon p-0 m-0">
                      <PiNumberCircleOneLight />
                      {/* <IoCheckmarkCircle /> */}
                    </div>
                    <h4>Billing address</h4>
                  </div>

                  <form>
                    <div className="row mb-4 px-0">
                      <div className="col-md-6 mb-sm-4 mb-md-0 mb-4">
                        <div className="inputForm">
                          <input type="text" className="input m-0" placeholder="First name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="inputForm">
                          <input type="password" className="input m-0" placeholder="Last name" />
                        </div>
                      </div>
                    </div>

                    <div className="inputForm mb-4">
                      <input type="text" className="input m-0" placeholder="Phone number" />
                    </div>



                    <div className="inputForm mb-4">
                      <select
                        name="country"
                        // onChange={orderFormik.handleChange}
                        // value={orderFormik.values.country}
                        className="select m-0"
                      >
                        <option disabled>Select country</option>
                        {countryList.getData().map((item) => {
                          return (
                            <option value={item.name} key={item.code}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="row mb-4 px-0">
                      <div className="col-md-6 mb-sm-4 mb-md-0 mb-4">
                        <div className="inputForm">
                          <input type="text" className="input m-0" placeholder="Region/Province" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="inputForm">
                          <input type="text" className="input m-0" placeholder="City" />
                        </div>
                      </div>
                    </div>


                    <div className="row px-0">
                      <div className="col-md-6 mb-sm-4 mb-md-0 mb-4">
                        <div className="inputForm">
                          <input type="text" className="input m-0" placeholder="Street address" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="inputForm">
                          <input type="text" className="input m-0" placeholder="Zip code" />
                        </div>
                      </div>
                    </div>


                    <button className="button-submit button-submit-black">Continue</button>

                  </form>
                </div>

                {/* Payment Method */}
                <div className="payment-method">
                  <div className="checkout-heading mb-3">
                    <div className="icon p-0 m-0">
                      <PiNumberCircleTwoLight />
                      {/* <IoCheckmarkCircle /> */}
                    </div>
                    <h4>Payment</h4>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="tabs">
                        <div className="tab">
                          <input type="radio" id="rd1" name="rd" />
                          <label className="tab-label" htmlFor="rd1">
                            <div className="payment-method-icon">
                              <div className="icon">
                                <EasypaisaIcon />
                              </div>
                              <span>Easypaisa</span>
                            </div>
                          </label>
                          <div className="tab-content">
                            <button>Checkout</button>
                          </div>
                        </div>
                        <div className="tab">
                          <input type="radio" id="rd2" name="rd" />
                          <label className="tab-label" htmlFor="rd2">
                            <div className="payment-method-icon">
                              <div className="icon">
                                <JazzCashIcon />
                              </div>
                              <span>JazzCash</span>
                            </div>
                          </label>
                          <div className="tab-content">
                            <button>Checkout</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="d-flex justify-content-start flex-row align-items-center"><IoLockClosed /> Encrypted and secure payments</p>
                </div>
              </>
            }


          </div>
        </div>


        <div className="col-12 col-md-6 col-sm-12">
          <div className="checkout-content checkout-right-side">
            <h4 className="mb-3">Order summary</h4>

            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5 className="">
                Subscription Plan
              </h5>
              <span className="plan-text">{prop.planName}</span>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <h6 className="">
                Subscription Rate
              </h6>
              <span className="plan-text">Rs. {Number(prop.price).toFixed(2)}</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="">
                Subtotal
              </h4>
              <span className="plan-text">Rs. {Number(prop.price).toFixed(2)}</span>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="">
                Plan Discount -20%
              </h6>
              <span className="plan-text"> - Rs. {(prop.price - prop.price * 0.2).toFixed(2)}</span>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="">
                Delivery Fees
              </h6>
              <span className="plan-text">Rs. {150}</span>
            </div>

            <hr />


            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="">
                Total
              </h4>
              <span className="plan-text plan-text-total">Rs. {((prop.price - prop.price * 0.2) + 150).toFixed(2)}</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutComponent