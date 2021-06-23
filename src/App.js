import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Start from './components/Start/Start'
import Game from './components/Game/Game'

function App() {
   return (
      <Switch>
         <Route path="/" exact component={Start} />
         <Route path="/game" exact component={Game} />
         {/* <Route component={Error404} /> */}
      </Switch>
   );
}

export default App;
