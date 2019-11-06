import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./Home";
import Login from "./Login/Login";

class App extends Component {
  render() {
    return (
      // <React.Fragment>
      //   <Home />
      // </React.Fragment>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        {/* <Route path='/chat' component={Chat} />
      <Route path='/applied' component={Applied} />
      <Route path='/signup' component={SignUp} />
      <Route path='/editjobs/:job' component={EditJobs} />
      <Route path='/company' component={Company} /> */}
      </BrowserRouter>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
