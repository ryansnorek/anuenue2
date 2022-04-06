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