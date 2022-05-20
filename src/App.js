import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./layouts/Navigation";
import Posts from "./pages/Posts";
import SignIn from "./pages/SignIn";
function App() {
  return (
    <Router>
       <div>
         <Navigation></Navigation>
       </div>
      <Container>
       <Routes>
        <Route exact path="/" element={<Posts/>}></Route>
        <Route exact path="/signin" element={<SignIn/>}></Route>
       </Routes>
      </Container>
    </Router>
  );
}

export default App;
