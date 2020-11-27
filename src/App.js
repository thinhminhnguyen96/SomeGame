import React, { Component, Fragment, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { lazy } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from "./Loading";
import { SET_CREDENTIALS } from "./redux/action/type";
import { createAction } from "./redux/action";

const Home = React.lazy(()=>import("./pages/Home")) ;
const SignIn = React.lazy(()=>import("./pages/SignIn")) ;


class App extends Component {
  render() {
    return (

      <BrowserRouter>
      <Suspense fallback={<div>
        <Loading/>
      </div>}>
      {this.props.object === null ? (
            <Fragment>
              <Route path="/" component={SignIn} />
            </Fragment>
          ) : (

        <Switch>
          
            <Fragment>
              <Route path="/dangnhap" component={SignIn} />
              <Route exact path="/" component={Home} />
            </Fragment>
          
        </Switch>

        )}
        </Suspense>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    const object =JSON.parse(localStorage.getItem("o")) ;
    
    if (object ) {
      this.props.dispatch(createAction(SET_CREDENTIALS, object));
      
    }
  }

}

const mapStateToProps = (state) => {
  return {
    object: state.credentials.object,
  };
};


export default connect(mapStateToProps)(App);
