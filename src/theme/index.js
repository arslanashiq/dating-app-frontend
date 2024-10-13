import { createTheme } from "@mui/material";
import breakpoints from "./utilities/breakpoints";

const createMuiTheme = ({ darkTheme = false, isLoading = false } = {}) =>
  createTheme({
    breakpoints,
    colorSchemes: {
      dark: darkTheme,
    },

    typography: {
      fontFamily: ["Inter", "Helvetica", "Arial", "sans-serif"].join(","),

      allVariants: {
        fontFamily: ["Inter", "Helvetica", "Arial", "sans-serif"].join(","),

        fontWeight: 400,
      },

      h1: {
        fontSize: "52px",
        fontWeight: "500",

        "@media (min-width: 768px) and (max-width: 991px)": {
          fontSize: "45px",
        },

        "@media (max-width: 768px) and (min-width: 575px)": {
          fontSize: "38px",
        },

        "@media (max-width: 575px)": {
          fontSize: "34px",
        },
      },

      h2: {
        fontSize: "42px",
        fontWeight: "500",
        textTransform: "capitalize",

        "@media (min-width: 768px) and (max-width: 991px)": {
          fontSize: "38px",
        },

        "@media (max-width: 768px) and (min-width: 575px)": {
          fontSize: "32px",
        },

        "@media (max-width: 575px)": {
          fontSize: "30px",
        },
      },

      h3: {
        fontSize: "38px",
        fontWeight: "500",

        "@media (min-width: 768px) and (max-width: 991px)": {
          fontSize: "32px",
        },

        "@media (max-width: 768px) and (min-width: 575px)": {
          fontSize: "28px",
        },

        "@media (max-width: 575px)": {
          fontSize: "24px",
        },
      },

      h4: {
        fontSize: "34px",
        fontWeight: "500",

        "@media (min-width: 768px) and (max-width: 991px)": {
          fontSize: "28px",
        },

        "@media (max-width: 768px) and (min-width: 575px)": {
          fontSize: "24px",
        },

        "@media (max-width: 575px)": {
          fontSize: "20px",
        },
      },

      h5: {
        fontSize: "24px",
        fontWeight: "500",

        "@media (min-width: 768px) and (max-width: 991px)": {
          fontSize: "23px",
        },

        "@media (max-width: 768px) and (min-width: 575px)": {
          fontSize: "22px",
        },

        "@media (max-width: 575px)": {
          fontSize: "20px",
        },
      },
    },

    components: {
      MuiTextField: {
        defaultProps: {
          color: "primary",
          disabled: isLoading,
        },
      },

      MuiButton: {
        defaultProps: {
          variant: "contained",
          disabled: isLoading,
        },
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
      MuiIconButton: {
        defaultProps: {
          disabled: isLoading,
        },
      },
    },
  });

export default createMuiTheme;
