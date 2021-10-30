import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
