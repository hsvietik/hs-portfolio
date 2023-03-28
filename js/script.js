"use strict";
import { skillsList, educationList } from "./data.js";
//Skills markup main page
const skillContainer = document.querySelector(".skills-list");
const skillsMarkup = skillsList.map(
  (skill) => `<li class="skills-item">
<p class="skills-text">${skill}</p>
</li>`
);
skillContainer.insertAdjacentHTML("beforeend", skillsMarkup.join(""));

//Education markup main page
const educationContainer = document.querySelector(".education-list");
const educationMarkup = educationList.map(
  (education) => `<li class="education-item">
<p class="education-text">${education}</p>
</li>`
);
educationContainer.insertAdjacentHTML("beforeend", educationMarkup.join(""));
