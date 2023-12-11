import { students } from "../data.js";

export const studentsData = {
  name: `Huseyin`,
  content: `
    <h1>Students</h1>
    <div class="card-deck" style="display: flex; flex-wrap: wrap; justify-content: space-between;">
      ${students
        .map(
          (student) => `
        <div class="card" style="width: 18rem; height: 18rem; margin-bottom: 10px; position: relative;">
      
          <div class="card-body" style="height: 100%;">
            <h5 class="card-title">${student.name + " " + student.surName}</h5>
            <h7 class="card-title" style="opacity: 0.7;">${
              student.profession
            }</h7>

            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            <div style="position: absolute; top: 10px; right: 10px; text-align: center; display: flex; align-items: center;">
              <button class="btn btn-info" style="border-radius: 50%; padding: 5px 10px; font-size: 16px; margin-right: 5px;">Edit</button>
              <button class="btn btn-success" style="border-radius: 50%; padding: 5px 10px; font-size: 16px;">+</button>
            </div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `,
};
