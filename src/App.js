import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import PlayerScreen from "./screens/PlayerScreen";

const App = () => {
    return (
        <Router>
            <Container className="parentContainer">
                <Route path="/player" component={PlayerScreen}></Route>
            </Container>
        </Router>
    );
};

export default App;
