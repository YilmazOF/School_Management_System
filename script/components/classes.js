import { classes } from "../data.js";

export const classesData = {
  content: `
        <h1>Classes</h1>
${classes.map((lesson) => {
  return `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> ${lesson.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`;
})}  
    `,
};
