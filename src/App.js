import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import AddService from "./Pages/AddService/AddService";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Mylist from "./Pages/MyList/MyList";
import NotFound from "./Pages/NotFound/NotFound";
import ServiceInfo from "./Pages/ServiceInfo/ServiceInfo";
import Services from "./Pages/Services/Services";
import MyList from "./Pages/MyList/MyList";
import Gallery from "./Pages/Gallery/Gallery";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Services></Services>
              <Home></Home>
            </Route>
            <Route path="/home">
              <Services></Services>
              <Home></Home>
            </Route>
            <Route path="/services">
              <AddService></AddService>
            </Route>
            <Route path="/mylist">
              <MyList></MyList>
            </Route>
            <Route path="/gallery">
              <Gallery></Gallery>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/serviceInfo/:serviceId">
              <ServiceInfo></ServiceInfo>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
