import React from 'react';

import PaginatedPages from '../../Pagination';

const Followers = ({ VendorListView, vendorList, setShow }) => {
  return (
    <div className="tab-pane show active" id="Followers">
      <div className="card dashboard-table mt-0">
        <div className="card-body table-responsive-sm">
          <div className="top-sec">
            <h3>Followers</h3>
            <div className="d-none d-md-block">
              <PaginatedPages itemsPerPage={3} />
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-around">
            <VendorListView setShow={setShow} VendorList={vendorList} />
            <VendorListView setShow={setShow} VendorList={vendorList} />
          </div>
          <div className="d-md-none d-flex justify-content-center">
            <PaginatedPages itemsPerPage={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Followers;
