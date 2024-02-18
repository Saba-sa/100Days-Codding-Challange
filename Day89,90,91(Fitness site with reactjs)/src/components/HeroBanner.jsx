import React from "react";
import { Box, Typography, Button } from "@mui/material";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "192px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="36px">
        FitnessClub
      </Typography>
      <Typography
        fontSize="700"
        sx={{ fontSize: { lg: "54px", xs: "40px" } }}
        mb="20px"
        mt="10px"
      >
        Sweat,Smile <br /> Repeat
      </Typography>
      <Typography fontSize="34px" lineHeight="35px" mb={3}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        sx={{
          padding: "15px 30px",
          fontSize: "18px",
          backgroundColor: "#ff2625",
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        color="#ff2625"
        fontWeight={600}
        fontSize={200}
        sx={{ opacity: 0.1, display: { lg: "block", sm: "none", xs: "none" } }}
      >
        Exercises
      </Typography>
      <img
        src={require("../assets/images/banner.png")}
        alt="girl doing exercise"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
