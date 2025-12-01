import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Commits from "./Commits";
import PullRequests from "./PullRequests";
import Issues from "./Issues";
import Pipeline from "./Pipeline";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Commits />} />
        <Route path="/pulls" element={<PullRequests />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/pipeline" element={<Pipeline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
