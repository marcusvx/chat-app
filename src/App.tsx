import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import RoomList from "./components/RoomList";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <header>Chat rooms</header>
        <RoomList />
        <div>
          <AppRouter />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
