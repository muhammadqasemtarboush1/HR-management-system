"use strict";
let allEmployees = [];
let btn = document.getElementById("btn");
let form = document.getElementById("form");
function Employee(
  Employee_id,
  Employee_fullName,
  Employee_department,
  Employee_level,
  Employee_imgURI
) {
  (this.id = Employee_id),
    (this.fullName = Employee_fullName),
    (this.department = Employee_department),
    (this.level = Employee_level);
  this.imgURI = Employee_imgURI;
  this.salary;
  allEmployees.push(this);
}

function randId() {
  const id = Math.floor(1000 + Math.random() * 9000);
  return id;
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
  let result = document.getElementById("row");
  let colome = document.createElement("div");
  colome.classList.add("column");

  for (let i = 0; i < 1; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    for (let j = 0; j < 1; j++) {
      let avo = document.createElement("div");
      // card.classList.add("card");
      let title = document.createElement("h4");
      let department = document.createElement("p");
      let employeeLevel = document.createElement("p");
      let employeeIMG = document.createElement("img");
      let totalSalary = document.createElement("p");
      let id = document.createElement("p");

      let cellTextFullName = document.createTextNode(this.fullName);
      let cellTextDepartment = document.createTextNode(this.department);
      let employeeLevelText = document.createTextNode(this.level);
      // let employeeimgURI = document.createTextNode(this.department);
      employeeIMG.src = this.imgURI;
      let salary = document.createTextNode(this.salary);
      let uID = document.createTextNode(this.id);

      title.appendChild(cellTextFullName);
      department.appendChild(cellTextDepartment);
      employeeLevel.appendChild(employeeLevelText);
      // employeeIMG.appendChild(employeeimgURI);
      totalSalary.appendChild(salary);
      id.appendChild(uID);

      avo.appendChild(title);
      avo.appendChild(department);
      avo.appendChild(employeeLevel);
      avo.appendChild(employeeIMG);
      avo.appendChild(totalSalary);
      avo.appendChild(id);
      card.appendChild(avo);
    }
    colome.appendChild(card);
  }
  result.appendChild(colome);
};
// const ghazi = new Employee(
//   1000,
//   "Ghazi Samer",
//   "Administration",
//   "Senior",
//   "./assets/ch_ml_1.jpg"
// );
// const lina = new Employee(
//   1001,
//   "Lana Ali",
//   "Finance",
//   "Senior",
//   "./assets/ch_fm_1.jpg"
// );
// const tamara = new Employee(
//   1002,
//   "Tamara Ayoub",
//   "Marketing",
//   "Senior",
//   "./assets/ch_fm_2.jpg"
// );
// const safi = new Employee(
//   1003,
//   "Safi Walid",
//   "Administration",
//   "Mid-Senior",
//   "./assets/ch_ml_2.jpg"
// );
// const omar = new Employee(
//   1004,
//   "Omar Zaid",
//   "Development",
//   "Senior",
//   "./assets/ch_ml_3.jpg"
// );
// const rana = new Employee(
//   1005,
//   "Rana Saleh",
//   "Development",
//   "Junior",
//   "./assets/ch_fm_3.jpg"
// );
// const hadi = new Employee(
//   1006,
//   "Hadi Ahmad",
//   "Finance",
//   "Mid-Senior",
//   "./assets/ch_ml_4.jpg"
// );
function renderAll() {
  for (let i = 0; i < allEmployees.length; i++) {
    allEmployees[i].salary();
    allEmployees[i].render();
  }
}
renderAll();

// Day2

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  let name = event.target.name.value;
  let department = event.target.department.value;
  let level = event.target.level.value;
  let imgURI = event.target.imgURI.value;
  let uID = randId();
  let newEmployee = new Employee(uID, name, department, level, imgURI);
  console.log(newEmployee, "employee");
  newEmployee.salary();
  newEmployee.render();
  saveData(allEmployees);
}

function saveData(data) {
  let stringObj = JSON.stringify(data);
  localStorage.setItem("Employees", stringObj);
}

function getData() {
  let retrievedData = localStorage.getItem("Employees");

  let arrayData = JSON.parse(retrievedData);

  if (arrayData != null) {
    for (let i = 0; i < arrayData.length; i++) {
      console.log(arrayData[i], "imgURI");
      var newEmployee = new Employee(
        arrayData[i].id,
        arrayData[i].fullName,
        arrayData[i].department,
        arrayData[i].level,
        arrayData[i].imgURI
      );
      newEmployee.salary();
      newEmployee.render();
    }
  }
}

getData();
