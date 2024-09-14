import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Counter from "./Counter";

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">counter</Link>
        <Link to="/movies-list">Movies List</Link>
      </header>
      <Switch>
        <Route exact path="/" component={Counter} />
        {/* <Route exact path="/movies-list" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
