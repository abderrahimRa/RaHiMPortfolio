import { ListItems } from "../App";
import HeroEx from "../components/HeroEx";
import NavBar from "../components/Navbar";
import Profile from "../components/Profile";

const Experience = () => {
  return (
    <div className="">
      <NavBar menuItems={ListItems} />
      <Profile className="">
        <HeroEx>
          <div></div>
        </HeroEx>
      </Profile>
    </div>
  );
};

export default Experience;
