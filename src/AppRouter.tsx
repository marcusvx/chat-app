import { Switch, Route } from "react-router-dom";
import { DefaultPage } from "./pages/DefaultPage";
import { RoomPage } from "./pages/RoomPage";

const Router = () => (
  <Switch>
    <Route exact path="/">
      <DefaultPage />
    </Route>
    <Route path="/rooms/:id">
      <RoomPage />
    </Route>
  </Switch>
);

export default Router;
