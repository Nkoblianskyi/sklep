import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Preview } from "./components/preview";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Layout } from "./layouts/layout";
import { ShopPage } from './ShopPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Hero />
            <Preview />
            <About />
          </Layout>
        } />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Router>
  );
}

export default App;
