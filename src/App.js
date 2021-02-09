import React from "react";
import "./App.css";
import "./assets/custom.styles.css";
import Dashboard from "./pages/dashboard";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
class App extends React.Component {

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps, null)(App);
