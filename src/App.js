import './App.css';
import Root from "./root";
import Login from './components/login';
import { Navbar } from 'react-bootstrap';
import Login2 from './components/login2';
import A from './deneme';

function App() {
  //const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));
  return (
    <div className="App">
      <Root/>
    </div>
  );
}

export default App;
