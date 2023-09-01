import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classess from "./mainNav.module.css";
import CartButton from "./CartButton";
import AccountButton from "./AccountButton";
import { useDispatch, useSelector } from "react-redux";
import LogoutButton from "./LogoutButton";

import {
  lattakia,
  aleppo,
  homs,
  damascus,
  tartus,
} from "./../../assets/places-media";
import { cakes, offers } from "../../assets/services-media";
import { travelsActions } from "./../../store/slices/travelsSlice";
import api from "../../apis/instance";

const TRAVELS = [
  {
    id: 1,
    destination: "Aleppo",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rate: 4,
    price: 120000,
    discount: 90000,
    image: aleppo,
    seats: 2,
    services: [
      {
        id: 1,
        name: "Cake",
        description: "Lama Hassan Ksay",
        price: 30,
        time: "15-30 Mins",
        image: offers[0],
      },
      {
        id: 2,
        name: "Cake",
        description: "Lama Hassan Ksay",
        price: 30,
        time: "15-30 Mins",
        image: offers[1],
      },
      {
        id: 3,
        name: "Cake",
        description: "Lama Hassan Ksay",
        price: 30,
        time: "15-30 Mins",
        image: offers[2],
      },
      {
        id: 4,
        name: "Cake",
        description: "Lama Hassan Ksay",
        price: 30,
        time: "15-30 Mins",
        image: offers[3],
      },
    ],
  },
  {
    id: 2,
    destination: "damascus",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rate: 5,
    price: 120000,
    discount: 90000,
    image: damascus,
    seats: 3,
    services: [
      {
        id: 1,
        name: "Cake",
        description: "Lama Hassan Ksay",
        price: 30,
        time: "15-30 Mins",
        image: offers[0],
      },
      {
        id: 3,
        name: "Cake",
        description: "Lama Hassan Ksay",
        price: 30,
        time: "15-30 Mins",
        image: offers[2],
      },
      {
        id: 4,
        name: "Cake",
        description: "Lama Hassan Ksay",
        price: 30,
        time: "15-30 Mins",
        image: offers[3],
      },
    ],
  },
  {
    id: 3,
    destination: "lattakia",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rate: 3,
    price: 120000,
    discount: 90000,
    image: lattakia,
    seats: 4,
    services: [
      {
        id: 2,
        name: "Cake",
        description: "Lama Hassan Ksay",
        price: 30,
        time: "15-30 Mins",
        image: offers[1],
      },
      {
        id: 3,
        name: "Cake",
        description: "Lama Hassan Ksay",
        price: 30,
        time: "15-30 Mins",
        image: offers[2],
      },
      {
        id: 4,
        name: "Cake",
        description: "Lama Hassan Ksay",
        price: 30,
        time: "15-30 Mins",
        image: offers[3],
      },
    ],
  },
  {
    id: 4,
    destination: "tartus",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rate: 3,
    price: 120000,
    discount: 90000,
    image: tartus,
    seats: 4,
    services: [
      {
        id: 2,
        name: "Cake",
        description: "Lama Hassan Ksay",
        price: 30,
        time: "15-30 Mins",
        image: offers[1],
      },
      {
        id: 3,
        name: "Cake",
        description: "Lama Hassan Ksay",
        price: 30,
        time: "15-30 Mins",
        image: offers[2],
      },
      {
        id: 4,
        name: "Cake",
        description: "Lama Hassan Ksay",
        price: 30,
        time: "15-30 Mins",
        image: offers[3],
      },
    ],
  },
  {
    id: 5,
    destination: "homs",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rate: 3,
    price: 120000,
    discount: 90000,
    image: homs,
    seats: 3,
    services: [
      {
        id: 1,
        name: "Sweet",
        description: "Fresh Desserts Are Delicious Of All Kinds",
        price: 20,
        time: " 5-8 Mins",
        image: cakes[0],
      },
      {
        id: 2,
        name: "Sweet",
        description: "Fresh Desserts Are Delicious Of All Kinds",
        price: 20,
        time: " 5-8 Mins",
        image: cakes[1],
      },
      {
        id: 3,
        name: "Sweet",
        description: "Fresh Desserts Are Delicious Of All Kinds",
        price: 20,
        time: " 5-8 Mins",
        image: cakes[2],
      },
      {
        id: 4,
        name: "Sweet",
        description: "Fresh Desserts Are Delicious Of All Kinds",
        price: 20,
        time: " 5-8 Mins",
        image: cakes[3],
      },
    ],
  },
];

const Navbar = ({ type }) => {
  const dispatch = useDispatch();

  // get travels...

  useEffect(() => {
    const fetchTrips = async () => {
      let response = await api.get("trips");
      console.log(response);
      if (response.status === 200) {
        dispatch(travelsActions.setTravels({ items: response.data }));
      } else {
        dispatch(travelsActions.setTravels({ items: TRAVELS }));
      }
    };
    fetchTrips();
  }, []);

  // useEffect(() => {
  //   dispatch(travelsActions.setTravels({ items: TRAVELS }));
  //   console.log(TRAVELS);
  // }, []);

  const user = useSelector((state) => state.user.user);
  const [showNav, setShowNav] = useState(false);

  let toggleBtnIcon = showNav ? "fa-times" : "fa-bars";

  const toggleNavHandler = () => {
    setShowNav((prevState) => !prevState);
  };
  return (
    <header>
      <button className={classess.toggleBtn} onClick={toggleNavHandler}>
        <FontAwesomeIcon icon={`fas ${toggleBtnIcon}`} />
      </button>
      <Link to="/" className={classess.logo}>
        tra<span>v</span>elling
      </Link>
      <nav className={showNav ? classess.active : ""}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {type === "admin" ? (
            <>
              <li>
                <Link to="/admin/usersMessages">Users Messages</Link>
              </li>
              <li>
                <Link to="/admin/driversOrders">Drivers Orders</Link>
              </li>
              <li>
                <Link to="/admin/?type=trip">Settings</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/book">Book</Link>
              </li>
              <li>
                <Link to="/places">Places</Link>
              </li>
              <li>
                <Link to="/services">Service</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/driver">Drivers</Link>
              </li>
              {user && user.role === 2 && (
                <li>
                  <Link to="/admin/?type=trip">Settings</Link>
                </li>
              )}
            </>
          )}
        </ul>
      </nav>
      <div>
        <CartButton className={classess.iconBtn} />
        <AccountButton className={classess.iconBtn} />
        {user && <LogoutButton className={classess.iconBtn} />}
      </div>
    </header>
  );
};

export default Navbar;
