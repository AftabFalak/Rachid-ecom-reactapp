import React, { useState } from 'react';

import Popup from '../../core/Popup';

const Cards = ({ cards, CardsDeleteHandler }) => {
  const [openEditModal, setOpenEditModal] = useState(false);

  const [openAddNewModal, setOpenAddNewModal] = useState(false);

  const [formData, setFormData] = useState({
    cardNumber: '',
    nameOnCard: '',
    validity: '',
  });

  const { cardNumber, nameOnCard, validity } = formData;

  const onFormSubmit = () => {
    console.log('submit');
  };
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="tab-pane show active" id="cards">
      <div className="row">
        <div className="col-12 h-100">
          <div className="card dashboard-table mt-0">
            <div className="card-body table-responsive-md">
              <div className="top-sec">
                <h3>Saved Cards</h3>
                <a
                  href="#"
                  className="btn btn-sm btn-solid"
                  onClick={() => setOpenAddNewModal(true)}
                >
                  <i className="fa fa-plus"></i> Add New
                </a>
              </div>
              <div className="cards-view">
                {cards.map(
                  (
                    { id, cardNumber, nameOnCard, validity, visaLogo, logo },
                    index
                  ) => (
                    <div className="card customAdressCard" key={index}>
                      <div className="card-body">
                        <div className="header">
                          <div>
                            <img src={logo} />
                          </div>
                          <div>
                            <img src={visaLogo} />
                          </div>
                        </div>
                        <div className="cardInfo-div">
                          <div>
                            <p className="mb-1">Card Number</p>
                            <h4>{cardNumber}</h4>
                          </div>
                          <div className="cardInfo-flex">
                            <div>
                              <p className="mb-1">Name on Card</p>
                              <h4>{nameOnCard}</h4>
                            </div>
                            <div>
                              <p className="mb-1">Validity</p>
                              <h4>{validity}</h4>
                            </div>
                          </div>
                        </div>

                        <div className="buttons-div">
                          <button onClick={() => setOpenEditModal(true)}>
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              CardsDeleteHandler(id);
                            }}
                          >
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
        <Popup title={'Edit Card'}>
          <form
            className="form-t"
            onSubmit={onFormSubmit}
            style={{ maxWidth: '99%', padding: '20px' }}
          >
            <input
              type="text"
              name="cardNumber"
              value={cardNumber}
              className="text-dark dropd border-bold form-control mt-2"
              placeholder="Card Number"
              onChange={onChange}
              required
            />
            <input
              type="text"
              name="nameOnCard"
              value={nameOnCard}
              className="text-dark dropd border-bold form-control mt-2"
              placeholder="Name On Card"
              onChange={onChange}
              required
            />
            <input
              type="text"
              name="validity"
              value={validity}
              className="text-dark dropd border-bold form-control mt-2"
              placeholder="Validiy"
              onChange={onChange}
              required
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
        <Popup title={'Add New Card'}>
          <form
            className="form-t"
            onSubmit={onFormSubmit}
            style={{ maxWidth: '99%', padding: '20px' }}
          >
            <input
              type="text"
              name="cardNumber"
              value={cardNumber}
              className="text-dark dropd border-bold form-control mt-2"
              placeholder="Card Number"
              onChange={onChange}
              required
            />
            <input
              type="text"
              name="nameOnCard"
              value={nameOnCard}
              className="text-dark dropd border-bold form-control mt-2"
              placeholder="Name On Card"
              onChange={onChange}
              required
            />
            <input
              type="text"
              name="validity"
              value={validity}
              className="text-dark dropd border-bold form-control mt-2"
              placeholder="Validiy"
              onChange={onChange}
              required
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

export default Cards;
