import React, { useState } from "react";
import { Link } from "react-router-dom";
import BrandGroupImages from "../../components/BrandGroupImages";
import BundleView from "../../components/BundleView";
import brandLogo from "../../assets/images/VendorProfile/brand2.PNG";
import "./index.css";
import ProductView from "../../components/ProductView";
const BudleViewPage = () => {
  const [product, setProduct] = useState({
    image: "/Assets/images/bundle-images/view1.jpeg",
    otherImages: ["ring.PNG", "shoe.PNG", "bag.PNG", "ring.PNG"],
    colors: ["black", "yellow", "green"],
    sizes: ["L", "XL", "XXL"],
    faqs: {
      title: "",
      rows: [
        {
          title: "Lorem ipsum dolor sit amet,",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                    ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                    In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                    Fusce sed commodo purus, at tempus turpis.`,
        },
        {
          title: "Nunc maximus, magna at ultricies elementum",
          content:
            "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
      ],
    },
    products: [
      {
        image: "/Assets/images/ProductList/bulb.jpeg",
        brand: "/Assets/images/VendorProfile/niche.jpeg",
        title: "Salate supensedes",
        price: "$20.11",
        color: "",
        size: "",
        quantity: 1,
        colors: ["black", "yellow", "red",'blue'],
        sizes: ["L", "XL", "XXL"],
      },
      {
        image: "/Assets/images/ProductList/clock.jpeg",
        brand: "/Assets/images/VendorProfile/vitra.jpeg",
        title: "Dolor ad hoc tolant",
        price: "$50.54",
        color: "",
        size: "",
        quantity: 1,
        colors: ["black", "orange", "green"],
        sizes: ["L", "XL", "XXL"],
      },
      {
        image: "/Assets/images/ProductList/bulb.jpeg",
        brand: "/Assets/images/VendorProfile/roshylts.jpeg",
        title: "Salate supensedes special",
        price: "$99.76",
        color: "",
        size: "",
        quantity: 1,
        colors: ["purple", "red", "gray"],
        sizes: ["L", "XL", "XXL"],
      },
      {
        image: "/Assets/images/ProductList/clock.jpeg",
        brand: "/Assets/images/VendorProfile/packit.jpeg",
        title: "Dolor ad hoc tolant",
        price: "$30.76",
        color: "",
        size: "",
        quantity: 1,
        colors: ["black", "yellow", "green"],
        sizes: ["L", "XL", "XXL"],
      },
    ],
  });

  const handleProduct = (data, index) => {
    const products = [...product.products];
    products[index] = { ...products[index], ...data };
    setProduct({ ...product, products });
  };

  return (
    <div className="BundleViewPage container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img className="b-img" width={"100%"} src={product.image} />
        </div>
        <div className="col-md-6">
          <div>
            <div className="top d-flex  ">
              <h2 className=" font-weight-bold product-heading">
                Fashion Clothing
                <br />
                <span>
                  Inspired By <Link to="/vendor">joseph</Link>
                </span>
              </h2>
              <img src={brandLogo} alt="BrandLogo" className="brandLogo" />
            </div>
          </div>
          <h4>In Cooperation with</h4>
          <BrandGroupImages products={product.products} />
          {product.products.map((prod) => {
            return (
              <ProductView
                product={prod}
                index={0}
                handleProduct={handleProduct}
              />
            );
          })}
        </div>
      </div>
      <BundleView />
    </div>
  );
};

export default BudleViewPage;
