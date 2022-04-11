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
      console.log(err);
      return false;
    });
};

export const getStoreItems = () => {
  return axios
    .get(`${BASE_URL}/store`)
    .then((items) => {
      console.log(items.data);
      return { items: items.data };
    })
    .catch((err) => {
      console.log(err);
    });
};

export const uploadImage = (picID, fd) => {
  return axios
    .post(`${BASE_URL}/admin/upload/${picID}`, fd, {
      onUploadProgress: (e) => console.log((e.loaded / e.total) * 100),
    })
    .then((res) => res)
    .catch((err) => console.log(err));
};

export const createStripePayment = (order) => {
  return axios
    .post(`${BASE_URL}/stripe/create-payment-intent`, { order })
    .then((res) => {
      return res.data.client_secret;
    })
    .catch((err) => console.log(err));
};

export const editItemByID = (id, item) => {
  return axios
    .put(`${BASE_URL}/admin/items/${id}`, item)
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
