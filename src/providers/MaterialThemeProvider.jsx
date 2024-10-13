import PropTypes from "prop-types";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

// components
import createMuiTheme from "@/theme";
import { useSelector } from "react-redux";
import SectionLoader from "@/components/loaders/SectionLoader";

function MaterialThemeProvider({ children }) {
  const { isDarkTheme, isLoading } = useSelector((state) => state.common);
  const theme = createMuiTheme({ darkTheme: isDarkTheme, isLoading });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <SectionLoader isLoading={isLoading} showContentWhileLoading>
          <CssBaseline />

          {children}
        </SectionLoader>
      </Box>
    </ThemeProvider>
  );
}

MaterialThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MaterialThemeProvider;
