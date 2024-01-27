import style from "./display.module.css";

const Display = ({ calvalue }) => {
  return (
    <div>
      <input type="text" id={style.display} value={calvalue} />
    </div>
  );
};

export default Display;
