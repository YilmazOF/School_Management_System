export const teachers = [
  {
    name: "Hannes",
    surname: "Bühler",
    profession: "Javascript Expert",
  },
  {
    name: "Cornelius",
    surname: "Schelbert",
    profession: "AWS Expert",
  },
  {
    name: "Michael",
    surname: "Brown",
    profession: "Cloud",
  },
];

export const students = [
  {
    name: "Max ",
    surname: "Herman",
    profession: "Fullstack",
    note1: 4,
    note2: 3,
    averageGrade: 0,
  },
  {
    name: "Antony",
    surname: "Egbe",
    profession: "Cloud",
    note1: 4,
    note2: 6,
    averageGrade: 0,
  },
  {
    name: "Ali",
    surname: "Yilmaz",
    profession: "Web Developer",
    note1: 8,
    note2: 9,
    averageGrade: 0,
  },
  {
    name: "Ayşe",
    surname: "Aydin",
    profession: "Mobile Developer",
    note1: 10,
    note2: 6,
    averageGrade: 0,
  },
  {
    name: "Mehmet",
    surname: "Kemal",
    profession: "Systems Engineer",
    note1: 8,
    note2: 5,
    averageGrade: 0,
  },
  {
    name: "Fatma",
    surname: "Demir",
    profession: "Data Scientist",
    note1: 4,
    note2: 7,
    averageGrade: 0,
  },
  {
    name: "Mustafa",
    surname: "Yildirim",
    profession: "Artificial Intelligence Engineer",
    note1: 2,
    note2: 7,
    averageGrade: 0,
  },
  {
    name: "Selma",
    surname: "Taş",
    profession: "Security Analyst",
    note1: 4,
    note2: 7,
    averageGrade: 0,
  },
  {
    name: "Ahmet",
    surname: "Küçük",
    profession: "Network Engineer",
    note1: 6,
    note2: 8,
    averageGrade: 0,
  },
  {
    name: "Emine",
    surname: "Yildiz",
    profession: "Game Developer",
    note1: 8,
    note2: 2,
    averageGrade: 0,
  },
  {
    name: "Oğuz",
    surname: "Can",
    profession: "DevOps Engineer",
    note1: 4,
    note2: 6,
    averageGrade: 0,
  },
  {
    name: "Zeynep",
    surname: "Gül",
    profession: "UI/UX Designer",
    note1: 4,
    note2: 9,
    averageGrade: 0,
  },
  {
    name: "Erdem",
    surname: "Kara",
    profession: "Business Analyst",
    note1: 4,
    note2: 7,
    averageGrade: 0,
  },
  {
    name: "Elif",
    surname: "Şahin",
    profession: "Test Engineer",
    note1: 6,
    note2: 7,
    averageGrade: 0,
  },
  {
    name: "Cem",
    surname: "Yilmaz",
    profession: "Frontend Developer",
    note1: 3,
    note2: 8,
    averageGrade: 0,
  },
  {
    name: "Demet",
    surname: "Çelik",
    profession: "Backend Developer",
    note1: 4,
    note2: 7,
    averageGrade: 0,
  },
  {
    name: "Arda",
    surname: "Yilmaz",
    profession: "Database Engineer",
    note1: 4,
    note2: 7,
    averageGrade: 0,
  },
  {
    name: "Yağmur",
    surname: "Aydin",
    profession: "QA Engineer",
    note1: 4,
    note2: 7,
    averageGrade: 0,
  },
];
function calculateAverageGrades(students) {
  students.map(function (student) {
    // Notların ortalamasını hesapla ve nesneye ekle
    student.averageGrade = (student.note1 + student.note2) / 2;
  });
}

// Ortalama notları hesapla ve array'e ekle
calculateAverageGrades(students);

// Her bir öğrencinin bilgilerini, notlarını ve ortalama notlarını ekrana yazdır
students.forEach(function (student) {
  console.log(
    `${student.name} ${student.surname} - Note 1: ${student.note1}, Note 2: ${student.note2}, Average Grade: ${student.averageGrade}`
  );
});
export const classes = [
  {
    class: "Fullstack Class",
    name: "Hannes Bühler",
  },
  {
    class: "Cloud Class",
    name: "Ali Sayar",
  },
  {
    class: " AWS Class",
    name: "Guven Kurtul",
  },
  {
    class: "Javascript Class",
    name: " John Smith ",
  },

  {
    class: "Python Class",
    name: "Mary Johnson",
  },
];
