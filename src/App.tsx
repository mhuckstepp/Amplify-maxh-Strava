import { Route, Link } from "react-router-dom";
import MainPage from "./mainPage/MainPage";


function App() {
  
  return (
    <div className="App">
        <Route exact path="/">
        <p>Hello from unauthes</p>
        <Link to="/List">List</Link>
        </Route>
        <Route path="/List">
        <Link to="/">Home</Link>
        <MainPage />
        </Route>
    </div>
  );
}

export default App;
