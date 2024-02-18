import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner.jsx";
import SearchExercises from "../components/SearchExercises.jsx";
import Exercises from "../components/Exercises.jsx";
const Home = () => {
  const [exercise, setExercise] = useState([]);
  const [bodyPart, setbodyPart] = useState("");
  const [err, setErr] = useState(false);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        exercise={exercise}
        setExercise={setExercise}
        bodyPart={bodyPart}
        setbodyPart={setbodyPart}
        setErr={setErr}
      />
      <Exercises
        setExercise={setExercise}
        bodyPart={bodyPart}
        exercise={exercise}
        err={err}
      />
    </Box>
  );
};

export default Home;
