import { createTheme, ThemeProvider } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { BrowserRouter, Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import LangdingPage from "./Screens/Landing";
import LiveQueue from "./Screens/LiveQueue";
import SessionCode from "./Screens/SessionCode";
import StartEvent from "./Screens/StartEvent";

const theme = createTheme({
  palette:{
    primary: {
      main:"#4CAF50",
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={ <Navigate to="/home"/>} />
          <Route path="/home" element={<LangdingPage />} />
          <Route path="/queue" element={<LiveQueue />} />
          <Route path="/code" element={<SessionCode />} />
          <Route path="/start_event" element={<StartEvent />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;