import style from "./button.module.css";

const Button = ({ handleClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "/",
    "=",
    "+",
    "-",
    ".",
  ];
  return (
    <div id={style.buttonContainer}>
      {buttonNames.map((btn, i) => {
        return (
          <button key={i} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        );
      })}
    </div>
  );
};

export default Button;
