import React from "react";
import { Button, AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleRestaurantClick = () => {
    navigate("/restaurants");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <AppBar position="sticky" className="header-appbar">
      <Toolbar className="header-toolbar">
        {/* Home Button on the Left */}
        <Button
          className="header-button"
          style={{ backgroundColor: "#ff5722", color: "white" }}
          onClick={handleHomeClick}
        >
          Home
        </Button>

        {/* Centered Title */}
        <Typography
          variant="h6"
          className="header-title"
          style={{ flexGrow: 1, textAlign: "center" }}
        >
          FlavorFind
        </Typography>

        {/* Restaurants Button on the Right */}
        <Button
          className="header-button"
          style={{ backgroundColor: "#ff5722", color: "white" }}
          onClick={handleRestaurantClick}
        >
          Restaurants
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
