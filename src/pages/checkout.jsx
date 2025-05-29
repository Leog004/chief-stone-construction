import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";

const Checkout = () => {
  return (
    <Layouts contactButton cartButton>
      <PageBanner pageTitle={"Checkout"} pageDesc={"our values and vaulted us to the top of our industry."} />
      
      {/* Checkout Start */}
      <section className="gap checkout detail-page">
        <form onSubmit={(e) => {e.preventDefault();}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-8 col-md-12">
                    <div className="billing">
                      <h3>Billing Address</h3>
                        <div className="row">
                          <div className="col-md-12">
                            <input type="text" name="text" placeholder="Complete Name" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <input type="email" name="email" placeholder="Email Address" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <input type="text" name="text" placeholder="Company Name" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-md-12">
                            <div className="select-wrapper">
                            <select id="inputState-1" className="form-control" defaultValue="">
                              <option>Country</option>
                              <option value="1">Pakistan</option>
                              <option value="2">Turkish</option>
                              <option value="3">America</option>
                            </select>
                            </div>
                          </div>
                        </div>
                        <div className="row dist">
                          <div className="form-group col-md-6">
                            <div className="select-wrapper">
                            <select id="inputState-2" className="form-control" defaultValue="">
                              <option>City</option>
                              <option value="1">Multan</option>
                              <option value="2">Islamabad</option>
                              <option value="3">Lahore</option>
                            </select>
                            </div>
                          </div>
                          <div className="form-group col-md-6">
                            <div className="select-wrapper">
                            <select id="inputState-3" className="form-control" defaultChecked="">
                              <option>State / Province</option>
                              <option value="1">Punjab</option>
                              <option value="2">Sindh</option>
                            </select>
                            </div>
                          </div>
                        </div>
                        <div className="row dist">
                          <div className="col-md-6">
                            <input type="number" name="number" placeholder="Postal Code" />
                          </div>
                          <div className="col-md-6">
                            <input type="number" name="number" placeholder="Phone No" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <input type="text" name="text" placeholder="Address" />
                          </div>
                        </div>
                        <div className="row checkk g-0">
                          <div className="form-group col-md-12">
                            <div className="custom-control custom-radio">
                              <input defaultChecked type="checkbox" id="customRadio11" name="customRadio" className="custom-control-input" />
                              <label className="custom-control-label" htmlFor="customRadio11">A+ Grey Structure</label>
                            </div>
                          </div>
                          <div className="form-group col-md-12">
                            <div className="custom-control custom-radio">
                              <input type="checkbox" id="customRadio2" name="customRadio" className="custom-control-input" />
                              <label className="custom-control-label" htmlFor="customRadio2">Premium Finishing</label>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="order-note">
                      <h3>Order Note</h3>
                      <textarea placeholder="Order Note" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="cart-t-payment-m">
                    <div className="cart-total-box">
                      <div className="parallax" style={{backgroundImage: "url(/images/pattren-4.png)"}} />
                      <div className="final">
                        <h4>Cart Total</h4>
                        <ul>
                          <li>
                            <span>Subtotal:</span>
                            <span>$358.00</span>
                          </li>
                          <li>
                            <span>Shipping:</span>
                            <span>$358.00</span>
                          </li>
                        </ul>
                      </div>
                      <div className="total">
                        <ul>
                          <li>
                            <span>Total:</span>
                            <span>$358.00</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="payment-method">
                      <h3>Payment Method</h3>
                        <div className="row checkk g-0">
                          <div className="form-group col-md-12">
                            <div className="custom-control custom-radio">
                              <input defaultChecked type="checkbox" id="customRadio1" name="customRadio" className="custom-control-input" />
                              <label className="custom-control-label" htmlFor="customRadio1">Bank Payment</label>
                            </div>
                          </div>
                          <div className="form-group col-md-12">
                            <div className="custom-control custom-radio">
                              <input type="checkbox" id="customRadio21" name="customRadio" className="custom-control-input" />
                              <label className="custom-control-label" htmlFor="customRadio21">Check Payment</label>
                            </div>
                          </div>
                          <div className="form-group col-md-12">
                            <div className="custom-control custom-radio">
                              <input type="checkbox" id="customRadio22" name="customRadio" className="custom-control-input" />
                              <label className="custom-control-label" htmlFor="customRadio22">
                                PayPal
                                <img src="/img/cards.png" alt="Bank Cards" />
                              </label>
                            </div>
                          </div>
                        </div>
                      <button type="submit">Place Order</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      {/* Checkout End */}

    </Layouts>
  );
};
export default Checkout;