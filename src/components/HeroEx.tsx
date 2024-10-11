import { useState } from "react";
import NumList from "./NumList";
import { useListed } from "../assets/Listed";

export interface NumListIcon {
  id: string;
  icon: React.ElementType;
  insideHeader: string;
  insideText: string;
  themeIcon: React.ElementType;
  skills: { name: string; proficiency: number }[];
}

interface Props {
  children: React.ReactNode;
}

const HeroEx: React.FC<Props> = () => {
  const listedItems = useListed();
  const [selectedItem, setSelectedItem] = useState<NumListIcon>(listedItems[0]); // Default to the first item

  return (
    <div className="h-full w-full ">
      <NumList selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
    </div>
  );
};

export default HeroEx;
