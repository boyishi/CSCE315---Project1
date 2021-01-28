import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Services from "./components/Services";
import Secret from "./components/Secret";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/" component={About}></Route>
        <Route path="/" component={Projects}></Route>
        <Route path="/" component={Skills}></Route>
        <Route path="/" component={Services}></Route>
        <Route path="/" component={Secret}></Route>
      </Switch>
    </main>
  );
}

export default App;
