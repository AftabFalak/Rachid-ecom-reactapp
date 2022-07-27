import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { allCategorie } from '../../components/Gallery';

import VendorListView from '../../components/VenderListView';
import VenderProfile from '../../components/VenderProfile/VenderProfile';

import './index.css';

export const vendorList = [
  {
    id: 1,
    brandName: 'Outfitter',
    brandDescription: 'Finest engraved wood watch for your.',
    profileImage: require('../../assets/images/VendorProfile/brand2.PNG'),
    coverImage: require('../../assets/images/VenderCover/venderCoverPhotoavif.avif'),
  },

  {
    id: 3,
    brandName: 'Levise',
    brandDescription: 'Finest engraved wood watch for your.',
    profileImage: require('../../assets/images/VendorProfile/brand2.PNG'),
    coverImage: require('../../assets/images/VenderCover/venderCoverPhotoavif.avif'),
  },
  {
    id: 4,
    brandName: 'JDot',
    brandDescription: 'Finest engraved wood watch for your',
    profileImage: require('../../assets/images/VendorProfile/brand2.PNG'),
    coverImage: require('../../assets/images/VenderCover/venderCoverPhotoavif.avif'),
  },
];

const onClickVenderHandel = () => {
  console.log('Vender Clicked');
};

const StoreList = () => {
  const [vendor, setVendor] = useState(null);
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [list, setList] = useState(false);

  useEffect(() => {
    if (id) {
      const index = vendorList.findIndex((f) => f.id == id);
      if (index != -1) {
        setVendor(vendorList[index]);
      }
    }
  }, [id]);
  return (
    <div className="store-list">
      <div className="vendor-list p-3">
        <div className="mb-2">
          <div className="category-container">
            <button className="btn-category" onClick={() => setList(!list)}>
              All Categories
            </button>
            {list ? (
              <ul className="list">
                {allCategorie.map((item, index) => {
                  return (
                    <li key={index} className="list_item d-flex">
                      <p className="m-0">{item.categorie} </p>

                      <label className="containerCheckbox justify-content-end">
                        <input type="checkbox" />
                        <span className="checkmarkCheckbox"></span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <></>
            )}
          </div>

          <select name="cars" id="cars" className="productsDropDowns">
            <option selected disabled hidden>
              Sort by: <span className="font-weight-bold	">Relevency</span>
            </option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>

        <VendorListView
          setShow={setShow}
          VendorList={vendorList}
          onClick={onClickVenderHandel}
        />
      </div>

      <div className="vendor-view d-none d-md-block">
        {vendor ? (
          <VenderProfile vendor={vendor} categorieFilterOnTop={true} />
        ) : (
          <div className="center-text">
            <h3>Select vendor's name to preview the profiles</h3>
          </div>
        )}
      </div>

      {show === true && (
        <div className="vendor-modal-view d-block d-md-node">
          {vendor && (
            <VenderProfile
              vendor={vendor}
              categorieFilterOnTop={true}
              onClickBack={setShow}
              show={show}
              storListMargin={true}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default StoreList;
