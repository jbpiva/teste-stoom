import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Massa from "./pages/Massa";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/massa" exact component={Massa} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
