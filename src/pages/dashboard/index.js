import React from "react";
const Dashboard = () => {
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
                    <h5>Fashion Store</h5>
                    <h6>750 followers | 10 review</h6>
                    <h6>mark.enderess@mail.com</h6>
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
                        dashboard
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        data-bs-toggle="tab"
                        className="nav-link"
                        href="#products"
                      >
                        products
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        data-bs-toggle="tab"
                        className="nav-link"
                        href="#orders"
                      >
                        orders
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        data-bs-toggle="tab"
                        className="nav-link"
                        href="#profile"
                      >
                        profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        data-bs-toggle="tab"
                        className="nav-link"
                        href="#settings"
                      >
                        settings
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="modal"
                        data-bs-target="#logout"
                        href=""
                      >
                        logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="faq-content tab-content" id="top-tabContent">
                <div className="tab-pane fade show active" id="dashboard">
                  <div className="counter-section">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="counter-box">
                          <img
                            src="/public/assetsDashboard/images/icon/dashboard/order.png"
                            className="img-fluid"
                          />
                          <div>
                            <h3>25</h3>
                            <h5>total products</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="counter-box">
                          <img
                            src="../assets/images/icon/dashboard/sale.png"
                            className="img-fluid"
                          />
                          <div>
                            <h3>12500</h3>
                            <h5>total sales</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="counter-box">
                          <img
                            src="../assets/images/icon/dashboard/homework.png"
                            className="img-fluid"
                          />
                          <div>
                            <h3>50</h3>
                            <h5>order pending</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="card">
                        <div className="card-body">
                          <div id="chart"></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="card">
                        <div className="card-body">
                          <div id="chart-order"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="card dashboard-table">
                        <div className="card-body">
                          <h3>trending products</h3>
                          <table className="table mb-0">
                            <thead>
                              <tr>
                                <th scope="col">image</th>
                                <th scope="col">product name</th>
                                <th scope="col">price</th>
                                <th scope="col">sales</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">
                                  <img
                                    src="../assets/images/dashboard/product/1.jpg"
                                    className="blur-up lazyloaded"
                                  />
                                </th>
                                <td>neck velvet dress</td>
                                <td>$205</td>
                                <td>1000</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <img
                                    src="../assets/images/dashboard/product/9.jpg"
                                    className="blur-up lazyloaded"
                                  />
                                </th>
                                <td>belted trench coat</td>
                                <td>$350</td>
                                <td>800</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <img
                                    src="../assets/images/pro3/34.jpg"
                                    className="blur-up lazyloaded"
                                  />
                                </th>
                                <td>man print tee</td>
                                <td>$150</td>
                                <td>750</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card dashboard-table">
                        <div className="card-body">
                          <h3>recent orders</h3>
                          <table className="table mb-0">
                            <thead>
                              <tr>
                                <th scope="col">order id</th>
                                <th scope="col">product details</th>
                                <th scope="col">status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">#21515</th>
                                <td>neck velvet dress</td>
                                <td>confrimed</td>
                              </tr>
                              <tr>
                                <th scope="row">#78153</th>
                                <td>belted trench coat</td>
                                <td>shipped</td>
                              </tr>
                              <tr>
                                <th scope="row">#51512</th>
                                <td>man print tee</td>
                                <td>pending</td>
                              </tr>
                              <tr>
                                <th scope="row">#78153</th>
                                <td>belted trench coat</td>
                                <td>shipped</td>
                              </tr>
                              <tr>
                                <th scope="row">#51512</th>
                                <td>man print tee</td>
                                <td>pending</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="products">
                  <div className="row">
                    <div className="col-12">
                      <div className="card dashboard-table mt-0">
                        <div className="card-body table-responsive-md">
                          <div className="top-sec">
                            <h3>all products</h3>
                            <a href="#" className="btn btn-sm btn-solid">
                              add product
                            </a>
                          </div>
                          <table className="table mb-0">
                            <thead>
                              <tr>
                                <th scope="col">image</th>
                                <th scope="col">product name</th>
                                <th scope="col">category</th>
                                <th scope="col">price</th>
                                <th scope="col">stock</th>
                                <th scope="col">sales</th>
                                <th scope="col">edit/delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">
                                  <img
                                    src="../assets/images/dashboard/product/1.jpg"
                                    className="blur-up lazyloaded"
                                  />
                                </th>
                                <td>neck velvet dress</td>
                                <td>women clothes</td>
                                <td>$205</td>
                                <td>1000</td>
                                <td>2000</td>
                                <td>
                                  <i
                                    className="fa fa-pencil-square-o me-1"
                                    aria-hidden="true"
                                  ></i>
                                  <i
                                    className="fa fa-trash-o ms-1"
                                    aria-hidden="true"
                                  ></i>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <img
                                    src="../assets/images/dashboard/product/9.jpg"
                                    className="blur-up lazyloaded"
                                  />
                                </th>
                                <td>belted trench coat</td>
                                <td>women clothes</td>
                                <td>$350</td>
                                <td>800</td>
                                <td>350</td>
                                <td>
                                  <i
                                    className="fa fa-pencil-square-o me-1"
                                    aria-hidden="true"
                                  ></i>
                                  <i
                                    className="fa fa-trash-o ms-1"
                                    aria-hidden="true"
                                  ></i>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <img
                                    src="../assets/images/pro3/34.jpg"
                                    className="blur-up lazyloaded"
                                  />
                                </th>
                                <td>men print tee</td>
                                <td>men clothes</td>
                                <td>$150</td>
                                <td>750</td>
                                <td>150</td>
                                <td>
                                  <i
                                    className="fa fa-pencil-square-o me-1"
                                    aria-hidden="true"
                                  ></i>
                                  <i
                                    className="fa fa-trash-o ms-1"
                                    aria-hidden="true"
                                  ></i>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <img
                                    src="../assets/images/pro3/1.jpg"
                                    className="blur-up lazyloaded"
                                  />
                                </th>
                                <td>woman print tee</td>
                                <td>women clothes</td>
                                <td>$150</td>
                                <td>750</td>
                                <td>150</td>
                                <td>
                                  <i
                                    className="fa fa-pencil-square-o me-1"
                                    aria-hidden="true"
                                  ></i>
                                  <i
                                    className="fa fa-trash-o ms-1"
                                    aria-hidden="true"
                                  ></i>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <img
                                    src="../assets/images/pro3/27.jpg"
                                    className="blur-up lazyloaded"
                                  />
                                </th>
                                <td>men print tee</td>
                                <td>men clothes</td>
                                <td>$150</td>
                                <td>750</td>
                                <td>150</td>
                                <td>
                                  <i
                                    className="fa fa-pencil-square-o me-1"
                                    aria-hidden="true"
                                  ></i>
                                  <i
                                    className="fa fa-trash-o ms-1"
                                    aria-hidden="true"
                                  ></i>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <img
                                    src="../assets/images/pro3/36.jpg"
                                    className="blur-up lazyloaded"
                                  />
                                </th>
                                <td>men print tee</td>
                                <td>men clothes</td>
                                <td>$150</td>
                                <td>750</td>
                                <td>150</td>
                                <td>
                                  <i
                                    className="fa fa-pencil-square-o me-1"
                                    aria-hidden="true"
                                  ></i>
                                  <i
                                    className="fa fa-trash-o ms-1"
                                    aria-hidden="true"
                                  ></i>
                                </td>
                              </tr>
                            </tbody>
                          </table>
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
                            <h3>orders</h3>
                            <a href="#" className="btn btn-sm btn-solid">
                              add product
                            </a>
                          </div>
                          <table className="table mb-0">
                            <thead>
                              <tr>
                                <th scope="col">order id</th>
                                <th scope="col">product details</th>
                                <th scope="col">status</th>
                                <th scope="col">price</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">#125021</th>
                                <td>neck velvet dress</td>
                                <td>shipped</td>
                                <td>$205</td>
                              </tr>
                              <tr>
                                <th scope="row">#521214</th>
                                <td>belted trench coat</td>
                                <td>shipped</td>
                                <td>$350</td>
                              </tr>
                              <tr>
                                <th scope="row">#521021</th>
                                <td>men print tee</td>
                                <td>pending</td>
                                <td>$150</td>
                              </tr>
                              <tr>
                                <th scope="row">#245021</th>
                                <td>woman print tee</td>
                                <td>shipped</td>
                                <td>$150</td>
                              </tr>
                              <tr>
                                <th scope="row">#122141</th>
                                <td>men print tee</td>
                                <td>canceled</td>
                                <td>$150</td>
                              </tr>
                              <tr>
                                <th scope="row">#125015</th>
                                <td>men print tee</td>
                                <td>pending</td>
                                <td>$150</td>
                              </tr>
                              <tr>
                                <th scope="row">#245021</th>
                                <td>woman print tee</td>
                                <td>shipped</td>
                                <td>$150</td>
                              </tr>
                              <tr>
                                <th scope="row">#122141</th>
                                <td>men print tee</td>
                                <td>canceled</td>
                                <td>$150</td>
                              </tr>
                              <tr>
                                <th scope="row">#125015</th>
                                <td>men print tee</td>
                                <td>pending</td>
                                <td>$150</td>
                              </tr>
                            </tbody>
                          </table>
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
                              <h4>profile</h4>
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
