import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div className="Age-label">
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        {this.props.loading ? <p>Loading..</p> : "Please Hit the Age"}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    loading: state.loading
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
