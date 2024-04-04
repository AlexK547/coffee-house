import { FC } from "react";
import Enjoy from "../enjoy/Enjoy";
import Favorites from "../favorites/Favorites";
import About from "../about/About";

const Home: FC = () => {
  return (
    <main>
      <Enjoy />
      <Favorites />
      <About />
    </main>
  )
}

export default Home;