import { FC } from "react";
import Enjoy from "../enjoy/Enjoy";
import Favorites from "../favorites/Favorites";
import About from "../about/About";
import Mobile from "../mobile/Mobile";

const Home: FC = () => {
  return (
    <main>
      <Enjoy />
      <Favorites />
      <About />
      <Mobile />
    </main>
  )
}

export default Home;