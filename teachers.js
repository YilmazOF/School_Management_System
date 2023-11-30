const teachers = [
  {
    name: "Hannes",
    surname: "Buhler",
    expertise: "Javascript Expert",
  },
  {
    name: "Ali",
    surname: "Sayar",
    expertise: "AWS Expert",
  },
];

const studentInfo = students
  .map((student) => {
    return `<li>
                      <div>
                         <p>Name: ${student.name}</p>
                          <p>Surname: ${student.surname}</p>
                          <p>Expertise: ${student.expertise}</p>
                      </div>
                  </li>`;
  })
  .join("");
