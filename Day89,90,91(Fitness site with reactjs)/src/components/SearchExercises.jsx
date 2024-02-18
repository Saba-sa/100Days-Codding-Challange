import React, { useEffect, useState } from "react";
import { Box, Button, Typography, Stack, TextField } from "@mui/material";
import { FetchData, options } from "../utils/FetchData";
import HorizontalScrollbar from "../components/HorizontalScrollbar.jsx";
const SearchExercises = ({ setErr, setExercise, bodyPart, setbodyPart }) => {
  const [search, setSearch] = useState("all");
  const [bodyParts, setbodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await FetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        options
      );
      setbodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);
  useEffect(() => {
    startSearch();
  }, [bodyPart]);

  const startSearch = async () => {
    if (search.trim()) {
      if (search !== "all") {
        const exerciseData = await FetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${search}`,
          options
        );
        if (Array.isArray(exerciseData)) {
          setExercise([...exerciseData]);
          setErr(false);
        } else {
          setExercise([]);
          setErr(true);
        }
      } else {
        const exerciseData = await FetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          options
        );
        setExercise([...exerciseData]);
        setErr(false);
      }
      setSearch("");
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awsome Exercises you shouls <br />
        Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            borderRight: 0,
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "40px",
            },
            width: { lg: "1000px", xs: "350px" },
            backgroundColor: "#fff",
          }}
          InputProps={{
            style: {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#ffff",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: 0,
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
          }}
          onClick={startSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          setSearch={setSearch}
          bodyPart={bodyPart}
          setbodyPart={setbodyPart}
          startSearch={startSearch}
          isBodyParts={true}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
