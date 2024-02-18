import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../components/Detail.jsx";
import Exercisevideos from "../components/Exercisevideos.jsx";
import SimilarExercises from "../components/SimilarExercises.jsx";
import { FetchData, options, optionForYoutube } from "../utils/FetchData.jsx";

const ExerciseDetail = () => {
  const [explanation, setexplanation] = useState({});
  const [youtubeVideo, setyoutubeVideo] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercisesData, setEquipmentExercisesData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exercisesDetailData = await FetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        options
      );
      setexplanation(exercisesDetailData);

      const videos = await FetchData(
        `${youtubeSearchUrl}/search?query=${exercisesDetailData.name}`,
        optionForYoutube
      );
      setyoutubeVideo(videos.contents);
      const targetMuscleExercisesData = await FetchData(
        `${exerciseDbUrl}/exercises/target/${exercisesDetailData.target}`,
        options
      );

      setTargetMuscleExercises(targetMuscleExercisesData);
      const equipmentExercises = await FetchData(
        `${exerciseDbUrl}/exercises/equipment/${exercisesDetailData.equipment}`,
        options
      );
      setEquipmentExercisesData(equipmentExercises);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail explanation={explanation} />
      <Exercisevideos youtubeVideo={youtubeVideo} name={explanation.name} />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercisesData={equipmentExercisesData}
      />
    </Box>
  );
};

export default ExerciseDetail;
