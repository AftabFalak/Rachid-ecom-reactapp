import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useState } from "react";

import "./index.css";

import AddressBook from "../../components/Layout/Dashboard/AddressBook";
import Sidebar from "../../components/Layout/Dashboard/Sidebar";
import Accountinfo from "../../components/Layout/Dashboard/Accountinfo";
import Cards from "../../components/Layout/Dashboard/Cards";
import Orders from "../../components/Layout/Dashboard/Orders";
import Profile from "../../components/Layout/Dashboard/Profile";
import Wishlist from "../../components/Layout/Dashboard/Wishlist";

const initAddressBook = [
  {
    id: 1,
    name: "Mark Jecno",
    address: "549 Sulphur Spring Road Downers Grove, IL 60515",
    mobile: "+91 123-456-789",
    type: "Home",
  },
  {
    id: 2,
    name: "Mark Jecno",
    address: "549 Sulphur Spring Road Downers Grove, IL 60515",
    mobile: "+91 123-456-789",
    type: "Office",
  },
];
const initCards = [
  {
    id: 1,
    cardNumber: "6262 6126 2112 1515",
    nameOnCard: "Mark Jecno",
    validity: "XX/XX",
    visaLogo: "/assetsDashboard/images/visacard/visaLogo.png",
    logo: "/assetsDashboard/images/visacard/Citi.png",
  },
  {
    id: 2,
    cardNumber: "6262 6126 2112 1515",
    nameOnCard: "Mark Jecno",
    validity: "XX/XX",
    visaLogo: "/assetsDashboard/images/visacard/visaLogo.png",
    logo: "/assetsDashboard/images/visacard/MetLife.png",
  },
];

const initWishList = [
  {
    id: 1,
    image:
      "https://image.made-in-china.com/202f0j00WCZVGkOSLfcq/Women-Clothing-Wholesale-Coffee-PU-Leather-Jacket-for-Ladies.jpg",
    orderId: "#125021",
    productDetail: "neck velvet dress",
    price: 205,
  },
  {
    id: 2,
    image:
      "https://resources.mandmdirect.com/Images/_default/j/j/5/jj5767_1_large.jpg",
    orderId: "#521214",
    productDetail: "belted trench coat",
    price: 350,
  },
  {
    id: 3,
    image:
      "https://qph.cf2.quoracdn.net/main-qimg-9849ddf9c427d3389790aa52dab826c3-lq",
    orderId: "#521021",
    productDetail: "men print tee",
    price: 150,
  },
  {
    id: 4,
    image:
      "https://www.billerudkorsnas.com/globalassets/managed-packaging/shoes-kuru.png",
    orderId: "#245021",
    productDetail: "woman print tee",
    price: 150,
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQebpCF1h7kO8JojWabWZsFt5gZvd8yR95OlQ&usqp=CAU",
    orderId: "#122141",
    productDetail: "men print tee",
    price: 950,
  },
];

const profile = {
  editProfile: false,
  companyName: "Fashion Store",
  country: "Downers Grove, IL",
  esteblished: "2018",
  totalEmploye: "101 - 200",
  category: "Clothing",
  streetAdress: "549 Sulphur Spring Road",
  city: "Downers Grove, IL",
  zip: "60515",
};
const user = {
  editUser: false,
  email: "Mark.Enderess@Mail.com",
  phone: "+01 4485 5454",
  password: "Mark.Enderess",
};
const Dashboard = () => {
  const [addressBook, setAddressBook] = useState([...initAddressBook]);
  const [cards, setCards] = useState([...initCards]);
  const [wishList, setWishList] = useState([...initWishList]);
  const [profileData, setProfileData] = useState(profile);
  const [userData, setUserData] = useState(user);

  let Page = Accountinfo;
  const params = useParams();

  switch (params.page) {
    case "address":
      Page = AddressBook;
      break;
    case "accountinfo":
      Page = Accountinfo;
      break;
    case "cards":
      Page = Cards;
      break;
    case "orders":
      Page = Orders;
      break;
    case "profile":
      Page = Profile;
      break;
    case "wishlist":
      Page = Wishlist;
      break;
    default:
      break;
  }

  const AddressBookDeleteHandler = (id) => {
    setAddressBook(() => addressBook.filter((el) => el.id !== id));
  };
  const CardsDeleteHandler = (id) => {
    setCards(() => cards.filter((el) => el.id !== id));
  };
  const wishlistDeleteHandler = (id) => {
    console.log("di");
    setWishList(() => wishList.filter((el) => el.id !== id));
  };
  return (
    <section className="dashboard-section section-b-space">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar page={params.page} />
          </div>
          <div className="col-lg-9">
            <div className="faq-content tab-content" id="top-tabContent">
              <Page
                addressBook={addressBook}
                AddressBookDeleteHandler={AddressBookDeleteHandler}
                cards={cards}
                CardsDeleteHandler={CardsDeleteHandler}
                wishList={wishList}
                wishlistDeleteHandler={wishlistDeleteHandler}
                setProfileData={setProfileData}
                profileData={profileData}
                setUserData={setUserData}
                userData={userData}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
