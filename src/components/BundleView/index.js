import React, { useState } from "react";
import BrandGroupImages from "../BrandGroupImages";
import BundleProductsSlider from "../BundleProductsSlider";
import "./index.css";
const BundleView = () => {
  const [tab, setTab] = useState("A");

  const views = {
    A: "/Assets/images/bundle-images/view1.jpeg",
    B: "/Assets/images/bundle-images/view2.jpeg",
    C: "/Assets/images/bundle-images/view1.jpeg",
  };
  const products = [
    {
      image: "/Assets/images/ProductList/dress1.jpeg",
      brand: "/Assets/images/VendorProfile/niche.jpeg",
      title: "Salate supensedes",
      price: "$20.11",
    },
    {
      image: "/Assets/images/ProductList/dress2.jpeg",
      brand: "/Assets/images/VendorProfile/vitra.jpeg",
      title: "Dolor ad hoc tolant",
      price: "$50.54",
    },
    {
      image: "/Assets/images/ProductList/dress1.jpeg",
      brand: "/Assets/images/VendorProfile/roshylts.jpeg",
      title: "Salate supensedes special",
      price: "$99.76",
    },
    {
      image: "/Assets/images/ProductList/dress2.jpeg",
      brand: "/Assets/images/VendorProfile/packit.jpeg",
      title: "Dolor ad hoc tolant",
      price: "$30.76",
    },
  ];
  return (
    <div className="BundleView">
      <div className="getInspiration">
        <h2>Get Inspiration</h2>
        <div className="LookButtons">
         <button onClick={()=>setTab("A")}  className={`lookBtn ${tab==="A"&&'activeLook'}`}>Look A</button>
          <button onClick={()=>setTab("B")} className={`lookBtn ${tab==="B"&&'activeLook'}`}>Look B</button>
          <button onClick={()=>setTab("C")} className={`lookBtn ${tab==="C"&&'activeLook'}`}>Look C</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="bundle-img">
            <img src={views[tab]} width={"100%"} />
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
