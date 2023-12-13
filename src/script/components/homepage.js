import { students } from "../data.js";
import { teachers } from "../data.js";
import { classes } from "../data.js";

export const homepageData = {
  content: `
    <h1 class="m-5">Welcome Mirijam</h1>

    <div class="container text-center">
      <div class="row">
        <div class="col-4" id="div-container">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${students.length}</h5>
              <p class="card-text">Number of students</p>
            </div>
          </div>
        </div>
        <div class="col-4" id="div-container">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${teachers.length}</h5>
              <p class="card-text">Number of teachers</p>
            </div>
          </div>
        </div>
        <div class="col-4" id="div-container">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${classes.length}</h5>
              <p class="card-text">Number of classes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};
