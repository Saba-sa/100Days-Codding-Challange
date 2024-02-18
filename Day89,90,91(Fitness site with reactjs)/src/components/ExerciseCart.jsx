import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ExerciseCart = ({ exercise }) => {
  const { id, bodyPart, gifUrl, name, target } = exercise;
  return (
    <Link
      className="exercise-card"
      to={`/exercise/${id}`}
      onClick={() => {
        window.scrollTo({ top: 10, left: 100, behavior: "smooth" });
      }}
    >
      <img src={gifUrl} alt="name" loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#bf6b6b",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffad00",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {target}
        </Button>
      </Stack>
      <Typography
        sx={{
          ml: "21px",
          color: "#000",
          fontWeight: "bold",
          fontSize: "20px",
          mt: "11px",
          pb: "10px",
          textTransform: "capitalize",
        }}
      >
        {name}
      </Typography>
    </Link>
  );
};

export default ExerciseCart;
