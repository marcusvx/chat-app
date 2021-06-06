import React from "react";
import RoomList from "./components/RoomList";

const App = () => {
  return (
    <div className="App">
      <header>Chat rooms</header>
      <nav>
        <RoomList />
      </nav>
    </div>
  );
};

export default App;
