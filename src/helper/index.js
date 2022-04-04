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
