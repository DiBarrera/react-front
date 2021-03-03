import './App.css';
import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router
} from 'react-router-dom';
import { Books } from './components/Books';
import BookDetails from './components/BookDetails';



function App() {
  return (
    <div className="App">
        <Router >
          <Switch>
            <Route exact path="/"  component={Books}/>
            <Route exact path="/:books"  component={BookDetails}/>
            <Route exact path="/login"  />
            <Route exact path="/signup"  />
            <Route exact path="/profile"  />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
