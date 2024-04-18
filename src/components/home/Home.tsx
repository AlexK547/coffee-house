import Enjoy from "../enjoy/Enjoy";
import Favorites from "../favorites/Favorites";
import About from "../about/About";
import Mobile from "../mobile/Mobile";

interface propsHome {
  setHome: Function;
}

function Home (props: propsHome) {
  return (
    <main>
      <Enjoy setHome={props.setHome}/>
      <Favorites />
      <About />
      <Mobile />
    </main>
  )
}

export default Home;