import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import MainLandingPage from "./components/MainLandingPage";
function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<MainLandingPage/>}/>
      </Routes>
     </Router>
  );
}
export default App;
