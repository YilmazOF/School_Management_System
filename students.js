// Öğrenciler listesini oluştur
const students = [
  {
    name: "Max ",
    surname: "Hermann",
    class: "Fullstack",
  },
  {
    name: "Anthony ",
    surname: "Egbe",
    class: "Cloud",
  },
];

const studentInfo = students
  .map((student) => {
    return `<li>
                    <div>
                       <p>Name: ${student.name}</p>
                        <p>Surname: ${student.surname}</p>
                        <p>Class: ${student.class}</p>
                    </div>
                </li>`;
  })
  .join("");
