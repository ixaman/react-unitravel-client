import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AddPackages from './components/AddPackages/AddPackages';
import Booking from './components/Booking/Booking';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ManageAllOrder from './components/ManageAllOrder/ManageAllOrder';
import MyOrder from './components/MyOrder/MyOrder';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/manageorder">
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>
            <PrivateRoute path="/addpackage">
              <AddPackages></AddPackages>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:p_id">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
