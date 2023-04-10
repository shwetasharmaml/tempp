import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import MainLandingPage from "./components/MainLandingPage";
import Form from "./components/Form";
function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<MainLandingPage/>}/>
        <Route path="/checkout" element={<Form/>}/>

      </Routes>
     </Router>
  );
}
export default App;
