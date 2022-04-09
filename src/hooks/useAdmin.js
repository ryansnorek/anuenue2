import { useEffect, useState } from "react";
import { animateUnmount, scrollTo } from "../helper";

export default function useAdmin() {
  document.addEventListener("keydown", handleKey);
  
  const key = document.getElementById("key");
  const passInput = document.getElementById("pass");
  const okButton = document.getElementById("ok");

  const [pass, setPass] = useState("");
  const [adminMode, setAdminMode] = useState(false);

  function handleKey(e) {
    e.keyCode === 80 && key.classList.remove("hide");
  };
  const handleClickKey = () => {
    passInput.classList.remove("hide");
    passInput.focus();
  };
  const handleChangePass = (e) => setPass(e.target.value);

  const handleClickOk = () => setTimeout(() => setAdminMode(true), 200);

  const handleCancelAdmin = () => {
    key.classList.add("hide");
    okButton.classList.add("hide");
    passInput.classList.add("hide");
    animateUnmount(".admin-mode", "animate-hide", setAdminMode, false);
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
      header.style.backgroundColor = "var(--goblin)";
    } else {
      doc.style.overflow = "scroll";
      header.style.backgroundColor = "var(--light)";
    }
  }, [adminMode]);

  return [adminMode, pass, handleClickKey, handleChangePass, handleClickOk, handleCancelAdmin];
}
