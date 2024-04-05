import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import NotFound from "./components/404NotFound";
import Header from "./components/header/Header";
import { FC } from "react";

const App: FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>

    </BrowserRouter>
  );
};

export default App;
