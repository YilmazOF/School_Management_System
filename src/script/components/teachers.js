import { teachers } from "../data.js";

export const teachersData = {
  content: `
    <h1>Teachers</h1>
    <div class="card-container" style="display: flex; flex-wrap: wrap; position: relative;">
      ${teachers.map((teacher, index) => {
        return `
          <div class="card" style="width: 18rem; margin: 10px;">
            <div class="card-body">
              <h5 class="card-title">${
                teacher.name + " " + teacher.surname
              }</h5>
              <h7 class="card-title">${teacher.profession}</h7>
              <br><br>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link">Students</a>
              <a href="#" class="card-link">Classes</a>
            </div>
            <div class="buttons" style="position: absolute; top: 0; right: 0; padding: 10px; z-index: 1;">
              <button onclick="editTeacher(${index})">&#9998;</button> <!-- Kalem simgesi -->
              <button onclick="deleteTeacher(${index})">&#128465;</button> <!-- Çöp kutusu simgesi -->
            </div>
          </div>
          
        `;
      })}
      
    </div>
  `,
};
