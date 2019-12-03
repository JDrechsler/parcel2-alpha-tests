import { h, render, Component } from "preact";
import Router, { Route } from "preact-router";
import { Suspense, lazy } from "preact/compat";

import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";

const LazyPage = lazy(() => import("./pages/Lazy"));

const NotFound = () => (
  <section>
    <h2>Not Found</h2>
  </section>
);

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Suspense fallback={<div></div>}>
          <Router>
            <Route path="/" component={Home} />
            <Route path="/lazy" component={LazyPage} />
            <Route default component={NotFound} />
          </Router>
        </Suspense>
      </div>
    );
  }
}

render(<App />, document.body);
