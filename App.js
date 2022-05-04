// import logo from './logo.svg';
import "./App.css";
import Welcome from "./component/Welcome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import HomeTwoComment from "./component/HomeTwoComment";
import Increment from "./component/Increment";
import Profile from "./component/Profile";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/homeTwoComment" element={<HomeTwoComment />} />
            <Route path="increment" element={<Increment />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>

        {/* welcome
home =>homeOne=>homeOneComment =>homeTwoComments

homeTwoComment=>home

Increment =>incrementData
Profile

*/}
      </div>
    </>
  );
}

export default App;
