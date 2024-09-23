import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { Contact } from "./pages/contact";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/auth" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
