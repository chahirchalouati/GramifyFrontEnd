import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import PrivateRoute from "../Routes/PrivateRoute";
import ErrorPage from "./ErrorPage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import { store } from "../Redux";
import history from "../Routes/History";
import Profile from "./Profile";
import CreateStory from "./CreateStory";
import Videos from "./Videos";



const App = (props) => {
    return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <PrivateRoute exact path="/home" component={Home}></PrivateRoute>
                    <PrivateRoute exact path="/profile" component={Profile}></PrivateRoute> 
                    <PrivateRoute exact path="/videos" component={Videos}></PrivateRoute>
                    <PrivateRoute exact path="/create/story" component={CreateStory}></PrivateRoute>
            
                    <Route path="*" component={ErrorPage} />
                    </Switch>
                </Router>
            </Provider>
            )
}

export default App
