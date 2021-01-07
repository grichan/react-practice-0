import './App.scss';
import Counter from './components/Counter'
import Header from './components/Header'
import About from './components/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {  
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            Welcome
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/counter">
            <Counter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;