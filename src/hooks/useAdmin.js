import { useContext, useEffect, useState } from "react";
import { TOKEN } from "../config";
import { errorContext } from "../contexts";
import {
  animateUnmount,
  loginAdmin,
  scrollTo,
  setPageProperties,
} from "../helper";

export default function useAdmin() {
  const { setErrors, errors } = useContext(errorContext);
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
    try {
      const auth = await loginAdmin({ pass });
      if (auth === "c_o_o_k_i_e_69") {
        setAdminMode(true);
      } else {
        setErrors({
          ...errors,
          admin: auth.message,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancelAdmin = () => {
    setErrors({ ...errors, admin: "" });
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
