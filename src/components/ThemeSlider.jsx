import { useDispatch, useSelector } from "react-redux";
import { IconButton, useColorScheme } from "@mui/material";
import { setDarkTheme, setLightTheme } from "@/store/slices/commonSlice";

// icons
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function ThemeSlider() {
  const dispatch = useDispatch();
  const { setMode } = useColorScheme();
  const isDarkTheme = useSelector((state) => state.common.isDarkTheme);

  const handleThemeChange = () => {
    if (isDarkTheme) {
      dispatch(setLightTheme());
      setMode("light");
    } else {
      dispatch(setDarkTheme());
      setMode("dark");
    }
  };
  return (
    <IconButton color="inherit" onClick={handleThemeChange}>
      {isDarkTheme ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}

export default ThemeSlider;
