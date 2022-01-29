import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Category } from "./pages/Category";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Recipe } from "./pages/Recipe";

function App() {
  return (
    <>
      <HashRouterstatus>
        <Header />
        <main className="container content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/meal/:id" element={<Recipe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </HashRouterstatus>
    </>
  );
}

export default App;
