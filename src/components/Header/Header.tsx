import { Navbar } from "react-bulma-components";
import icon from "./chat-icon.png";

const Header = () => {
  return (
    <Navbar className="has-shadow">
      <Navbar.Brand>
        <Navbar.Item href="/">
          <img alt="A chat room app" height="32" src={icon} width="32" className="m-2" />
          <h1 className="is-size-4 is-uppercase has-text-weight-bold">
            Chat Rooms
          </h1>
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
