import { Route, Switch } from "react-router-dom";
import FeatersProduct from "./Feauters";
import Header from "./Feauters/Product/component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/product" component={FeatersProduct} />
      </Switch>
    </div>
  );
}

export default App;
