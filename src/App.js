import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Nav from "../src/components/navbar/index"
import Footer from "../src/components/footer"

function App() {
  return (
    <Router>
      <Nav />
          <Route exact path="/reactportfolio" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
      <Footer />
    </Router>
  );
}

export default App;
