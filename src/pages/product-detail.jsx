import Link from "next/link";
import Layouts from "@layouts/Layouts";
import ImageView from "@components/ImageView";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import PageBanner from "@components/PageBanner";

const ProductDetail = () => {
  return (
    <Layouts contactButton cartButton>
      <ImageView />

      <PageBanner pageTitle={"Product Detail"} pageDesc={"our values and vaulted us to the top of our industry."} />
      
      {/* Product Detail Start */}
      <section className="gap product-detail light-bg-color">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="pd-gallery">
                <ul className="pd-imgs">
                  <li className="li-pd-imgs">
                    <a href="/img/product1.jpeg">
                      <img src="/img/product1.jpeg" alt="Product Detail Image" />
                    </a>
                  </li>
                  <li className="li-pd-imgs">
                    <a href="/img/product2.jpeg">
                      <img src="/img/product2.jpeg" alt="Product Detail Image" />
                    </a>
                  </li>
                  <li className="li-pd-imgs">
                    <a href="/img/product3.jpeg">
                      <img src="/img/product3.jpeg" alt="Product Detail Image" />
                    </a>
                  </li>
                </ul>
                <div className="pd-main-img">
                  <a href="/img/product1.jpeg"><img src="/img/product1.jpeg" alt="Product Detail Image" style={{"width": "100%", "height": "100%"}} /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pd-data">
                <div className="ratings">
                  <i className="fa-solid fa-star" />
                  <span>5.0</span>
                </div>
                <h2>Fosroc Galvafroid – 400ml</h2>
                <div className="pd-quality">
                  <span>Quality</span>
                  <input type="number" name="number" defaultValue="1" min="1" />
                </div>
                <ul className="pd-price">
                  <li className="pd-sale-price"><span>$</span>400.00</li>
                  <li className="pd-regular-price"><span>$</span>500.00</li>
                </ul>
                <p className="free-ship">Free Shipping On This Item</p>
                <Link href="/cart" className="theme-btn">Add to Cart <i className="fa-solid fa-angles-right" /></Link>
                <div className="pd-cat-tags">
                  <ul>
                    <li>
                      <span className="theme-bg-clr font-bold">Sku:</span>
                      <ul className="pd-sku">
                        <li>2CSTD7</li> 
                      </ul>
                    </li>
                    <li>
                      <span className="theme-bg-clr font-bold">Category:</span>
                      <ul className="pd-cat">
                        <li><a href="#.">Forsroc</a></li>
                        <li><a href="#.">Construction</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gap detail-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pd-details">
                <div className="more d-flex align-items-start">

                  <Tab.Container id="product-tab-content" defaultActiveKey="tab-product-0">
                    <Nav variant="pills" className="nav flex-column nav-pills">
                      <Nav.Item>
                        <Nav.Link eventKey="tab-product-0">Description</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="tab-product-1">Additional Information</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="tab-product-2">Reviews</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                    <Tab.Pane eventKey="tab-product-0" title="Description">
                      <div className="des-tab">
                        <h3>About Product</h3>
                        <p>Galvafroid zinc rich cold galvanising coating is formulated as an easily applied protection against corrosion on all ferrous metals. Galvafroid has a mid-grey, matt finish.</p>
                        <p>new technologies. Our portfolio includes dozens of successfully completed projects of houses of different storeys, with high–quality finishes and good repairs. Building houses is our vocation!</p>
                        <ul className="sm-circle">
                          <li>Protects ferrous metals against rust</li>
                          <li>Suitable as a primer or self-finish</li>
                          <li>Easily applied by brush or roller</li>
                        </ul>
                        <figure>
                          <img className="w-100" src="/img/company.jpeg" alt="Description Image" />
                        </figure>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tab-product-1" title="Additional Information">
                      <div className="adis-tab">
                        <h3>What’s New?</h3>
                        <ul className="include">
                          <li><i className="fa-solid fa-check"></i> Pickup available at The Colour Centre</li>
                          <li><i className="fa-solid fa-check"></i> Protection against corrosion on all ferrous</li>
                          <li><i className="fa-solid fa-check"></i> Results that improve our clients' performance</li>
                          <li><i className="fa-solid fa-check"></i> Exceptional client experience</li>
                          <li><i className="fa-solid fa-check"></i> Pickup available at The Colour Centre</li>
                        </ul>
                        <h3>Additional Information</h3>
                        <div className="tab-table">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>Colour</td>
                                <td>Mid-Grey</td>
                                
                              </tr>
                              <tr>
                                <td>Size</td>
                                <td>400ml</td>
                                
                              </tr>
                              <tr>
                                <td>Brand</td>
                                <td>Fosroc</td>
                              </tr>
                              <tr>
                                <td>MPN</td>
                                <td>FEX9540</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tab-product-2" title="Reviews">
                    <div className="rev-tab">
                        <h3>Reviews</h3>
                        <div className="total-reviews d-flex-all justify-content-between">
                          <div className="t-r d-flex-all">
                            5.0 Rating
                          </div>
                          <div className="f-r d-flex-all">
                            <span>( 158 Reviews )</span>
                            <div className="r-s">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                          </div>
                        </div>
                        <div className="review comments">
                          <ul>
                            <li>
                              <div className="comment">
                                <div className="c-img">
                                  <figure>
                                    <img src="/img/comment-img-3.jpg" alt="Comment Image One" />
                                  </figure>
                                </div>
                                <div className="c-data">
                                  <h4>Jonathom Doe</h4>
                                  <span>July 31, 2022</span>
                                  <p>Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen.</p>
                                  <div className="c-r-btn">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="comment">
                                <div className="c-img">
                                  <figure>
                                    <img src="/img/comment-img-4.jpg" alt="Comment Image One" />
                                  </figure>
                                </div>
                                <div className="c-data">
                                  <h4>Jonathom Doe</h4>
                                  <span>July 31, 2022</span>
                                  <p>Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen.</p>
                                  <div className="c-r-btn">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="comment">
                                <div className="c-img">
                                  <figure>
                                    <img src="/img/comment-img-1.jpg" alt="Comment Image One" />
                                  </figure>
                                </div>
                                <div className="c-data">
                                  <h4>Jonathom Doe</h4>
                                  <span>July 31, 2022</span>
                                  <p>Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen.</p>
                                  <div className="c-r-btn">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <a className="load-more" href="#.">Load More</a>
                        </div>
                        <div className="post-review shape">
                          <h3>Post Review</h3>
                          <div className="select-rating d-flex-all justify-content-start">
                            <span>Select Rating</span>
                            <div className="p-r-s">
                              <img src="/images/star.svg" alt="Star Svg" />
                              <img src="/images/star.svg" alt="Star Svg" />
                              <img src="/images/star.svg" alt="Star Svg" />
                              <img src="/images/star.svg" alt="Star Svg" />
                              <img src="/images/star.svg" alt="Star Svg" />
                            </div>
                          </div>
                          <div className="form">
                            <form onSubmit={(e) => {e.preventDefault();}}>
                              <textarea placeholder="Review" />
                              <div className="row">
                                <div className="form-group col-md-6">
                                  <input type="text" name="text" placeholder="Complete Name" />
                                </div>
                                <div className="form-group col-md-6">
                                  <input type="email" name="email" placeholder="Email Address" />
                                </div>
                              </div>
                              <button type="submit" className="theme-btn">Submit Review <i className="fa-solid fa-angles-right" /></button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Detail End */}

    </Layouts>
  );
};
export default ProductDetail;