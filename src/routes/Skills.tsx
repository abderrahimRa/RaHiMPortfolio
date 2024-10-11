import { ListItems } from "../App";
import { skillsData } from "../assets/data/SkillsData";
import NavBar from "../components/Navbar";
import Profile from "../components/Profile";
import SkillsCard from "../components/SkillsCard";

const Skills = () => {
  return (
    <div>
      <NavBar menuItems={ListItems} />
      <Profile className="h-fit w-fit">
        <SkillsCard skills={skillsData} />
      </Profile>
    </div>
  );
};

export default Skills;
