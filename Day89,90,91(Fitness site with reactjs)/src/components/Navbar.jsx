import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{ gap: { sm: "122px", xs: "40px" }, mt: { sm: "32px", xs: "20px" } }}
      px="20px"
    >
      <Link to="/">
        <img
          src={require("../assets/images/Logo.png")}
          alt="logo of the companey"
          style={{ width: "68px", height: "68px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="34px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
