import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Massa from "./pages/Massa";
import Recheio from './pages/Recheio';
import Tamanho from './pages/Tamanho';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/massas/new" exact component={Massa} />
        <Route path="/recheio/new" exact component={Recheio} />
        <Route path="/tamanho/new" exact component={Tamanho} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
