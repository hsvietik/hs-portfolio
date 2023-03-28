"use strict";
import { skillsList, educationList } from "./data.js";
//Skills markup CV page
const skillContainerCV = document.querySelector(".cv-skills-list");
const skillsMarkupCV = skillsList.map(
  (skill) => `<li>
<p>${skill}</p>
</li>`
);
console.log(skillContainerCV);
skillContainerCV.insertAdjacentHTML("beforeend", skillsMarkupCV.join(""));
