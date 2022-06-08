import React from "react";
import "./index.css";

const Dashboard = () => {
  const totalProductLogo = "/assetsDashboard/images/icon/dashboard/order.png";
  const totalSaleLogo = "/assetsDashboard/images/icon/dashboard/sale.png";
  const orderPendingLogo =
    "/assetsDashboard/images/icon/dashboard/homework.png";
  return (
    <>
      <section className="dashboard-section section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="dashboard-sidebar">
                <div className="profile-top">
                  <div className="profile-image">
                    <img
                      src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000"
                      alt=""
                      className="img-"
                    />
                  </div>
                  <div className="profile-detail">
                    <h5>Mark Jecno</h5>
                    <h6>mark.jecno@mail.com</h6>
                  </div>
                </div>
                <div className="faq-tab">
                  <ul className="nav nav-tabs" id="top-tab" role="tablist">
                    <li className="nav-item">
                      <a
                        data-bs-toggle="tab"
                        className="nav-link active"
                        href="#dashboard"
                      >
                        Account Info
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        data-bs-toggle="tab"
                        className="nav-link"
                        href="#address"
                      >
                        Address Book
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        data-bs-toggle="tab"
                        className="nav-link"
                        href="#orders"
                      >
                        My Orders
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        data-bs-toggle="tab"
                        className="nav-link"
                        href="#whishlist"
                      >
                        My Wishlist
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        data-bs-toggle="tab"
                        className="nav-link"
                        href="#savedcards"
                      >
                        Saved Cards
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#profile"
                        data-bs-toggle="tab"
                      >
                        Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#security"
                        data-bs-toggle="tab"
                      >
                        Security
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        data-bs-toggle="tab"
                        className="nav-link"
                        href="#modal"
                      >
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="faq-content tab-content" id="top-tabContent">
                <div className="tab-pane fade show active" id="dashboard">
                  <div className="welcome-msg">
                    <h3>Hello, MARK JECNO !</h3>
                    <p>
                      From your My Account Dashboard you have the ability to
                      view a snapshot of your recent account activity and update
                      your account information. Select a link below to view or
                      edit information.
                    </p>
                  </div>

                  <div className="counter-section">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="counter-box">
                          <img
                            src={totalProductLogo}
                            className="img-fluid"
                            alt="Total Product"
                          />
                          <div>
                            <h3>25</h3>
                            <h5>Total Order</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="counter-box">
                          <img src={totalSaleLogo} className="img-fluid" />
                          <div>
                            <h3>5</h3>
                            <h5>Pending Orders</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="counter-box">
                          <img src={orderPendingLogo} className="img-fluid" />
                          <div>
                            <h3>50</h3>
                            <h5>Whishlist</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dashboard-right">
                    <div className="dashboard">
                      <div className="box-account box-info">
                        <div className="box-head">
                          <h3>Account Information</h3>
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
                                  You have not set a default shipping address.
                                  <br />
                                  <a href="#">Edit Address</a>
                                </address>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="address">
                  <div className="row">
                    <div className="col-12 h-100">
                      <div className="card dashboard-table mt-0">
                        <div className="card-body table-responsive-md">
                          <div className="top-sec">
                            <h3>Address Book</h3>
                            <a href="#" className="btn btn-sm btn-solid">
                              <i className="fa fa-plus"></i> Add New
                            </a>
                          </div>
                          <div className="cards-view">
                            <div className="card customAdressCard">
                              <div className="card-body">
                                <div className="address-div">
                                  <div>
                                    <h6>Mark Jecno</h6>
                                    <p>
                                      549 Sulphur Spring Road Downers Grove, IL
                                      60515
                                    </p>
                                    <p>Mobile: +91 123-456-789</p>
                                  </div>
                                </div>
                                <div className="top-sec homeButton-div">
                                  <a
                                    href="#"
                                    className="btn btn-sm btn-solid homeButton"
                                  >
                                    Home
                                  </a>
                                </div>
                                <div className="buttons-div">
                                  <button>Edit</button>
                                  <button>Remove</button>
                                </div>
                              </div>
                            </div>
                            <div className="card customAdressCard">
                              <div className="card-body">
                                <div className="address-div ">
                                  <div>
                                    <h6>Mark Jecno</h6>
                                    <p>
                                      549 Sulphur Spring Road Downers Grove, IL
                                      60515
                                    </p>
                                    <p>Mobile: +91 123-456-789</p>
                                  </div>
                                </div>
                                <div className="top-sec officeButton-div">
                                  <a
                                    href="#"
                                    className="btn btn-sm btn-solid officeButton"
                                  >
                                    Office
                                  </a>
                                </div>
                                <div className="buttons-div">
                                  <button>Edit</button>
                                  <button>Remove</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="orders">
                  <div className="row">
                    <div className="col-12">
                      <div className="card dashboard-table mt-0">
                        <div className="card-body table-responsive-sm">
                          <div className="top-sec">
                            <h3>My Orders</h3>
                          </div>
                          <table className="table mb-0">
                            <thead>
                              <tr>
                                <th scope="col">Images</th>
                                <th scope="col">Order id</th>
                                <th scope="col">Product Details</th>
                                <th scope="col">Status</th>
                                <th scope="col">Price</th>
                                <th scope="col">View</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>
                                  <img src="https://image.made-in-china.com/202f0j00WCZVGkOSLfcq/Women-Clothing-Wholesale-Coffee-PU-Leather-Jacket-for-Ladies.jpg" />
                                </th>
                                <th scope="row">#125021</th>
                                <td>neck velvet dress</td>
                                <td>
                                  <span className="shipped statusButton">
                                    shipped
                                  </span>
                                </td>
                                <td>$205</td>
                                <td>
                                  <i class="fa fa-eye viewIcon"></i>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <img src="https://resources.mandmdirect.com/Images/_default/j/j/5/jj5767_1_large.jpg" />
                                </th>
                                <th scope="row">#521214</th>
                                <td>belted trench coat</td>
                                <td>
                                  <span className="shipped statusButton">
                                    shipped
                                  </span>
                                </td>
                                <td>$350</td>
                                <td>
                                  <i class="fa fa-eye viewIcon"></i>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <img src="https://qph.cf2.quoracdn.net/main-qimg-9849ddf9c427d3389790aa52dab826c3-lq" />
                                </th>
                                <th scope="row">#521021</th>
                                <td>men print tee</td>
                                <td>
                                  <span className="pending statusButton">
                                    pending
                                  </span>
                                </td>
                                <td>$150</td>
                                <td>
                                  <i class="fa fa-eye viewIcon"></i>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <img src="https://www.billerudkorsnas.com/globalassets/managed-packaging/shoes-kuru.png" />
                                </th>
                                <th scope="row">#245021</th>
                                <td>woman print tee</td>
                                <td>
                                  <span className="shipped statusButton">
                                    shipped
                                  </span>
                                </td>
                                <td>$150</td>
                                <td>
                                  <i class="fa fa-eye viewIcon"></i>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQebpCF1h7kO8JojWabWZsFt5gZvd8yR95OlQ&usqp=CAU" />
                                </th>
                                <th scope="row">#122141</th>
                                <td>men print tee</td>
                                <td>
                                  <span className="canceled statusButton">
                                    canceled
                                  </span>
                                </td>
                                <td>$150</td>
                                <td>
                                  <i class="fa fa-eye viewIcon"></i>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7N42wWsOMUTG4rJbZMqHRmn3hGAtg6VBZCw&usqp=CAU" />
                                </th>
                                <th scope="row">#125015</th>
                                <td>men print tee</td>
                                <td>
                                  <span className="pending statusButton">
                                    pending
                                  </span>
                                </td>
                                <td>$150</td>
                                <td>
                                  <i class="fa fa-eye viewIcon"></i>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <img src="data:image/jpeg;base64,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" />
                                </th>
                                <th scope="row">#245021</th>
                                <td>woman print tee</td>
                                <td>
                                  <span className="shipped statusButton">
                                    shipped
                                  </span>
                                </td>
                                <td>$150</td>
                                <td>
                                  <i class="fa fa-eye viewIcon"></i>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <img src="https://5.imimg.com/data5/SELLER/Default/2021/9/OV/KI/ON/20506059/e-commerce-men-shirt-photography-1000x1000.JPG" />
                                </th>
                                <th scope="row">#122141</th>
                                <td>men print tee</td>
                                <td>
                                  <span className="canceled statusButton">
                                    canceled
                                  </span>
                                </td>
                                <td>$150</td>
                                <td>
                                  <i class="fa fa-eye viewIcon"></i>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <img src="https://m.media-amazon.com/images/I/51S8auvcEPL._UY550_.jpg" />
                                </th>
                                <th scope="row">#125015</th>
                                <td>men print tee</td>
                                <td>
                                  <span className="pending statusButton">
                                    pending
                                  </span>
                                </td>
                                <td>$150</td>
                                <td>
                                  <i class="fa fa-eye viewIcon"></i>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="whishlist">
                  <div className="row">
                    <div className="col-12">
                      <div className="card dashboard-table mt-0">
                        <div className="card-body table-responsive-sm">
                          <div className="top-sec">
                            <h3>My Wishlist</h3>
                          </div>
                          <table className="table mb-0">
                            <thead>
                              <tr>
                                <th scope="col">Images</th>
                                <th scope="col">Order id</th>
                                <th scope="col">Product Details</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>
                                  <img src="https://image.made-in-china.com/202f0j00WCZVGkOSLfcq/Women-Clothing-Wholesale-Coffee-PU-Leather-Jacket-for-Ladies.jpg" />
                                </th>
                                <th scope="row">#125021</th>
                                <td>neck velvet dress</td>
                                <td>$205</td>
                                <td>
                                  <a className="btn btn-sm btn-solid">
                                    Move To Cart
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <img src="https://resources.mandmdirect.com/Images/_default/j/j/5/jj5767_1_large.jpg" />
                                </th>
                                <th scope="row">#521214</th>
                                <td>belted trench coat</td>
                                <td>$350</td>
                                <td>
                                  <a className="btn btn-sm btn-solid">
                                    Move To Cart
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <img src="https://qph.cf2.quoracdn.net/main-qimg-9849ddf9c427d3389790aa52dab826c3-lq" />
                                </th>
                                <th scope="row">#521021</th>
                                <td>men print tee</td>
                                <td>$150</td>
                                <td>
                                  <a className="btn btn-sm btn-solid">
                                    Move To Cart
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <img src="https://www.billerudkorsnas.com/globalassets/managed-packaging/shoes-kuru.png" />
                                </th>
                                <th scope="row">#245021</th>
                                <td>woman print tee</td>
                                <td>$150</td>
                                <td>
                                  <a className="btn btn-sm btn-solid">
                                    Move To Cart
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQebpCF1h7kO8JojWabWZsFt5gZvd8yR95OlQ&usqp=CAU" />
                                </th>
                                <th scope="row">#122141</th>
                                <td>men print tee</td>
                                <td>$150</td>
                                <td>
                                  <a className="btn btn-sm btn-solid">
                                    Move To Cart
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7N42wWsOMUTG4rJbZMqHRmn3hGAtg6VBZCw&usqp=CAU" />
                                </th>
                                <th scope="row">#125015</th>
                                <td>men print tee</td>
                                <td>$150</td>
                                <td>
                                  <a className="btn btn-sm btn-solid">
                                    Move To Cart
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <img src="data:image/jpeg;base64,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" />
                                </th>
                                <th scope="row">#245021</th>
                                <td>woman print tee</td>
                                <td>$150</td>
                                <td>
                                  <a className="btn btn-sm btn-solid">
                                    Move To Cart
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <img src="https://5.imimg.com/data5/SELLER/Default/2021/9/OV/KI/ON/20506059/e-commerce-men-shirt-photography-1000x1000.JPG" />
                                </th>
                                <th scope="row">#122141</th>
                                <td>men print tee</td>
                                <td>$150</td>
                                <td>
                                  <a className="btn btn-sm btn-solid">
                                    Move To Cart
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <img src="https://m.media-amazon.com/images/I/51S8auvcEPL._UY550_.jpg" />
                                </th>
                                <th scope="row">#125015</th>
                                <td>men print tee</td>
                                <td>$150</td>
                                <td>
                                  <a className="btn btn-sm btn-solid">
                                    Move To Cart
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="savedcards">
                  <div className="row">
                    <div className="col-12 h-100">
                      <div className="card dashboard-table mt-0">
                        <div className="card-body table-responsive-md">
                          <div className="top-sec">
                            <h3>Saved Cards</h3>
                            <a href="#" className="btn btn-sm btn-solid">
                              <i className="fa fa-plus"></i> Add New
                            </a>
                          </div>
                          <div className="cards-view">
                            <div className="card customAdressCard">
                              <div className="card-body">
                                <div className="header">
                                  <div>
                                    <img src="/assetsDashboard/images/visacard/Citi.png" />
                                  </div>
                                  <div>
                                    <img src="/assetsDashboard/images/visacard/visaLogo.png" />
                                  </div>
                                </div>
                                <div className="cardInfo-div">
                                  <div>
                                    <p className="mb-1">Card Number</p>
                                    <h4>6262 6126 2112 1515</h4>
                                  </div>
                                  <div className="cardInfo-flex">
                                    <div>
                                      <p className="mb-1">Name on Card</p>
                                      <h4>Mark Jecno</h4>
                                    </div>
                                    <div>
                                      <p className="mb-1">Validity</p>
                                      <h4>XX/XX</h4>
                                    </div>
                                  </div>
                                </div>

                                <div className="buttons-div">
                                  <button>Edit</button>
                                  <button>Remove</button>
                                </div>
                              </div>
                            </div>
                            <div className="card customAdressCard">
                              <div className="card-body">
                                <div className="header">
                                  <div>
                                    <img src="/assetsDashboard/images/visacard/MetLife.png" />
                                  </div>
                                  <div>
                                    <img src="/assetsDashboard/images/visacard/visaLogo.png" />
                                  </div>
                                </div>
                                <div className="cardInfo-div">
                                  <div>
                                    <p className="mb-1">Card Number</p>
                                    <h4>6262 6126 2112 1515</h4>
                                  </div>
                                  <div className="cardInfo-flex">
                                    <div>
                                      <p className="mb-1">Name on Card</p>
                                      <h4>Mark Jecno</h4>
                                    </div>
                                    <div>
                                      <p className="mb-1">Validity</p>
                                      <h4>XX/XX</h4>
                                    </div>
                                  </div>
                                </div>

                                <div className="buttons-div">
                                  <button>Edit</button>
                                  <button>Remove</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile">
                  <div className="row">
                    <div className="col-12">
                      <div className="card mt-0">
                        <div className="card-body">
                          <div className="dashboard-box">
                            <div className="dashboard-title">
                              <h4>Profile</h4>
                              <span
                                data-toggle="modal"
                                data-bs-target="#edit-profile"
                              >
                                edit
                              </span>
                            </div>
                            <div className="dashboard-detail">
                              <ul>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>company name</h6>
                                    </div>
                                    <div className="right">
                                      <h6>Fashion Store</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>email address</h6>
                                    </div>
                                    <div className="right">
                                      <h6>mark.enderess@mail.com</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Country / Region</h6>
                                    </div>
                                    <div className="right">
                                      <h6>Downers Grove, IL</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Year Established</h6>
                                    </div>
                                    <div className="right">
                                      <h6>2018</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Total Employees</h6>
                                    </div>
                                    <div className="right">
                                      <h6>101 - 200 People</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>category</h6>
                                    </div>
                                    <div className="right">
                                      <h6>clothing</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>street address</h6>
                                    </div>
                                    <div className="right">
                                      <h6>549 Sulphur Springs Road</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>city/state</h6>
                                    </div>
                                    <div className="right">
                                      <h6>Downers Grove, IL</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>zip</h6>
                                    </div>
                                    <div className="right">
                                      <h6>60515</h6>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="dashboard-title">
                              <h4>Login Details</h4>
                              <span
                                data-toggle="modal"
                                data-bs-target="#edit-profile"
                              >
                                edit
                              </span>
                            </div>
                            <div className="dashboard-detail">
                              <ul>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Email Address</h6>
                                    </div>
                                    <div className="right">
                                      <h6>Mark.Jecno@Gmail.com</h6>
                                      <span
                                        data-toggle="modal"
                                        data-bs-target="#edit-profile"
                                      >
                                        edit
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Phone No.</h6>
                                    </div>
                                    <div className="right">
                                      <h6>+01 4485 5454</h6>
                                      <span
                                        data-toggle="modal"
                                        data-bs-target="#edit-profile"
                                      >
                                        edit
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Password</h6>
                                    </div>
                                    <div className="right">
                                      <h6>**********</h6>
                                      <span
                                        data-toggle="modal"
                                        data-bs-target="#edit-profile"
                                      >
                                        edit
                                      </span>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="settings">
                  <div className="row">
                    <div className="col-12">
                      <div className="card mt-0">
                        <div className="card-body">
                          <div className="dashboard-box">
                            <div className="dashboard-title">
                              <h4>settings</h4>
                            </div>
                            <div className="dashboard-detail">
                              <div className="account-setting">
                                <h5>Notifications</h5>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios"
                                        id="exampleRadios1"
                                        value="option1"
                                        checked
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleRadios1"
                                      >
                                        Allow Desktop Notifications
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios"
                                        id="exampleRadios2"
                                        value="option2"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleRadios2"
                                      >
                                        Enable Notifications
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios"
                                        id="exampleRadios3"
                                        value="option3"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleRadios3"
                                      >
                                        Get notification for my own activity
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios"
                                        id="exampleRadios4"
                                        value="option4"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleRadios4"
                                      >
                                        DND
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="account-setting">
                                <h5>deactivate account</h5>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios1"
                                        id="exampleRadios4"
                                        value="option4"
                                        checked
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleRadios4"
                                      >
                                        I have a privacy concern
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios1"
                                        id="exampleRadios5"
                                        value="option5"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleRadios5"
                                      >
                                        This is temporary
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios1"
                                        id="exampleRadios6"
                                        value="option6"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleRadios6"
                                      >
                                        other
                                      </label>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-solid btn-xs"
                                    >
                                      Deactivate Account
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="account-setting">
                                <h5>Delete account</h5>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios3"
                                        id="exampleRadios7"
                                        value="option7"
                                        checked
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleRadios7"
                                      >
                                        No longer usable
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios3"
                                        id="exampleRadios8"
                                        value="option8"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleRadios8"
                                      >
                                        Want to switch on other account
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios3"
                                        id="exampleRadios9"
                                        value="option9"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleRadios9"
                                      >
                                        other
                                      </label>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-solid btn-xs"
                                    >
                                      Delete Account
                                    </button>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal logout-modal fade"
        id="logout"
        tabindex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Logging Out
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">Do you want to log out?</div>
            <div className="modal-footer">
              <a
                href="#"
                className="btn btn-dark btn-custom"
                data-bs-dismiss="modal"
              >
                no
              </a>
              <a href="index.html" className="btn btn-solid btn-custom">
                yes
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
