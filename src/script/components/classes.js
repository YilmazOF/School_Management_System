import { classes } from "../data.js";

export const classesData = {
  content: `
    <h1>Classes</h1>
    <div class="card-deck" style="display: flex; flex-wrap: wrap;">
      ${classes
        .map(
          (lesson) => `
        <div class="card" style="width: 18rem; margin: 10px;">
                    <div class="card-body">
                    <h5 class="card-title"> ${lesson.class}</h5>
                    <h7 class="card-title"> ${lesson.name}</h7>
                    <br><br>

            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Students</a>
            <a href="#" class="card-link">Teachers</a>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `,
};
