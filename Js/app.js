"use strict";
let allEmployees = [];
function Employee(
  Employee_id,
  Employee_fullName,
  Employee_department,
  Employee_level,
  Employee_imgUrl
) {
  (this.id = Employee_id),
    (this.fullName = Employee_fullName),
    (this.department = Employee_department),
    (this.level = Employee_level);
  this.imgUrl = Employee_imgUrl;
  this.salary;
  allEmployees.push(this);
}

Employee.prototype.salary = function () {
  if (this.level === "Junior") {
    this.salary = Math.floor(Math.random() * (1000 - 500)) + 500;
  }
  if (this.level === "Mid-Senior") {
    this.salary = Math.floor(Math.random() * (1500 - 1000)) + 1000;
  }
  if (this.level === "Senior") {
    this.salary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
  }
  this.salary -= (this.salary / 100) * 7.5;
};

Employee.prototype.render = function () {
  let result = document.getElementById("main");
  let tblBody = document.createElement("tbody");
  for (let i = 0; i < 1; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 1; j++) {
      let cell = document.createElement("td");
      let cell2 = document.createElement("td");

      let cellTextFullName = document.createTextNode(this.fullName);
      let cellTextSalary = document.createTextNode(this.salary);
      cell.appendChild(cellTextFullName);
      cell2.appendChild(cellTextSalary);
      row.appendChild(cell);
      row.appendChild(cell2);
    }
    tblBody.appendChild(row);
  }
  result.appendChild(tblBody);
};
const ghazi = new Employee(
  1000,
  "Ghazi Samer",
  "Administration",
  "Senior",
  "./assets/ch_ml_1.jpg"
);
const lina = new Employee(
  1001,
  "Lana Ali",
  "Finance",
  "Senior",
  "./assets/ch_fm_1.jpg"
);
const tamara = new Employee(
  1002,
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "./assets/ch_fm_2.jpg"
);
const safi = new Employee(
  1003,
  "Safi Walid",
  "Administration",
  "Mid-Senior",
  "./assets/ch_ml_2.jpg"
);
const omar = new Employee(
  1004,
  "Omar Zaid",
  "Development",
  "Senior",
  "./assets/ch_ml_3.jpg"
);
const rana = new Employee(
  1005,
  "Rana Saleh",
  "Development",
  "Junior",
  "./assets/ch_fm_3.jpg"
);
const hadi = new Employee(
  1006,
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "./assets/ch_ml_4.jpg"
);
for (let i = 0; i < allEmployees.length; i++) {
  allEmployees[i].salary();
  allEmployees[i].render();
}

// Day2
function randId() {
  const id = Math.floor(1000 + Math.random() * 9000);
  return id;
}
