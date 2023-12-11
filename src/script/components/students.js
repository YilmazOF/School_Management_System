import { students } from "../data.js";

export const studentsData = {
  content: `
    <h1>Students</h1>
    <div class="card-deck" style="display: flex; flex-wrap: wrap;">
      ${students
        .map(
          (student) => `
        <div class="card" style="width: 18rem; margin: 10px;">
          <div class="card-body">
            <h5 class="card-title">${student.name + " " + student.surName}</h5>
            <h7 class="card-title">${student.profession}</h7><br><br>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p style="color: blue;">${
              student.averageGrade
                ? `Average Grade: ${student.averageGrade}`
                : ""
            }</p>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `,
};
