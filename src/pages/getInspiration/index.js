import React from 'react';
import BundleView from '../../components/BundleView';
const GetInspiration = () => {
  return (
    <div className="GetInspiration">
      <BundleView />
      <BundleView right={false} />
      <BundleView />
    </div>
  );
};

export default GetInspiration;
