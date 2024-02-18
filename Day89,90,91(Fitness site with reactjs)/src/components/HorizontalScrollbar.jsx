import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import BodyPart from "./BodyPart.jsx";
import ExerciseCart from "./ExerciseCart.jsx";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
const HorizontalScrollbar = ({
  data,
  setSearch,
  bodyPart,
  setbodyPart,
  startSearch,
  isBodyParts,
}) => {
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
      <Typography onClick={() => scrollNext()} className="right-arrow">
        <img
          src={require("../assets/icons/left-arrow.png")}
          alt="right arrow"
        />
      </Typography>
    );
  };
  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
      <Typography onClick={() => scrollPrev()} className="left-arrow">
        <img
          src={require("../assets/icons/right-arrow.png")}
          alt="left arrow"
        />
      </Typography>
    );
  };

  return (
    <ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow}>
      {data.map((item) => (
        <Box key={item.id || item} itemId={item.id || item} m="0 40px">
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setbodyPart={setbodyPart}
              setSearch={setSearch}
              startSearch={startSearch}
            />
          ) : (
            <ExerciseCart exercise={item} />
          )}
        </Box>
      ))}
      ;
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
