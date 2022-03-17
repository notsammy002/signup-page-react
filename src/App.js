import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import styled from "styled-components";
import InfroInput from "./component/Info";
import Register from "./component/Register";
import logo from "./React-icon.svg.png"
import Dashboard from "./component/Dashboard";

const StyledNav = styled.ul`
  list-style: none;
  border: 2px solid;
  display: flex;
  padding: 10px;

  li {
    margin-right: auto;
  }
`;

const imgNav = styled.img`
  width: 40px
  height: 10px
`;

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <StyledNav>
            <li>
              <imgNav src={logo} alt="Logo" />
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/SignIn">SignIn</Link>
            </li>
            <li>
              <Link to="/SignUp">SignUp</Link>
            </li>
          </StyledNav>

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/SignIn" element={<SignIn />}></Route>
            <Route exact path="/SignUp" element={<SignUp />}></Route>
            <Route exact path="/info" element={<InfroInput />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
