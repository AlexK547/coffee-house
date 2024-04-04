import { FC } from "react";
import Enjoy from "../enjoy/Enjoy";
import Favorites from "../favorites/Favorites";

const Home: FC = () => {
  return (
    <main>
      <Enjoy />
      <Favorites />
    </main>
  )
}

export default Home;