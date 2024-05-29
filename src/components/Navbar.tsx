import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";

// Styled components
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

// Main component
export default function SearchAppBar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1, color: "black", backgroundColor: "white" }}>
      <AppBar
        position="fixed"
        sx={{
          color: "black",
          backgroundColor: "white",
          paddingBottom: "0rem",
          transition: "top 0.3s ease-in-out",
          top: isNavbarVisible ? "0" : "-64px", // Adjust based on AppBar height
          boxShadow: isNavbarVisible ? "0px 4px 6px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link to="/Regale">
                <img
                  src={logo}
                  style={{
                    opacity: isNavbarVisible ? 1 : 0.5,
                    height: isNavbarVisible ? "2rem" : "6rem",
                    transition:
                      "height 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out, transform 0.3s ease-in-out",
                    position: isNavbarVisible ? "static" : "fixed",
                    top: isNavbarVisible ? "0" : "1rem",
                    left: isNavbarVisible ? "0" : "50%",
                    transform: isNavbarVisible ? "none" : "translateX(-50%)",
                    zIndex: isNavbarVisible ? "0" : "10",
                  }}
                  alt="Logo"
                />
              </Link>
              <span
                className="about-nav"
                style={{
                  marginLeft: "2px",
                  marginTop: "1rem",
                  fontSize: "12px",
                }}
                onClick={() => {}}
              >
                ( About Us )
              </span>
            </div>
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <div style={{ height: "0vh", backgroundColor: "lightgray" }}></div>
    </Box>
  );
}
