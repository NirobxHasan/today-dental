import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Serivces from './components/Services/Serivces';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Doctors from './components/Doctors/Doctors';

function App() {
    return (
        <div>
            <AuthProvider>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/services">
                            <Serivces />
                        </Route>
                        <PrivateRoute path="/service/:id">
                            <ServiceDetails />
                        </PrivateRoute>
                        <Route path="/doctor">
                            <Doctors />
                        </Route>

                        <Route path="/About">
                            <About />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
