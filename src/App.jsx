import { BrowserRouter } from "react-router-dom";

// components
import Router from "./router";
import { NotistackProvider, MaterialThemeProvider } from "./providers";

function App() {
  return (
    <MaterialThemeProvider>
      <NotistackProvider>
        <BrowserRouter basename="/app">
          <Router />
        </BrowserRouter>
      </NotistackProvider>
    </MaterialThemeProvider>
  );
}

export default App;
