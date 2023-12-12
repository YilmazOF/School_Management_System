import { students } from "../data.js";

export const studentsData = {
  content: `
    <h1>Students</h1>
    <div class="card-deck" style="display: flex; flex-wrap: wrap;">
      ${students
        .map(
          (student, index) => `
        <div class="card" style="width: 18rem; margin: 10px; position: relative;">
          <div class="card-body">
            <h5 class="card-title">${student.name + " " + student.surname}</h5>
            <h7 class="card-title">${student.profession}</h7><br><br>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p style="color: blue;">${
              student.averageGrade
                ? `Average Grade: ${student.averageGrade}`
                : ""
            }</p>
          </div>
          <div class="buttons" style="position: absolute; top: 0; right: 0; padding: 10px; z-index: 1;">
          <button onclick="(${index})">&#9998;</button> 
          <button onclick="(${index})">&#128465;</button> 
        </div>
        </div>
      `
        )
        .join("")}
    </div>
  `,
};

// Öğrenciyi düzenleme fonksiyonu
function editStudent(index) {
  // Burada öğrenciyi düzenleme işlemlerini gerçekleştirin
  console.log("Edit student at index", index);
}
