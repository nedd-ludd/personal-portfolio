import React, { useState } from "react";
import SkillCard from "./common/SkillCard";
import { mySkills } from "./common/skills";

const Skills = () => {
  const [skills, setSkills] = useState(mySkills);
  return (
    <div id="skills" className="w-full border-1 lg:h-screen p-2 my-1">
      <div className="max-w-[1240px] mx-auto flex flex-col h-full overflow-hidden">
        <h2 className="py-4 text-gray-600">SKILLS</h2>

        {Object.keys(skills).map((skillType) => (
          <>
            <h4
              key={skills[skillType][0]}
              className="text-lg tracking-widest uppercase text-[#38804f] italic py-2 mt-3"
            >
              {skills[skillType][0]}
            </h4>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8">
              {Object.keys(skills[skillType][1]).map((skill) => (
                <SkillCard
                  key={skill}
                  image={skills[skillType][1][skill]}
                  text={skill}
                />
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Skills;
