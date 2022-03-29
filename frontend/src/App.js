import { BrowserRouter, Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import LangdingPage from "./Screens/Landing";
import LiveQueue from "./Screens/LiveQueue";
import SessionCode from "./Screens/SessionCode";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={ <Navigate to="/home"/>} />
        <Route path="/home" element={<LangdingPage />} />
        <Route path="/queue" element={<LiveQueue />} />
        <Route path="/code" element={<SessionCode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;