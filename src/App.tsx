import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NewRoom } from "./Pages/NewRoom";
import { Home } from "./Pages/Home";
import { Room } from "./Pages/Room";

import { AuthContextProvider } from "./contexts/AuthContext";
import { AdminRoom } from "./Pages/AdminRoom";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
