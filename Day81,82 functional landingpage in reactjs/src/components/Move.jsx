const Move = (val) => {
  const element = document.getElementById(val);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default Move;
