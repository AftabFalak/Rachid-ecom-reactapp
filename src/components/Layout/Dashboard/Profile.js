import React, { useState } from "react";

const Profile = ({
  setProfileData,
  profileData: {
    editProfile,
    companyName,
    country,
    esteblished,
    totalEmploye,
    category,
    streetAdress,
    city,
    zip,
  },
  setUserData,
  userData: { editUser, email, phone, password },
  userData,
  profileData,
}) => {
  const [profileEdit, setProfileEdit] = useState(editProfile);
  const [userEdit, setUserEdit] = useState(editUser);
  const [editEmail, setEditEmail] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  const onChange = (e) => {
    setProfileData({
      name: e.target.value,
    });
    setUserData({
      name: e.target.value,
    });
  };

  return (
    <div className="tab-pane show active" id="profile">
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
                    onClick={() => setProfileEdit(!editProfile)}
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
                          {profileEdit ? (
                            <input
                              value={companyName}
                              name="companyName"
                              type="text"
                              className="editInputs"
                            />
                          ) : (
                            <h6>{companyName}</h6>
                          )}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="details">
                        <div className="left">
                          <h6>email address</h6>
                        </div>
                        <div className="right">
                          {profileEdit ? (
                            <input
                              value={email}
                              name="email"
                              type="text"
                              className="editInputs"
                            />
                          ) : (
                            <h6>{email}</h6>
                          )}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="details">
                        <div className="left">
                          <h6>Country / Region</h6>
                        </div>
                        <div className="right">
                          {profileEdit ? (
                            <input
                              value={country}
                              name="country"
                              type="text"
                              className="editInputs"
                            />
                          ) : (
                            <h6>{country}</h6>
                          )}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="details">
                        <div className="left">
                          <h6>Year Established</h6>
                        </div>
                        <div className="right">
                          {profileEdit ? (
                            <input
                              value={esteblished}
                              name="esteblished"
                              type="text"
                              className="editInputs"
                            />
                          ) : (
                            <h6>{esteblished}</h6>
                          )}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="details">
                        <div className="left">
                          <h6>Total Employees</h6>
                        </div>
                        <div className="right">
                          {profileEdit ? (
                            <input
                              value={totalEmploye}
                              name="totalEmploye"
                              type="text"
                              className="editInputs"
                            />
                          ) : (
                            <h6>{totalEmploye}</h6>
                          )}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="details">
                        <div className="left">
                          <h6>category</h6>
                        </div>
                        <div className="right">
                          {profileEdit ? (
                            <input
                              value={category}
                              name="category"
                              type="text"
                              className="editInputs"
                            />
                          ) : (
                            <h6>{category}</h6>
                          )}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="details">
                        <div className="left">
                          <h6>street address</h6>
                        </div>
                        <div className="right">
                          {profileEdit ? (
                            <input
                              value={streetAdress}
                              name="streetAdress"
                              type="text"
                              className="editInputs"
                            />
                          ) : (
                            <h6>{streetAdress}</h6>
                          )}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="details">
                        <div className="left">
                          <h6>city/state</h6>
                        </div>
                        <div className="right">
                          {profileEdit ? (
                            <input
                              value={city}
                              name="city"
                              type="text"
                              className="editInputs"
                            />
                          ) : (
                            <h6>{city}</h6>
                          )}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="details">
                        <div className="left">
                          <h6>zip</h6>
                        </div>
                        <div className="right">
                          {profileEdit ? (
                            <input
                              value={zip}
                              name="zip"
                              type="text"
                              className="editInputs"
                            />
                          ) : (
                            <h6>{zip}</h6>
                          )}
                        </div>
                      </div>
                    </li>
                  </ul>

                  {profileEdit && (
                    <div className="save-cancel-button-view">
                      <button className="save" type="submit">
                        Save
                      </button>
                      <button
                        className="cancel"
                        onClick={() => setProfileEdit(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
                <div className="dashboard-title">
                  <h4>Login Details</h4>
                  <span
                    data-toggle="modal"
                    data-bs-target="#edit-profile"
                    onClick={() => {
                      setUserEdit(!editUser);
                    }}
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
                          {userEdit || editEmail ? (
                            <input
                              value={email}
                              name="email"
                              type="text"
                              className="editInputs"
                            />
                          ) : (
                            <h6>{email}</h6>
                          )}
                          <span
                            data-toggle="modal"
                            data-bs-target="#edit-profile"
                            onClick={() => setEditEmail(true)}
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
                          {userEdit || editPhone ? (
                            <input
                              value={phone}
                              name="phone"
                              type="text"
                              className="editInputs"
                            />
                          ) : (
                            <h6>{phone}</h6>
                          )}
                          <span
                            data-toggle="modal"
                            data-bs-target="#edit-profile"
                            onClick={() => setEditPhone(true)}
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
                          {userEdit || editPassword ? (
                            <input
                              value={password}
                              name="password"
                              type="password"
                              className="editInputs"
                            />
                          ) : (
                            <h6>{password}</h6>
                          )}

                          <span
                            data-toggle="modal"
                            data-bs-target="#edit-profile"
                            onClick={() => setEditPassword(true)}
                          >
                            edit
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  {(userEdit || editEmail || editPhone || editPassword) && (
                    <div className="save-cancel-button-view">
                      <button className="save" type="submit">
                        Save
                      </button>
                      <button
                        className="cancel"
                        onClick={() => {
                          setUserEdit(false);
                          setEditEmail(false);
                          setEditPassword(false);
                          setEditPhone(false);
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
