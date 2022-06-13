import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../../core/Popup";
import InputMask from "react-input-mask";

const AddressBook = ({ addressBook, AddressBookDeleteHandler }) => {
  const [openEditModal, setOpenEditModal] = useState(false);

  const [openAddNewModal, setOpenAddNewModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: 0,
    type: "",
  });

  const { name, address, mobile, type } = formData;

  const onFormSubmit = () => {
    console.log("submit");
  };
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="tab-pane show active" id="address">
      <div className="row">
        <div className="col-12 h-100">
          <div className="card dashboard-table mt-0">
            <div className="card-body table-responsive-md">
              <div className="top-sec">
                <h3>Address Book</h3>
                <a
                  className="btn btn-sm btn-solid"
                  onClick={() => setOpenAddNewModal(true)}
                >
                  <i className="fa fa-plus"></i> Add New
                </a>
              </div>
              <div className="cards-view">
                {addressBook.map(
                  ({ id, name, address, mobile, type }, index) => (
                    <div className="card customAdressCard" key={index}>
                      <div className="card-body">
                        <div className="address-div">
                          <div>
                            <h6>{name}</h6>
                            <p>{address}</p>
                            <p>Mobile: {mobile}</p>
                          </div>
                        </div>
                        <div className="top-sec homeButton-div">
                          <Link
                            to="#"
                            className="btn btn-sm btn-solid homeButton"
                          >
                            {type}
                          </Link>
                        </div>
                        <div className="buttons-div">
                          <button onClick={() => setOpenEditModal(true)}>
                            Edit
                          </button>
                          <button onClick={() => AddressBookDeleteHandler(id)}>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {openEditModal && (
        <Popup title={"Edit Address Book"}>
          <form
            className="form-t"
            onSubmit={onFormSubmit}
            style={{ maxWidth: "99%", padding: "20px" }}
          >
            <input
              type="text"
              name="name"
              className="text-dark dropd border-bold form-control mt-2"
              placeholder="Name"
              onChange={onChange}
              value={name}
              required
            />
            <input
              type="text"
              name="address"
              className="text-dark dropd border-bold form-control mt-2"
              placeholder="Address"
              onChange={onChange}
              value={address}
              required
            />
            <InputMask
              mask="99999-9999"
              maskChar={null}
              value={mobile}
              name="mobile"
              onChange={onChange}
              className="text-dark dropd border-bold form-control mt-2"
              placeholder="Mobile"
            />
            <div className="buttonView">
              <button className="save" type="submit">
                Save
              </button>
              <button
                className="cancel"
                onClick={() => setOpenEditModal(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </Popup>
      )}

      {openAddNewModal && (
        <Popup title={"Add New Address Book"}>
          <form
            className="form-t"
            onSubmit={onFormSubmit}
            style={{ maxWidth: "99%", padding: "20px" }}
          >
            <input
              type="text"
              name="name"
              className="text-dark dropd border-bold form-control mt-2"
              placeholder="Name"
              onChange={onChange}
              value={name}
              required
            />
            <input
              type="text"
              name="address"
              className="text-dark dropd border-bold form-control mt-2"
              placeholder="Address"
              onChange={onChange}
              value={address}
              required
            />
            <InputMask
              mask="99999-9999"
              maskChar={null}
              value={mobile}
              name="mobile"
              onChange={onChange}
              className="text-dark dropd border-bold form-control mt-2"
              placeholder="Mobile"
            />
            <div className="buttonView">
              <button className="save" type="submit">
                Save
              </button>
              <button
                className="cancel"
                onClick={() => setOpenAddNewModal(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </Popup>
      )}
    </div>
  );
};

export default AddressBook;
