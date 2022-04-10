import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../config";
import { animateUnmount, scrollTo } from "../helper";

export default function useAdmin() {
  document.addEventListener("keydown", handleKey);
  
  const keyImage = document.getElementById("key");
  const passInput = document.getElementById("pass");
  const okButton = document.getElementById("ok");

  const [pass, setPass] = useState("");
  const [adminMode, setAdminMode] = useState(false);

  function handleKey(e) {
    if (e.keyCode === 80) {
      keyImage && keyImage.classList.remove("hide");
    }
  };
  const handleClickKey = () => {
    passInput.classList.remove("hide");
    passInput.focus();
  };
  const handleChangePass = (e) => setPass(e.target.value);

  const handleClickOk = () => {
    const code = { pass };
    axios.get(`${BASE_URL}/pepe`)
    .then((res) => {
      if (res.data) {
        setAdminMode(res.data)
      } else {
        console.log("wrong")
      }
    })
    .catch((err) => {
      console.log(err);
    })
  };

  const handleCancelAdmin = (e) => {
    setTimeout(() => {
      keyImage.classList.add("hide");
      okButton.classList.add("hide");
      passInput.classList.add("hide");
      animateUnmount(".admin-mode", "animate-hide", setAdminMode, false);
    }, 300)
  };
  useEffect(() => {
    const okButton = document.getElementById("ok");
    pass.length > 3 && okButton.classList.remove("hide");
  }, [pass]);

  useEffect(() => {
    scrollTo(10);
    const doc = document.querySelector(".wrapper");
    const header = document.querySelector("header");
    if (adminMode) {
      doc.style.overflow = "hidden";
      header.style.pointerEvents = "none";
      header.style.backgroundColor = "var(--goblin)";
    } else {
      doc.style.overflow = "scroll";
      header.style.pointerEvents = "all";
      header.style.backgroundColor = "var(--light)";
    }
  }, [adminMode]);

  return [adminMode, pass, handleClickKey, handleChangePass, handleClickOk, handleCancelAdmin];
}
