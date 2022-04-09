import { useEffect, useState } from "react";
import { animateUnmount, scrollTo, handleKey } from "../helper";

export default function useAdmin() {
  document.addEventListener("keydown", handleKey);

  const [pass, setPass] = useState("");
  const [adminMode, setAdminMode] = useState(false);

  const handleClickKey = () => {
    const passInput = document.getElementById("pass");
    passInput.classList.remove("hide");
    passInput.focus();
  };
  const handleChangePass = (e) => setPass(e.target.value);

  const handleClickOk = () => setTimeout(() => setAdminMode(true), 200);

  const handleCancelAdmin = () => {
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
