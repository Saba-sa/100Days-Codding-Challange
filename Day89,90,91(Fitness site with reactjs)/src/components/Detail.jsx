import React from "react";
import { Typography, Button, Box, Stack } from "@mui/material";

const Detail = ({ explanation }) => {
  const {
    bodyPart,
    equipment,
    gifUrl,
    instructions,
    name,
    secondaryMucles,
    target,
  } = explanation;

  const data = [
    {
      imgUrl: "body-part.png",
      text: bodyPart,
    },
    {
      imgUrl: "target.png",
      text: target,
    },
    {
      imgUrl: "equipment.png",
      text: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, alignItems: "center", p: "20px" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Many people strive to be fit. Fitness, after all, is synonymous with
          health.{name} is among one of the best exercises which helps you to
          become strong.It is the best exercise to target your {target}. It
          helps to make your mood better.
        </Typography>
        {data.map((item) => {
          const { imgUrl, text } = item;
          return (
            <Stack key={text} direction="row" gap="24px" alignItems="center">
              <Button
                sx={{
                  background: "#fff2db",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                }}
              >
                <img
                  src={require(`../assets/icons/${imgUrl}`)}
                  alt="text"
                  style={{ width: "50px", height: "50px" }}
                />
              </Button>
              <Typography variant="h5" textTransform="capitalize">
                {text}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Detail;
