import { BrowserRouter, Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import LangdingPage from "./Screens/Landing";
import LiveQueue from "./Screens/LiveQueue";
import SessionCode from "./Screens/SessionCode";
import StartEvent from "./Screens/StartEvent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/home"/>} />
        <Route path="/home" element={<LangdingPage />} />
        <Route path="/queue" element={<LiveQueue />} />
        <Route path="/code" element={<SessionCode />} />
        <Route path="/start_event" element={<StartEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{/* <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="*" element={authenticated ? <Navigate to="/home" /> : <Navigate to="/auth" /> } />

              <Route path="/auth" element={authenticated ? <Navigate to="/home" /> : <Auth /> } />
              <Route path="/auth/partier" element={authenticated ? <Navigate to="/home" /> : <PartierAuth /> } />
              <Route path="/auth/organization" element={authenticated ? <Navigate to="/home" /> : <OrgAuth /> } />

              <Route path="/home" element={authenticated ? <Home /> : <Navigate to="/auth" /> } />

              <Route path="/event" element={authenticated ? <Event /> : <Navigate to="/auth" /> } />

              <Route path="/settings" element={authenticated ? <Settings /> : <Navigate to="/auth" /> } />
            </Routes>

          <h1>Logged in: {String(authenticated)}</h1>
          <button onClick={() => Login(true)}>Login</button>
          <button onClick={() => Logout()}>Logout</button>
          <Link to="home">Home</Link>
          <Link to="auth">Auth</Link>
          <Link to="event">Event</Link>
          <Link to="settings">Settings</Link>

          </BrowserRouter>
      </ThemeProvider> */}