import React, { useState } from "react";
import "./index.css";
import SingleBrandView from "./SingleBrandView";
const BundleView = () => {
  const [tab, setTab] = useState(1);

  const views =[
    {
      bundle:"/Assets/images/bundle-images/view1.jpeg",
      products:[
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
      ]
    },
    {
      bundle:"/Assets/images/bundle-images/view2.jpeg",
      products:[
        {
          image: "/Assets/images/ProductList/shoe.PNG",
          brand: "/Assets/images/VendorProfile/niche.jpeg",
          title: "Salate supensedes",
          price: "$20.11",
        },
        {
          image: "/Assets/images/ProductList/brand.png",
          brand: "/Assets/images/VendorProfile/vitra.jpeg",
          title: "Dolor ad hoc tolant",
          price: "$50.54",
        },
        {
          image: "/Assets/images/ProductList/shoe.PNG",
          brand: "/Assets/images/VendorProfile/roshylts.jpeg",
          title: "Salate supensedes special",
          price: "$99.76",
        },
        {
          image: "/Assets/images/ProductList/brand.png",
          brand: "/Assets/images/VendorProfile/packit.jpeg",
          title: "Dolor ad hoc tolant",
          price: "$30.76",
        },
      ]
    },

    {
      bundle:"/Assets/images/bundle-images/view3.jpeg",
      products:[
        {
          image: "/Assets/images/ProductList/shirt.jpeg",
          brand: "/Assets/images/VendorProfile/niche.jpeg",
          title: "Salate supensedes",
          price: "$20.11",
        },
        {
          image: "/Assets/images/ProductList/band.jpeg",
          brand: "/Assets/images/VendorProfile/vitra.jpeg",
          title: "Dolor ad hoc tolant",
          price: "$50.54",
        },
        {
          image: "/Assets/images/ProductList/shirt.jpeg",
          brand: "/Assets/images/VendorProfile/roshylts.jpeg",
          title: "Salate supensedes special",
          price: "$99.76",
        },
        {
          image: "/Assets/images/ProductList/band.jpeg",
          brand: "/Assets/images/VendorProfile/packit.jpeg",
          title: "Dolor ad hoc tolant",
          price: "$30.76",
        },
      ]
    }


  ]

 
  return (
    <div className="BundleView">
      <div className="getInspiration">
        <h2>Get Inspiration</h2>
        <div className="LookButtons">
         <button onClick={()=>setTab(1)}  className={`lookBtn ${tab===1&&'activeLook'}`}>Look A</button>
          <button onClick={()=>setTab(2)} className={`lookBtn ${tab===2&&'activeLook'}`}>Look B</button>
          <button onClick={()=>setTab(3)} className={`lookBtn ${tab===3&&'activeLook'}`}>Look C</button>
        </div>
      </div>
      <SingleBrandView view={views[tab-1]} right={tab===2}/>
    </div>
  );
};

export default BundleView;
