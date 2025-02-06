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
                          <input type="text" className="input m-0" placeholder="Last name" />
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

                    <div className="row px-0 mt-3 term-condition">
                      <div className="terms-content">
                        <div className="terms-points">
                          <p className="point">Terms and condition</p>
                          <p><span>01. Game(s) Selection Process</span> Game(s) selection is subject to availability of a Game(s) in our library at the time of swap. In case a member wishes to wait for any specific game, rent will be charged until the game(s) is being arranged.</p>

                          <p><span>02. Newly Released Game(s)</span> A Game which is 4 months old from the date of availability in Pakistan to be considered a newly released game.</p>
                          <p><span>03. Newly Released Game(s) Availability for Novice Plus / Pro Members</span> Novice Plus and Pro members will receive newly released games after 4-6 working days or availability of a game in Pakistan (whichever is earlier) on a first-come, first-serve basis. Member must share their willingness to play an upcoming game at least 10 days before the official release date; otherwise, desired game will be provided in the second batch. </p>

                          <p><span>04. Newly Released Game(s) Availability for Novice Members</span> Novice members will be given newly released games after 4 months with respect to the queue.</p>
                          <p><span>05. Utilization of Newly Released Game for Novice Plus / Pro Members</span> Pro members can take only one newly released game in each swap along with any other game available in the library. While, Novice Plus member can take only one Newly released game per month.</p>

                          <p><span>06. Special Instructions for Members Residing Outside Karachi </span>
                            <p>a. Member residing outside Karachi is required to return the Game(s) on their own expense and to be shipped by only a private courier company.</p>
                            <p>b. Member must ensure safe return of a Game(s) to our office. He must use bubble wrap or box. In case of any damage, member will be held responsible.</p>

                            <p>c. The next game(s) will only be dispatched to a member, once his previous game(s) are received in good order.</p>
                          </p>

                          <p><span>07. Queue</span> Queue shall be maintained for game(s) not released or available in the library and will be dispatched to the members in respective manner.</p>

                          <p><span>08. Game Swap / Delivery</span> In case of non-utilization of a game(s) swap or delivery, it will not carry forward to the next month.</p>

                          <p><span>09. Monthly Rental</span> Rent will continue to charge on every rental / subscription date unless membership is being paused.</p>

                          <p><span>10. Delay in Rental Payment</span> Three (03) consecutive rent delays enable us to cancel the subscription, collect back the game(s,) and deduct the dues from the deposit.</p>

                          <p><span>11. Minimum Membership Period</span> The minimum membership period is three (03) consecutive months.</p>

                          <p><span>12. Pause / Cancellation of Membership</span> In case of Pause / Cancellation, the member is responsible to communicate us in writing and to dispatch the game(s) to our office address before the next rental / subscription date. The expense for the return delivery to be borne by the member.</p>

                          <p><span>13. Refund of Deposit</span> Deposit refund will take 7 working days after receipt of a game(s). Any rental payment / other dues will be deducted before transferring the deposit.</p>

                          <p><span>14. Standard Delivery Time</span> Standard delivery time for Karachi is 1-2 working days and 3-4 working days for other cities. Members residing outside Karachi may face delays in delivery on account of any unforeseen events. </p>

                          <p><span>15. Deliveries in Packages</span> All packages cover only two (02) free deliveries. In case of the 3rd delivery, standard charges will be applied (Intercity (Karachi) Rs.300/, Intracity (other cities) Rs.400/). </p>

                          <p><span>16. Mishandling / Damage</span> In case of damage to the disc or case, the current retail price of the discs and case price (Rs.500) will be deducted. Membership will be marked on hold until the payment is made.</p>

                          <p><span>17. Failed Delivery Attempts by Rider / Courier Company</span> Failed delivery attempts will be considered as a standard delivery.</p>


                          <p><span>18. To Add an Uncommon Game in Library</span> A minimum of 10 recommendations from our members are required to add an uncommon game in a rental library.</p>

                          <p><span>19. Package Upgrade:</span> Members are not eligible to upgrade or downgrade their package until a minimum membership period of three (03) months are completed. Once a package is upgraded, again a minimum tenor of three (03) months are required for any further change.</p>

                          <p><span>20. Game Editions</span> Only Standard edition of a game can be added into the library.</p>
                          <p><span>21. Disqualification of Membership</span> We reserve the right to cancel membership in case of misbehaving, inappropriate communication and or continuous mishandling of game(s) by the member.</p>
                          <p><span>22. Amendments in Terms & Conditions</span> We reserve the rights to make changes in Terms and Conditions anytime and shall be communicated to members. </p>



                          <label className="cl-checkbox">
                            <input type="checkbox" />
                            <span>I agree term and condition</span>

                          </label>

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
                              <span style={{marginLeft: "8px"}} >Easypaisa</span>
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
                  <p className="secure-payment-text d-flex justify-content-start flex-row align-items-center"><IoLockClosed /> Encrypted and secure payments</p>
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

            <div className="d-flex justify-content-between align-items-center">
              <h6 className="">
                Refundable
              </h6>
              <span className="plan-text">Rs. {Number(prop.refund).toFixed(2)}</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="">
                Total
              </h4>
              <span className="plan-text">Rs. {(Number(prop.price) + Number(prop.refund)).toFixed(2)}</span>
            </div>

            {/*<div className="d-flex justify-content-between align-items-center mb-2">
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
            </div> */}

            {/* <hr />


            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="">
                Total
              </h4>
              <span className="plan-text plan-text-total">Rs. {((prop.price - prop.price * 0.2) + 150).toFixed(2)}</span>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutComponent