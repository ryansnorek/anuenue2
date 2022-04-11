import { useEffect, useState } from "react";
import {
  animateUnmount,
  loginAdmin,
  scrollTo,
  setPageProperties,
} from "../helper";

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
  }
  const handleClickKey = () => {
    passInput.classList.remove("hide");
    passInput.focus();
  };
  const handleChangePass = (e) => setPass(e.target.value);

  const handleClickOk = async () => {
    const code = { pass };
    const auth = await loginAdmin(code);
    setAdminMode(auth);
  };

  const handleCancelAdmin = (e) => {
    setTimeout(() => {
      keyImage.classList.add("hide");
      okButton.classList.add("hide");
      passInput.classList.add("hide");
      animateUnmount(".admin-mode", "animate-hide", setAdminMode, false);
    }, 300);
  };
  useEffect(
    function showOkButton() {
      const okButton = document.getElementById("ok");
      pass.length > 3 && okButton.classList.remove("hide");
    },
    [pass]
  );

  useEffect(
    function toggleAdminMode() {
      scrollTo(10);
      if (adminMode) {
        setPageProperties("hidden", "none", "var(--goblin)");
      } else {
        setPageProperties("scroll", "all", "var(--light)");
      }
    },
    [adminMode]
  );

  return [
    adminMode,
    pass,
    handleClickKey,
    handleChangePass,
    handleClickOk,
    handleCancelAdmin,
  ];
}
