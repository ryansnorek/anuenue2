import axios from "axios";
import { BASE_URL } from "../config";

export const scrollTo = (location) => {
  const wrapper = document.querySelector(".wrapper");
  wrapper.scrollTo(0, location);
};

export const animateUnmount = (classname, animation, setState, newState) => {
  const element = document.querySelector(`${classname}`);
  element.classList.add(`${animation}`);
  setTimeout(() => {
    setState(newState);
  }, 300);
};

export const copyToClipboard = () => {
  const copyText = document.getElementById("email");
  copyText.focus();
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert(`Copied ${copyText.value} to clipboard`);
};

export const setPageProperties = (overflow, pEvent, color) => {
  const doc = document.querySelector(".wrapper");
  const header = document.querySelector("header");
  doc.style.overflow = overflow;
  header.style.pointerEvents = pEvent;
  header.style.backgroundColor = color;
};

export const loginAdmin = (code) => {
  return axios
    .post(`${BASE_URL}/admin`, code)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export const getStoreItems = () => {
  return axios
    .get(`${BASE_URL}/store`)
    .then((items) => {
      return { items: items.data };
    })
    .catch((err) => {
      return err;
    });
};
