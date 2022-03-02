import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import TopBar from "./Components/TopBar/TopBar";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";


function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={user ? <Home /> : <Register />} />
      <Route path="/login" element={user ? <Home /> : <Login />} />
      <Route path="/write" element={user ?  <Write /> : <Register />} />
      <Route path="/settings" element={user ?  <Settings /> : <Register />} />
      <Route path="/post/:postId" element={<Single />} />      
      </Routes> 
    </Router>
    
  );
}

export default App;
