import { header } from "./components/header.js";
import { footer } from "./components/footer.js";
import { layout } from "./components/layout.js";
import { render } from "./function.js";
import { homepageData } from "./components/homepage.js";
import { teachersData } from "./components/teachers.js";
import { studentsData } from "./components/students.js";
import { classesData } from "./components/classes.js";

render("#app", header + layout + footer);

document.querySelector("#home-link").addEventListener("click", () => {
  render("#content", homepageData.content);
});
document.querySelector("#teachers-link").addEventListener("click", () => {
  render("#content", teachersData.content);
});
document.querySelector("#students-link").addEventListener("click", () => {
  render("#content", studentsData.content);
});
document.querySelector("#classes-link").addEventListener("click", () => {
  render("#content", classesData.content);
});
