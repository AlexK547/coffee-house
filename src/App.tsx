import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import NotFound from "./components/404NotFound";
import Header from "./components/header/Header";
import { FC } from "react";
import Footer from "./components/footer/Footer";

const App: FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>

      <Footer />

    </BrowserRouter>
  );
};

export default App;
