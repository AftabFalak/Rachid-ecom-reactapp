import React from "react";

const Dashboard = () => {
  return (
    <>
      <header>
        <div className="mobile-fix-option"></div>
        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="header-contact">
                  <ul>
                    <li>Welcome to Our store Multikart</li>
                    <li>
                      <i className="fa fa-phone" aria-hidden="true"></i>Call Us: 123
                      - 456 - 7890
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 text-end">
                <ul className="header-dropdown">
                  <li className="mobile-wishlist">
                    <a href="#">
                      <i className="fa fa-heart" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="onhover-dropdown mobile-account">
                    <i className="fa fa-user" aria-hidden="true"></i> My Account
                    <ul className="onhover-show-div">
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                      <li>
                        <a href="register.html">register</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="main-menu">
                <div className="menu-left">
                  <div className="navbar">
                    <a href="javascript:void(0)" onclick="openNav()">
                      <div className="bar-style">
                        {" "}
                        <i
                          className="fa fa-bars sidebar-bar"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </a>
                    <div id="mySidenav" className="sidenav">
                      <a
                        href="javascript:void(0)"
                        className="sidebar-overlay"
                        onclick="closeNav()"
                      ></a>
                      <nav>
                        <div onclick="closeNav()">
                          <div className="sidebar-back text-start">
                            <i
                              className="fa fa-angle-left pe-2"
                              aria-hidden="true"
                            ></i>{" "}
                            Back
                          </div>
                        </div>

                        <ul id="sub-menu" className="sm pixelstrap sm-vertical ">
                          <li>
                            <a href="#">clothing</a>
                            <ul className="mega-menu clothing-menu">
                              <li>
                                <div className="row m-0">
                                  <div className="col-xl-4">
                                    <div className="link-section">
                                      <h5>women's fashion</h5>
                                      <ul>
                                        <li>
                                          <a href="#">dresses</a>
                                        </li>
                                        <li>
                                          <a href="#">skirts</a>
                                        </li>
                                        <li>
                                          <a href="#">westarn wear</a>
                                        </li>
                                        <li>
                                          <a href="#">ethic wear</a>
                                        </li>
                                        <li>
                                          <a href="#">sport wear</a>
                                        </li>
                                      </ul>
                                      <h5>men's fashion</h5>
                                      <ul>
                                        <li>
                                          <a href="#">sports wear</a>
                                        </li>
                                        <li>
                                          <a href="#">western wear</a>
                                        </li>
                                        <li>
                                          <a href="#">ethic wear</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-xl-4">
                                    <div className="link-section">
                                      <h5>accessories</h5>
                                      <ul>
                                        <li>
                                          <a href="#">fashion jewellery</a>
                                        </li>
                                        <li>
                                          <a href="#">caps and hats</a>
                                        </li>
                                        <li>
                                          <a href="#">precious jewellery</a>
                                        </li>
                                        <li>
                                          <a href="#">necklaces</a>
                                        </li>
                                        <li>
                                          <a href="#">earrings</a>
                                        </li>
                                        <li>
                                          <a href="#">wrist wear</a>
                                        </li>
                                        <li>
                                          <a href="#">ties</a>
                                        </li>
                                        <li>
                                          <a href="#">cufflinks</a>
                                        </li>
                                        <li>
                                          <a href="#">pockets squares</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-xl-4">
                                    <a href="#" className="mega-menu-banner">
                                      <img
                                        src="../assets/images/mega-menu/fashion.jpg"
                                        alt=""
                                        className="img-fluid blur-up lazyload"
                                      />
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">bags</a>
                            <ul>
                              <li>
                                <a href="#">shopper bags</a>
                              </li>
                              <li>
                                <a href="#">laptop bags</a>
                              </li>
                              <li>
                                <a href="#">clutches</a>
                              </li>
                              <li>
                                <a href="#">purses</a>
                                <ul>
                                  <li>
                                    <a href="#">purses</a>
                                  </li>
                                  <li>
                                    <a href="#">wallets</a>
                                  </li>
                                  <li>
                                    <a href="#">leathers</a>
                                  </li>
                                  <li>
                                    <a href="#">satchels</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">footwear</a>
                            <ul>
                              <li>
                                <a href="#">sport shoes</a>
                              </li>
                              <li>
                                <a href="#">formal shoes</a>
                              </li>
                              <li>
                                <a href="#">casual shoes</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">watches</a>
                          </li>
                          <li>
                            <a href="#">Accessories</a>
                            <ul>
                              <li>
                                <a href="#">fashion jewellery</a>
                              </li>
                              <li>
                                <a href="#">caps and hats</a>
                              </li>
                              <li>
                                <a href="#">precious jewellery</a>
                              </li>
                              <li>
                                <a href="#">more..</a>
                                <ul>
                                  <li>
                                    <a href="#">necklaces</a>
                                  </li>
                                  <li>
                                    <a href="#">earrings</a>
                                  </li>
                                  <li>
                                    <a href="#">wrist wear</a>
                                  </li>
                                  <li>
                                    <a href="#">accessories</a>
                                    <ul>
                                      <li>
                                        <a href="#">ties</a>
                                      </li>
                                      <li>
                                        <a href="#">cufflinks</a>
                                      </li>
                                      <li>
                                        <a href="#">pockets squares</a>
                                      </li>
                                      <li>
                                        <a href="#">helmets</a>
                                      </li>
                                      <li>
                                        <a href="#">scarves</a>
                                      </li>
                                      <li>
                                        <a href="#">more...</a>
                                        <ul>
                                          <li>
                                            <a href="#">accessory gift sets</a>
                                          </li>
                                          <li>
                                            <a href="#">travel accessories</a>
                                          </li>
                                          <li>
                                            <a href="#">phone cases</a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="#">belts & more</a>
                                  </li>
                                  <li>
                                    <a href="#">wearable</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">house of design</a>
                          </li>

                          <li>
                            <a href="#">beauty & personal care</a>
                            <ul>
                              <li>
                                <a href="#">makeup</a>
                              </li>
                              <li>
                                <a href="#">skincare</a>
                              </li>
                              <li>
                                <a href="#">premium beaty</a>
                              </li>
                              <li>
                                <a href="#">more</a>
                                <ul>
                                  <li>
                                    <a href="#">fragrances</a>
                                  </li>
                                  <li>
                                    <a href="#">luxury beauty</a>
                                  </li>
                                  <li>
                                    <a href="#">hair care</a>
                                  </li>
                                  <li>
                                    <a href="#">tools & brushes</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">home & decor</a>
                          </li>
                          <li>
                            <a href="#">kitchen</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="brand-logo">
                    <a href="index.html">
                      {" "}
                      <img
                        src="../assets/images/icon/logo.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="menu-right pull-right">
                  <div>
                    <nav id="main-nav">
                      <div className="toggle-nav">
                        <i className="fa fa-bars sidebar-bar"></i>
                      </div>
                      <ul id="main-menu" className="sm pixelstrap sm-horizontal">
                        <li>
                          <div className="mobile-back text-end">
                            Back
                            <i
                              className="fa fa-angle-right ps-2"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </li>
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li className="mega" id="hover-cls">
                          <a href="#">
                            feature <div className="lable-nav">new</div>
                          </a>
                          <ul className="mega-menu full-mega-menu">
                            <li>
                              <div className="container">
                                <div className="row">
                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="menu-title">
                                        <h5>add to cart</h5>
                                      </div>
                                      <div className="menu-content">
                                        <ul>
                                          <li>
                                            <a href="nursery.html">
                                              cart modal popup
                                            </a>
                                          </li>
                                          <li>
                                            <a href="vegetables.html">
                                              qty. counter
                                              <i
                                                className="fa fa-bolt icon-trend"
                                                aria-hidden="true"
                                              ></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="bags.html">cart top</a>
                                          </li>
                                          <li>
                                            <a href="shoes.html">cart bottom</a>
                                          </li>
                                          <li>
                                            <a href="watch.html">cart left</a>
                                          </li>
                                          <li>
                                            <a href="tools.html">cart right</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="menu-title">
                                        <h5>model</h5>
                                      </div>
                                      <div className="menu-content">
                                        <ul>
                                          <li>
                                            <a href="index.html">Newsletter</a>
                                          </li>
                                          <li>
                                            <a href="index.html">
                                              exit
                                              <i
                                                className="ms-2 fa fa-bolt icon-trend"
                                                aria-hidden="true"
                                              ></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="christmas.html">
                                              christmas
                                            </a>
                                          </li>
                                          <li>
                                            <a href="furniture-3.html">
                                              black friday
                                            </a>
                                          </li>
                                          <li>
                                            <a href="fashion-4.html">
                                              cyber monday
                                            </a>
                                          </li>
                                          <li>
                                            <a href="marketplace-demo-3.html">
                                              new year
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="menu-title">
                                        <h5>cookie bar</h5>
                                      </div>
                                      <div className="menu-content">
                                        <ul>
                                          <li>
                                            <a href="index.html">
                                              bottom
                                              <i
                                                className="ms-2 fa fa-bolt icon-trend"
                                                aria-hidden="true"
                                              ></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="fashion-4.html">
                                              bottom left
                                            </a>
                                          </li>
                                          <li>
                                            <a href="bicycle.html">
                                              bottom right
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="menu-title mt-2">
                                        <h5>search</h5>
                                      </div>
                                      <div className="menu-content">
                                        <ul>
                                          <li>
                                            <a href="marketplace-demo-2.html">
                                              ajax search
                                              <i
                                                className="ms-2 fa fa-bolt icon-trend"
                                                aria-hidden="true"
                                              ></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="menu-title">
                                        <h5>invoice template</h5>
                                      </div>
                                      <div className="menu-content">
                                        <ul>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="invoice-1.html"
                                            >
                                              invoice 1
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="invoice-2.html"
                                            >
                                              invoice 2
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="invoice-3.html"
                                            >
                                              invoice 3
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="invoice-4.html"
                                            >
                                              invoice 4
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="invoice-5.html"
                                            >
                                              invoice 5
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="menu-title">
                                        <h5>email template</h5>
                                      </div>
                                      <div className="menu-content">
                                        <ul>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="../email-template/email-order-success.html"
                                            >
                                              order success
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="../email-template/email-order-success-two.html"
                                            >
                                              order success 2
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="../email-template/email-template.html"
                                            >
                                              email template
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="../email-template/email-template-two.html"
                                            >
                                              email template 2
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="menu-title mt-2">
                                        <h5>elements</h5>
                                      </div>
                                      <div className="menu-content">
                                        <ul>
                                          <li>
                                            <a href="elements.html">
                                              elements page
                                              <i
                                                className="ms-2 fa fa-bolt icon-trend"
                                                aria-hidden="true"
                                              ></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12">
                                    <img
                                      src="../assets/images/menu-banner.jpg"
                                      className="img-fluid mega-img"
                                    />
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">shop</a>
                          <ul>
                            <li>
                              <a href="category-page(top-filter).html">
                                top filter<span className="new-tag">new</span>
                              </a>
                            </li>
                            <li>
                              <a href="category-page(modern).html">
                                modern<span className="new-tag">new</span>
                              </a>
                            </li>
                            <li>
                              <a href="category-page.html">left sidebar</a>
                            </li>
                            <li>
                              <a href="category-page(right).html">
                                right sidebar
                              </a>
                            </li>
                            <li>
                              <a href="category-page(no-sidebar).html">
                                no sidebar
                              </a>
                            </li>
                            <li>
                              <a href="category-page(sidebar-popup).html">
                                sidebar popup
                              </a>
                            </li>
                            <li>
                              <a href="category-page(metro).html">metro</a>
                            </li>
                            <li>
                              <a href="category-page(full-width).html">
                                full width
                              </a>
                            </li>
                            <li>
                              <a href="category-page(infinite-scroll).html">
                                infinite scroll
                              </a>
                            </li>
                            <li>
                              <a href="category-page(3-grid).html">
                                three grid
                              </a>
                            </li>
                            <li>
                              <a href="category-page(6-grid).html">six grid</a>
                            </li>
                            <li>
                              <a href="category-page(list-view).html">
                                list view
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">product</a>
                          <ul>
                            <li>
                              <a href="product-page(360-view).html">
                                360 view <span className="new-tag">new</span>
                              </a>
                            </li>
                            <li>
                              <a href="product-page(video-thumbnail).html">
                                video thumbnail<span className="new-tag">new</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">sidebar</a>
                              <ul>
                                <li>
                                  <a href="product-page.html">left sidebar</a>
                                </li>
                                <li>
                                  <a href="product-page(right-sidebar).html">
                                    right sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="product-page(no-sidebar).html">
                                    no sidebar
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">thumbnail image</a>
                              <ul>
                                <li>
                                  <a href="product-page(left-image).html">
                                    left image
                                  </a>
                                </li>
                                <li>
                                  <a href="product-page(right-image).html">
                                    right image
                                  </a>
                                </li>
                                <li>
                                  <a href="product-page(image-outside).html">
                                    image outside
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">three column</a>
                              <ul>
                                <li>
                                  <a href="product-page(3-col-left).html">
                                    thumbnail left
                                  </a>
                                </li>
                                <li>
                                  <a href="product-page(3-col-right).html">
                                    thumbnail right
                                  </a>
                                </li>
                                <li>
                                  <a href="product-page(3-column).html">
                                    thubnail bottom
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="product-page(4-image).html">
                                four image
                              </a>
                            </li>
                            <li>
                              <a href="product-page(sticky).html">sticky</a>
                            </li>
                            <li>
                              <a href="product-page(accordian).html">
                                accordian
                              </a>
                            </li>
                            <li>
                              <a href="product-page(bundle).html">bundle</a>
                            </li>
                            <li>
                              <a href="product-page(image-swatch).html">
                                image swatch{" "}
                              </a>
                            </li>
                            <li>
                              <a href="product-page(vertical-tab).html">
                                vertical tab
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">pages</a>
                          <ul>
                            <li>
                              <a href="#">vendor</a>
                              <ul>
                                <li>
                                  <a href="vendor-dashboard.html">
                                    vendor dashboard
                                  </a>
                                </li>
                                <li>
                                  <a href="vendor-profile.html">
                                    vendor profile
                                  </a>
                                </li>
                                <li>
                                  <a href="become-vendor.html">become vendor</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">account</a>
                              <ul>
                                <li>
                                  <a href="wishlist.html">wishlist</a>
                                </li>
                                <li>
                                  <a href="cart.html">cart</a>
                                </li>
                                <li>
                                  <a href="dashboard.html">Dashboard</a>
                                </li>
                                <li>
                                  <a href="login.html">login</a>
                                </li>
                                <li>
                                  <a href="register.html">register</a>
                                </li>
                                <li>
                                  <a href="contact.html">contact</a>
                                </li>
                                <li>
                                  <a href="forget_pwd.html">forget password</a>
                                </li>
                                <li>
                                  <a href="profile.html">profile</a>
                                </li>
                                <li>
                                  <a href="checkout.html">checkout</a>
                                </li>
                                <li>
                                  <a href="order-success.html">order success</a>
                                </li>
                                <li>
                                  <a href="order-tracking.html">
                                    order tracking
                                    <span className="new-tag">new</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">portfolio</a>
                              <ul>
                                <li>
                                  <a href="">grid</a>
                                  <ul>
                                    <li>
                                      <a href="grid-2-col.html">grid 2</a>
                                    </li>
                                    <li>
                                      <a href="grid-3-col.html">grid 3</a>
                                    </li>
                                    <li>
                                      <a href="grid-4-col.html">grid 4</a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="">masonry</a>
                                  <ul>
                                    <li>
                                      <a href="masonary-2-grid.html">grid 2</a>
                                    </li>
                                    <li>
                                      <a href="masonary-3-grid.html">grid 3</a>
                                    </li>
                                    <li>
                                      <a href="masonary-4-grid.html">grid 4</a>
                                    </li>
                                    <li>
                                      <a href="masonary-fullwidth.html">
                                        full width
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="about-page.html">about us</a>
                            </li>
                            <li>
                              <a href="search.html">search</a>
                            </li>
                            <li>
                              <a href="review.html">review</a>
                            </li>
                            <li>
                              <a href="#">compare</a>
                              <ul>
                                <li>
                                  <a href="compare.html">compare</a>
                                </li>
                                <li>
                                  <a href="compare-2.html">compare-2</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="collection.html">collection</a>
                            </li>
                            <li>
                              <a href="lookbook.html">lookbook</a>
                            </li>
                            <li>
                              <a href="sitemap.html">site map</a>
                            </li>
                            <li>
                              <a href="404.html">404</a>
                            </li>
                            <li>
                              <a href="coming-soon.html">coming soon</a>
                            </li>
                            <li>
                              <a href="faq.html">FAQ</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">blog</a>
                          <ul>
                            <li>
                              <a href="blog-page.html">left sidebar</a>
                            </li>
                            <li>
                              <a href="blog(right-sidebar).html">
                                right sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog(no-sidebar).html">no sidebar</a>
                            </li>
                            <li>
                              <a href="blog-details.html">blog details</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div>
                    <div className="icon-nav">
                      <ul>
                        <li className="onhover-div mobile-search">
                          <div>
                            <img
                              src="../assets/images/icon/search.png"
                              onclick="openSearch()"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                            <i className="ti-search" onclick="openSearch()"></i>
                          </div>
                          <div id="search-overlay" className="search-overlay">
                            <div>
                              <span
                                className="closebtn"
                                onclick="closeSearch()"
                                title="Close Overlay"
                              >
                                ×
                              </span>
                              <div className="overlay-content">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-xl-12">
                                      <form>
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Search a Product"
                                          />
                                        </div>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          <i className="fa fa-search"></i>
                                        </button>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="onhover-div mobile-setting">
                          <div>
                            <img
                              src="../assets/images/icon/setting.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                            <i className="ti-settings"></i>
                          </div>
                          <div className="show-div setting">
                            <h6>language</h6>
                            <ul>
                              <li>
                                <a href="#">english</a>{" "}
                              </li>
                              <li>
                                <a href="#">french</a>{" "}
                              </li>
                            </ul>
                            <h6>currency</h6>
                            <ul className="list-inline">
                              <li>
                                <a href="#">euro</a>{" "}
                              </li>
                              <li>
                                <a href="#">rupees</a>{" "}
                              </li>
                              <li>
                                <a href="#">pound</a>{" "}
                              </li>
                              <li>
                                <a href="#">doller</a>{" "}
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="onhover-div mobile-cart">
                          <div>
                            <img
                              src="../assets/images/icon/cart.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                            <i className="ti-shopping-cart"></i>
                          </div>
                          <ul className="show-div shopping-cart">
                            <li>
                              <div className="media">
                                <a href="#">
                                  <img
                                    className="me-3"
                                    src="../assets/images/fashion/product/1.jpg"
                                    alt="Generic placeholder image"
                                  />
                                </a>
                                <div className="media-body">
                                  <a href="#">
                                    <h4>item name</h4>
                                  </a>
                                  <h4>
                                    <span>1 x $ 299.00</span>
                                  </h4>
                                </div>
                              </div>
                              <div className="close-circle">
                                <a href="#">
                                  <i className="fa fa-times" aria-hidden="true"></i>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="media">
                                <a href="#">
                                  <img
                                    className="me-3"
                                    src="../assets/images/fashion/product/2.jpg"
                                    alt="Generic placeholder image"
                                  />
                                </a>
                                <div className="media-body">
                                  <a href="#">
                                    <h4>item name</h4>
                                  </a>
                                  <h4>
                                    <span>1 x $ 299.00</span>
                                  </h4>
                                </div>
                              </div>
                              <div className="close-circle">
                                <a href="#">
                                  <i className="fa fa-times" aria-hidden="true"></i>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="total">
                                <h5>
                                  subtotal: <span>$299.00</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <div className="buttons">
                                <a href="cart.html" className="view-cart">
                                  view cart
                                </a>
                                <a href="#" className="checkout">
                                  checkout
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="page-title">
                <h2>Dashboard</h2>
              </div>
            </div>
            <div className="col-sm-6">
              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <section className="section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="account-sidebar">
                <a className="popup-btn">my account</a>
              </div>
              <div className="dashboard-left">
                <div className="collection-mobile-back">
                  <span className="filter-back">
                    <i className="fa fa-angle-left" aria-hidden="true"></i> back
                  </span>
                </div>
                <div className="block-content">
                  <ul>
                    <li className="active">
                      <a href="#">Account Info</a>
                    </li>
                    <li>
                      <a href="#">Address Book</a>
                    </li>
                    <li>
                      <a href="#">My Orders</a>
                    </li>
                    <li>
                      <a href="#">My Wishlist</a>
                    </li>
                    <li>
                      <a href="#">Newsletter</a>
                    </li>
                    <li>
                      <a href="#">My Account</a>
                    </li>
                    <li>
                      <a href="#">Change Password</a>
                    </li>
                    <li className="last">
                      <a href="#">Log Out</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="dashboard-right">
                <div className="dashboard">
                  <div className="page-title">
                    <h2>My Dashboard</h2>
                  </div>
                  <div className="welcome-msg">
                    <p>Hello, MARK JECNO !</p>
                    <p>
                      From your My Account Dashboard you have the ability to
                      view a snapshot of your recent account activity and update
                      your account information. Select a link below to view or
                      edit information.
                    </p>
                  </div>
                  <div className="box-account box-info">
                    <div className="box-head">
                      <h2>Account Information</h2>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="box">
                          <div className="box-title">
                            <h3>Contact Information</h3>
                            <a href="#">Edit</a>
                          </div>
                          <div className="box-content">
                            <h6>MARK JECNO</h6>
                            <h6>MARk-JECNO@gmail.com</h6>
                            <h6>
                              <a href="#">Change Password</a>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="box">
                          <div className="box-title">
                            <h3>Newsletters</h3>
                            <a href="#">Edit</a>
                          </div>
                          <div className="box-content">
                            <p>
                              You are currently not subscribed to any
                              newsletter.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="box">
                        <div className="box-title">
                          <h3>Address Book</h3>
                          <a href="#">Manage Addresses</a>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <h6>Default Billing Address</h6>
                            <address>
                              You have not set a default billing address.
                              <br />
                              <a href="#">Edit Address</a>
                            </address>
                          </div>
                          <div className="col-sm-6">
                            <h6>Default Shipping Address</h6>
                            <address>
                              <a>
                                You have not set a default shipping address.
                                <br />
                              </a>
                            </address>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-light">
        <div className="light-layout">
          <div className="container">
            <section className="small-section border-section border-top-0">
              <div className="row">
                <div className="col-lg-6">
                  <div className="subscribe">
                    <div>
                      <h4>KNOW IT ALL FIRST!</h4>
                      <p>
                        Never Miss Anything From Multikart By Signing Up To Our
                        Newsletter.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form
                    action="https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&amp;id=082f74cbda"
                    className="form-inline subscribe-form auth-form needs-validation"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    target="_blank"
                  >
                    <div className="form-group mx-sm-3">
                      <input
                        type="text"
                        className="form-control"
                        name="EMAIL"
                        id="mce-EMAIL"
                        placeholder="Enter your email"
                        required="required"
                      />
                    </div>
                    <button type="submit" className="btn btn-solid" id="mc-submit">
                      subscribe
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className="section-b-space light-layout">
          <div className="container">
            <div className="row footer-theme partition-f">
              <div className="col-lg-4 col-md-6">
                <div className="footer-title footer-mobile-title">
                  <h4>about</h4>
                </div>
                <div className="footer-contant">
                  <div className="footer-logo">
                    <img src="../assets/images/icon/logo.png" alt="" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                  <div className="footer-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-google-plus" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-rss" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col offset-xl-1">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>my account</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <a href="#">mens</a>
                      </li>
                      <li>
                        <a href="#">womens</a>
                      </li>
                      <li>
                        <a href="#">clothing</a>
                      </li>
                      <li>
                        <a href="#">accessories</a>
                      </li>
                      <li>
                        <a href="#">featured</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>why we choose</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <a href="#">shipping & return</a>
                      </li>
                      <li>
                        <a href="#">secure shopping</a>
                      </li>
                      <li>
                        <a href="#">gallary</a>
                      </li>
                      <li>
                        <a href="#">affiliates</a>
                      </li>
                      <li>
                        <a href="#">contacts</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>store information</h4>
                  </div>
                  <div className="footer-contant">
                    <ul className="contact-list">
                      <li>
                        <i className="fa fa-map-marker"></i>Multikart Demo Store,
                        Demo store India 345-659
                      </li>
                      <li>
                        <i className="fa fa-phone"></i>Call Us: 123-456-7898
                      </li>
                      <li>
                        <i className="fa fa-envelope-o"></i>Email Us:
                        Support@Multikart.com
                      </li>
                      <li>
                        <i className="fa fa-fax"></i>Fax: 123456
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="sub-footer">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="footer-end">
                  <p>
                    <i className="fa fa-copyright" aria-hidden="true"></i> 2017-18
                    themeforest powered by pixelstrap
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="payment-card-bottom">
                  <ul>
                    <li>
                      <a href="#">
                        <img src="../assets/images/icon/visa.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="../assets/images/icon/mastercard.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="../assets/images/icon/paypal.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="../assets/images/icon/american-express.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="../assets/images/icon/discover.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="theme-settings">
        <ul>
          <li className="demo-li">
            <a href="javascript:void(0)" onclick="openSetting()">
              <div className="setting-sidebar" id="setting-icon">
                <h5>
                  50+ <br />
                  demo
                </h5>
              </div>
            </a>
          </li>
          <li>
            <div className="dark-btn">Dark</div>
          </li>
          <li>
            <div className="rtl-btn">RTL</div>
          </li>
          <li className="input-picker">
            <input
              id="ColorPicker1"
              type="color"
              value="#ff4c3b"
              name="Background"
            />
          </li>
        </ul>
      </div>
      <div className="scroll-setting-box">
        <div id="setting_box" className="setting-box">
          <a
            href="javascript:void(0)"
            className="overlay"
            onclick="closeSetting()"
          ></a>
          <div className="setting_box_body">
            <div onclick="closeSetting()">
              <div className="sidebar-back text-start">
                <i className="fa fa-angle-left pe-2" aria-hidden="true"></i> Back
              </div>
            </div>
            <div className="setting-body">
              <div className="setting-title">
                <div>
                  <img
                    src="../assets/images/icon/logo.png"
                    className="img-fluid"
                    alt=""
                  />
                  <h3>
                    50+ <span>demos</span> <br /> suit for any type of online
                    store.
                  </h3>
                </div>
              </div>
              <div className="setting-contant">
                <div className="row demo-section">
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="gradient.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/gradient.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="gradient.html" className="demo-text">
                        <h4>gradient</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="index.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/fashion.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="index.html" className="demo-text">
                        <h4>fashion</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="fashion-2.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/fashion-2.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="fashion-2.html" className="demo-text">
                        <h4>fashion 2</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="fashion-3.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/fashion-3.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="fashion-3.html" className="demo-text">
                        <h4>fashion 3</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="fashion-4.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/fashion-4.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="fashion-4.html" className="demo-text">
                        <h4>fashion 4</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="fashion-5.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/fashion-5.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="fashion-5.html" className="demo-text">
                        <h4>fashion 5</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="fashion-6.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/fashion-6.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="fashion-6.html" className="demo-text">
                        <h4>fashion 6</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="fashion-7.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/fashion-7.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="fashion-7.html" className="demo-text">
                        <h4>fashion 7</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="furniture.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/furniture.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="furniture.html" className="demo-text">
                        <h4>furniture</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="furniture-2.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/furniture-2.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="furniture-2.html" className="demo-text">
                        <h4>furniture 2</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="furniture-3.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/furniture-dark.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="furniture-3.html" className="demo-text">
                        <h4>furniture dark</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="electronic-1.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/electronics.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="electronic-1.html" className="demo-text">
                        <h4>electronics</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="electronic-2.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/electronics-2.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="electronic-2.html" className="demo-text">
                        <h4>electronics 2</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="electronic-3.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/electronics-3.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="electronic-3.html" className="demo-text">
                        <h4>electronics 3</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="marketplace-demo.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/marketplace.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="marketplace-demo.html" className="demo-text">
                        <h4>marketplace</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a
                        href="marketplace-demo-2.html"
                        className="layout-container"
                      >
                        <img
                          src="../assets/images/landing-page/demo/marketplace-2.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="marketplace-demo-2.html" className="demo-text">
                        <h4>marketplace 2</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a
                        href="marketplace-demo-3.html"
                        className="layout-container"
                      >
                        <img
                          src="../assets/images/landing-page/demo/marketplace-3.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="marketplace-demo-3.html" className="demo-text">
                        <h4>marketplace 3</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a
                        href="marketplace-demo-4.html"
                        className="layout-container"
                      >
                        <img
                          src="../assets/images/landing-page/demo/marketplace-4.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="marketplace-demo-4.html" className="demo-text">
                        <h4>marketplace 4</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="vegetables.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/vegetables.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="vegetables.html" className="demo-text">
                        <h4>vegetables</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="vegetables-2.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/vegetables-2.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="vegetables-2.html" className="demo-text">
                        <h4>vegetables 2</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="vegetables-3.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/vegetables-3.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="vegetables-3.html" className="demo-text">
                        <h4>vegetables 3</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="jewellery.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/jewellery.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="jewellery.html" className="demo-text">
                        <h4>jewellery</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="jewellery-2.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/jewellery-2.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="jewellery-2.html" className="demo-text">
                        <h4>jewellery 2</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="jewellery-3.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/jewellery-3.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="jewellery-3.html" className="demo-text">
                        <h4>jewellery 3</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="bags.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/bag.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="bags.html" className="demo-text">
                        <h4>bag</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="watch.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/watch.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="watch.html" className="demo-text">
                        <h4>watch</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="medical.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/medical.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="medical.html" className="demo-text">
                        <h4>medical</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="perfume.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/perfume.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="perfume.html" className="demo-text">
                        <h4>perfume</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="yoga.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/yoga.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="yoga.html" className="demo-text">
                        <h4>yoga</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="christmas.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/christmas.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="christmas.html" className="demo-text">
                        <h4>christmas</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="bicycle.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/bicycle.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="bicycle.html" className="demo-text">
                        <h4>bicycle</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="marijuana.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/marijuana.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="marijuana.html" className="demo-text">
                        <h4>marijuana</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="gym-product.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/gym.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="gym-product.html" className="demo-text">
                        <h4>gym</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="tools.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/tools.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="tools.html" className="demo-text">
                        <h4>tools</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="shoes.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/shoes.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="shoes.html" className="demo-text">
                        <h4>shoes</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="books.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/books.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="books.html" className="demo-text">
                        <h4>books</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="kids.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/kids.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="kids.html" className="demo-text">
                        <h4>kids</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="game.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/game.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="game.html" className="demo-text">
                        <h4>game</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="beauty.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/beauty.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="beauty.html" className="demo-text">
                        <h4>beauty</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="left_sidebar-demo.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/left-sidebar.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="left_sidebar-demo.html" className="demo-text">
                        <h4>left sidebar</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="video-slider.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/video-slider.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="video-slider.html" className="demo-text">
                        <h4>video slider</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="metro.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/metro.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="metro.html" className="demo-text">
                        <h4>metro</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="goggles.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/goggles.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="goggles.html" className="demo-text">
                        <h4>goggles</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="flower.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/flower.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="flower.html" className="demo-text">
                        <h4>flower</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="light.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/light.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="light.html" className="demo-text">
                        <h4>light</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="nursery.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/nursery.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="nursery.html" className="demo-text">
                        <h4>nursery</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="pets.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/pets.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="pets.html" className="demo-text">
                        <h4>pets</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="video.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/video.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="video.html" className="demo-text">
                        <h4>video</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="lookbook-demo.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/lookbook.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="lookbook-demo.html" className="demo-text">
                        <h4>lookbook</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="full-page.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/full-page.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="full-page.html" className="demo-text">
                        <h4>full page</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="instagram-shop.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/instagram.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="instagram-shop.html" className="demo-text">
                        <h4>instagram</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="parallax.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/parallax.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="parallax.html" className="demo-text">
                        <h4>parallax</h4>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tap-top">
        <div>
          <i className="fa fa-angle-double-up"></i>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
