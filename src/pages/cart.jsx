import Link from "next/link";
import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";

const Cart = () => {
  return (
    <Layouts contactButton cartButton>
      <PageBanner pageTitle={"Cart"} pageDesc={"our values and vaulted us to the top of our industry."} />
      
      {/* Cart Start */}
      <section className="gap cart">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cart-box">
                <ul className="cart-table head">
                  <li>
                    <div className="c-c">
                      <div className="c-data">
                        <span>Products</span>
                      </div>
                      <div className="c-price">
                        <span>Price</span>
                      </div>
                      <div className="c-quality">
                        <span>Quality</span>
                      </div>
                      <div className="c-total">
                        <span>Total</span>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="cart-table">
                  <li>
                    <div className="c-c">
                      <div className="c-data">
                        <a className="cr-svg d-flex-all" href="#.">
                          <img src="/images/cross.svg" alt="Cross Svg" />
                        </a>
                        <img src="/img/product1.jpeg" alt="Product One" />
                        <h2><Link href="/product-detail">Fosroc Galvafroid – 400ml</Link></h2>
                      </div>
                      <div className="c-price">
                        <span className="orgnl">$ 400.00</span>
                        <del className="sale">$ 500.00</del>
                      </div>
                      <div className="c-quality">
                        <input type="number" name="number" defaultValue="1" min="1" />
                      </div>
                      <div className="c-total">
                        <span>$ 400.00</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="c-c">
                      <div className="c-data">
                        <a className="cr-svg d-flex-all" href="#.">
                          <img src="/images/cross.svg" alt="Cross Svg" />
                        </a>
                        <img src="/img/product2.jpeg" alt="Product One" />
                        <h2><Link href="/product-detail">Fosroc Galvafroid – 400ml</Link></h2>
                      </div>
                      <div className="c-price">
                        <span className="orgnl">$ 400.00</span>
                        <del className="sale">$ 500.00</del>
                      </div>
                      <div className="c-quality">
                        <input type="number" name="number" defaultValue="1" min="1" />
                      </div>
                      <div className="c-total">
                        <span>$ 400.00</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="c-c">
                      <div className="c-data">
                        <a className="cr-svg d-flex-all" href="#.">
                          <img src="/images/cross.svg" alt="Cross Svg" />
                        </a>
                        <img src="/img/product4.jpeg" alt="Product One" />
                        <h2><Link href="/product-detail">Fosroc Galvafroid – 400ml</Link></h2>
                      </div>
                      <div className="c-price">
                        <span className="orgnl">$ 400.00</span>
                        <del className="sale">$ 500.00</del>
                      </div>
                      <div className="c-quality">
                        <input type="number" name="number" defaultValue="1" min="1" />
                      </div>
                      <div className="c-total">
                        <span>$ 400.00</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="c-c">
                      <div className="c-data">
                        <a className="cr-svg d-flex-all" href="#.">
                          <img src="/images/cross.svg" alt="Cross Svg" />
                        </a>
                        <img src="/img/product3.jpeg" alt="Product One" />
                        <h2><Link href="/product-detail">Fosroc Galvafroid – 400ml</Link></h2>
                      </div>
                      <div className="c-price">
                        <span className="orgnl">$ 400.00</span>
                        <del className="sale">$ 500.00</del>
                      </div>
                      <div className="c-quality">
                        <input type="number" name="number" defaultValue="1" min="1" />
                      </div>
                      <div className="c-total">
                        <span>$ 400.00</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="update-cart d-flex-all justify-content-between">
                <form onSubmit={(e) => {e.preventDefault();}}>
                  <input type="text" name="coupon" placeholder="Coupon Code" />
                  <button type="submit">Apply</button>
                </form>
                <Link href="/cart" className="theme-btn">Update Cart <i className="fa-solid fa-angles-right" /></Link>
              </div>
            </div>
          </div>
          <div className="row cart-total">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
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
                <Link href="/checkout" className="theme-btn">Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cart End */}

    </Layouts>
  );
};
export default Cart;