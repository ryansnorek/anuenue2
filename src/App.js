import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "@stripe/stripe-js";

import { effectsContext, shoppingContext, errorContext } from "./contexts";

import Header from "./components/Header";
import Landing from "./components/Landing";
import Shop from "./components/Shop";
import Bag from "./components/Bag";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Checkout from "./components/Checkout";
import useLocalStorage from "./hooks/useLocalStorage";
import CheckoutComplete from "./components/CheckoutComplete";
import Contact from "./components/Contact";
import CheckoutModal from "./components/CheckoutModal";

function App() {
  // Effects
  const [expandSearchBar, setExpandSearchBar] = useState(false);
  const [scrollBreakPoint, setScrollBreakPoint] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [pageTarget, setPageTarget] = useState("");

  // Errors
  const [errors, setErrors] = useState({
    admin: "",
    checkout: "",
  });

  // Shopping
  const [modalItem, setModalItem] = useState("");
  const [order, setOrder] = useLocalStorage("order", []);
  const [checkingOut, setCheckingOut] = useState("");

  const handleScroll = () => {
    const element = document.querySelector(".wrapper");
    if (element.scrollTop > 69) {
      setScrollBreakPoint(true);
    } else {
      setScrollBreakPoint(false);
    }
  };
  return (
    <effectsContext.Provider
      value={{
        expandSearchBar,
        setExpandSearchBar,

        scrollBreakPoint,
        setScrollBreakPoint,

        scrollPosition,
        setScrollPosition,

        pageTarget,
        setPageTarget,
      }}
    >
      <errorContext.Provider
        value={{
          errors,
          setErrors,
        }}
      >
        <shoppingContext.Provider
          value={{
            modalItem,
            setModalItem,

            order,
            setOrder,

            checkingOut,
            setCheckingOut,
          }}
        >
          {checkingOut && <CheckoutModal />}
          <Header />
          <div
            className={`wrapper ${scrollBreakPoint && "scrolled-landing"}`}
            onScroll={handleScroll}
          >
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/bag" element={<Bag />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/complete" element={<CheckoutComplete />} />
            </Routes>
          </div>
        </shoppingContext.Provider>
      </errorContext.Provider>
    </effectsContext.Provider>
  );
}

export default App;
