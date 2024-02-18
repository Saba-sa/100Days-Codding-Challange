import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import ExerciseCart from "./ExerciseCart";

const Exercises = ({ err, setExercise, bodyPart, exercise }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const exercisesPerpage = 6;
  const indexofLastExercise = currentPage * exercisesPerpage;
  const indexofFirstExrecise = indexofLastExercise - exercisesPerpage;
  const currentExercise = exercise.slice(
    indexofFirstExrecise,
    indexofLastExercise
  );

  const paginate = (event, value) => {
    setcurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  useEffect(() => {
    setcurrentPage(1);
  }, [bodyPart]);
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "70px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercise.map((exercise, index) => {
          return <ExerciseCart key={index} exercise={exercise} />;
        })}

        {err && <p>Not Found</p>}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercise.length > 6 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercise.length / exercisesPerpage)}
            page={currentPage}
            onChange={(e, value) => paginate(e, value)}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
