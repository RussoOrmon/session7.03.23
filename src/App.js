import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Navbar } from "./pages/Navbar";
import { PrivateRoutes } from "./utils/PrivateRoutes";
import store from './store'
import { Button } from "@mui/material";

function AppContent() {

  const logOutHandler=(data)=>{
    localStorage.removeItem("AUTH", data.token )
  }

  return (
    <div className="App">
      <h1>#hELlo@</h1>
      <Router>
        <Navbar />
        <Button  onClick={logOutHandler}  > LogOut  </Button>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
