import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import PlayerScreen from "./screens/PlayerScreen";
import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";

const App = () => {
    return (
        <Router>
            <Container className="parentContainer">
                <Route path="/" component={HomeScreen} exact></Route>
                <Route path="/player" component={PlayerScreen}></Route>
                <Route path="/user" component={UserScreen}></Route>
            </Container>
        </Router>
    );
};

export default App;
