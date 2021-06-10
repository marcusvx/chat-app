import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import { RoomList } from "./components/RoomList";
import "react-datepicker/dist/react-datepicker.css";
import "bulma/css/bulma.min.css";
import { Header } from "./components/Header";
import { Columns, Container } from "react-bulma-components";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <section className="main-content is-fullheight p-2 mt-4">
          <Columns className="is-fullheight">
            <Columns.Column size={2} className="is-fullheight">
              <RoomList />
            </Columns.Column>
            <Columns.Column size={10} className="is-fullheight">
              <Container>
                <AppRouter />
              </Container>
            </Columns.Column>
          </Columns>
        </section>
      </BrowserRouter>
    </div>
  );
};

export default App;
