import { BrowserRouter, Route } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

import { NewRoom } from "./Pages/NewRoom";
import { Home } from "./Pages/Home";

import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" component={Home} exact />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
