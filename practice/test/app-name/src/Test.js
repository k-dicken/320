// import logo from './logo.svg';
import './App.css';
import React from "react";
// import Test from "./Test";

// export default function App() {
export default class Test extends React.Component {
  state = { color: "blue" };

  render() {
    return (
        <p>Today's color is {this.state.color}.</p>
    );
  } 
  
}