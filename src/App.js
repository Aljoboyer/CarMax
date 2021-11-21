import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './Pages/Commonpages/Homepage/Homepage';
import Dashboard from './Pages/Commonpages/Dashboard/Dashboard';
import Moremodels from './Pages/Userspages/Moremodels/Moremodels';
import Authprovider from './Context/Authprovider';
import Login from './Pages/Commonpages/Authpages/Login/Login';
import Register from './Pages/Commonpages/Authpages/Register/Register';
import Buypage from './Pages/Userspages/BuyPage/Buypage';
import Privateroute from './Privateroute/Privateroute';
import Footer from './Pages/Commonpages/Homepage/Footer/Footer';
import Notfound from './Pages/Commonpages/Notfound/Notfound';
import Payment from './Pages/Userspages/Pymentpage/Payment';
import Carshop from './Pages/Userspages/Carshop/Carshop';


function App() {
  return (
    <div className="Container-fluid">
      <Authprovider>
          <Router>
              <Switch>
                  <Route exact path="/">
                      <Homepage></Homepage>
                  </Route>
                  <Privateroute path="/dashboard">
                    <Dashboard></Dashboard>
                  </Privateroute>
                  <Route exact path="/login">
                    <Login></Login>
                  </Route>
                  <Route exact path="/register">
                    <Register></Register>
                  </Route>
                  <Privateroute exact path="/buypage/:id">
                    <Buypage></Buypage>
                  </Privateroute>
                  <Route exact path="/payment/:id">
                        <Payment></Payment>
                  </Route>
                  <Route exact path="/carshop">
                    <Carshop></Carshop>
                    </Route>
                  <Route exact path="*">
                    <Notfound></Notfound>
                  </Route>
              </Switch>
              <Footer></Footer>
          </Router>
      </Authprovider>
    </div>
  );
}

export default App;
