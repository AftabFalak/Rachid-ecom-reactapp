import React from 'react'
import BrandGroupImages from '../../components/BrandGroupImages';
import BundleProductsSlider from '../../components/BundleProductsSlider';
import BundleView from '../../components/BundleView';

const BudleViewPage = () => {

    const product = {
        image: "/Assets/images/bundle-images/view1.jpeg",
        otherImages: ["ring.PNG", "shoe.PNG", "bag.PNG", "ring.PNG"],
        colors: ["black", "yello", "green"],
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
        products :[
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
        ]
      };
    

  return (
    <div>
        <div className='row'>
            <div className='col-md-6'>
                <img className='b-img' width={"100%"} src={product.image}/>
            </div>
            <div className='col-md-6'>
                <BrandGroupImages products={product.products}/>
            </div>
        </div>
       <BundleView/>
    </div>
  )
}

export default BudleViewPage