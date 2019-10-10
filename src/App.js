import React,{ Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import defaultTheme from "./theme/theme";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import './App.css';

import Home from "./pages/Home";
import Footer from "./common/Footer";
import About from "./pages/About";
import Career from "./pages/Career";
import Blog from './pages/Blog'
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
//import NavBar from "./components/NavBar";
// import store from "./reducers/store";

import Reducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)

const theme = createMuiTheme(defaultTheme)


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={createStoreWithMiddleware(Reducer,
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
          <div className="App">
            <div className="">
              <Router>
                {/* <NavBar /> */}
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/career" component={Career} />
                  <Route exact path="/blog" component={Blog} />
                  {/* <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={Signup} /> */}
                </Switch>
                <Footer />
              </Router>
            </div>
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
  
}

export default App;
