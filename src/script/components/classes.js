import { classes } from "../data.js";

export const classesData = {
  content: `
    <h1>Classes</h1>
    <div class="card-deck" style="display: flex; flex-wrap: wrap;">
      ${classes
        .map(
          (lesson, index) => `
        <div class="card" style="width: 18rem; margin: 10px; position: relative;">
          <div class="card-body">
            <h5 class="card-title">${lesson.class}</h5>
            <h7 class="card-title">${lesson.name}</h7>
            <br><br>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Students</a>
            <a href="#" class="card-link">Teachers</a>
          </div>
          <div class="buttons" style="position: absolute; top: 0; right: 0; padding: 10px; z-index: 1;">
            <button class="edit-button" data-index="${index}">&#9998;</button> 
            <button class="delete-button" data-index="${index}">&#128465;</button> 
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `,
};
