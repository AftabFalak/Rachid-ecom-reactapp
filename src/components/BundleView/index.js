import React from "react";
import BrandGroupImages from "../BrandGroupImages";
import BundleProductsSlider from "../BundleProductsSlider";
import "./index.css";
const BundleView = () => {
  const products = [
    {
      image: "/Assets/images/ProductList/bulb.jpeg",
      brand: "/Assets/images/VendorProfile/niche.jpeg",
      title: "Salate supensedes",
      price: "$20.11",
    },
    {
      image: "/Assets/images/ProductList/clock.jpeg",
      brand: "/Assets/images/VendorProfile/vitra.jpeg",
      title: "Dolor ad hoc tolant",
      price: "$50.54",
    },
    {
      image: "/Assets/images/ProductList/bulb.jpeg",
      brand: "/Assets/images/VendorProfile/roshylts.jpeg",
      title: "Salate supensedes special",
      price: "$99.76",
    },
    {
      image: "/Assets/images/ProductList/clock.jpeg",
      brand: "/Assets/images/VendorProfile/packit.jpeg",
      title: "Dolor ad hoc tolant",
      price: "$30.76",
    },
  ];
  return (
    <div className="BundleView">
      <div className="row">
        <div className="col-md-6">
          <div className="bundle-img">
            <img src="/Assets/images/bundle-images/view1.jpeg" width={"100%"} />
          </div>
        </div>
        <div className="col-md-6">
          <BundleProductsSlider products={products} />

        <BrandGroupImages products={products} />
        </div>
      </div>
    </div>
  );
};

export default BundleView;
