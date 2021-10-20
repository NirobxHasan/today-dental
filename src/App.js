import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Serivces from './components/Services/Serivces';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Login from './components/Login/Login';
function App() {
    return (
        <div>
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
                    <Route path="/service/:id">
                        <ServiceDetails />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
