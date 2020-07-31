import React from 'react'
import { Switch, BrowserRouter, Route } from "react-router-dom"

import './App.css'
import Dashboard from "./components/Dashboard/Dashboard"
import Home from "./components/Home/Home"
import { ViewContextProvider } from "./context"


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/stocks">
            <ViewContextProvider>
              <Dashboard />
            </ViewContextProvider>
          </Route>

        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
