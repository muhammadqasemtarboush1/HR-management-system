"use strict";

let table = document.getElementById("tableID");
let tableContent = document.getElementById("table-content");
let tableFooter = document.getElementById("footer");

let DepartmentArr = [];

function Department(
  departmentName,
  departmentNoEmploee,
  departmentAvgSal,
  departmentTotalSalary
) {
  (this.name = departmentName),
    (this.noEmp = departmentNoEmploee),
    (this.avg = departmentAvgSal),
    (this.totla = departmentTotalSalary),
    DepartmentArr.push(this);
}

Department.prototype.render = function () {
  if (this.name === "Total") {
    let row = document.createElement("tr");

    tableFooter.appendChild(row);

    let departmentName = document.createElement("td");
    row.appendChild(departmentName);
    departmentName.textContent = this.name;

    let departmentNumOfEmployee = document.createElement("td");
    row.appendChild(departmentNumOfEmployee);
    departmentNumOfEmployee.textContent = this.noEmp;

    let departmentAvgSalary = document.createElement("td");
    row.appendChild(departmentAvgSalary);
    departmentAvgSalary.textContent = this.avg;

    let departmentTotalSalary = document.createElement("td");
    row.appendChild(departmentTotalSalary);
    departmentTotalSalary.textContent = this.totla;
  } else {
    let tableRow = document.createElement("tr");

    tableContent.appendChild(tableRow);
    table.appendChild(tableContent);

    let departmentName = document.createElement("td");
    tableRow.appendChild(departmentName);
    departmentName.textContent = this.name;

    let departmentNumOfEmployee = document.createElement("td");
    tableRow.appendChild(departmentNumOfEmployee);
    departmentNumOfEmployee.textContent = this.noEmp;

    let departmentAvgSalary = document.createElement("td");
    tableRow.appendChild(departmentAvgSalary);
    departmentAvgSalary.textContent = this.avg;

    let departmentTotalSalary = document.createElement("td");
    tableRow.appendChild(departmentTotalSalary);
    departmentTotalSalary.textContent = this.totla;
  }
};

function reciveData() {
  let dataRecived = localStorage.getItem("Employees");
  //  console.log(dataRecived);

  let allData = JSON.parse(dataRecived);
  console.log(allData);

  if (allData != null) {
    let administrationCounter = 0;
    let marketingCounter = 0;
    let developmentCounter = 0;
    let financeCounter = 0;

    let administrationTotalSalary = 0;
    let marketingTotalSalary = 0;
    let developmentTotalSalary = 0;
    let financeTotalSalary = 0;
    let administrationAvarageSalary = 0;
    let marketingAvarageSalary = 0;
    let developmentAvarageSalary = 0;
    let financeAvarageSalary = 0;

    // function totalsal(salary){

    // }
    for (let i = 0; i < allData.length; i++) {
      if (allData[i].department == "Administration") {
        administrationCounter += 1;
        administrationTotalSalary += allData[i].salary;
        administrationAvarageSalary =
          administrationTotalSalary / administrationCounter;
      }
      if (allData[i].department == "Finance") {
        financeCounter += 1;
        financeTotalSalary += allData[i].salary;
        financeAvarageSalary = financeTotalSalary / financeCounter;
      }
      if (allData[i].department == "Development") {
        developmentCounter += 1;
        developmentTotalSalary += allData[i].salary;
        developmentAvarageSalary = developmentTotalSalary / developmentCounter;
      }
      if (allData[i].department == "Marketing") {
        marketingCounter += 1;
        marketingTotalSalary += allData[i].salary;
        marketingAvarageSalary = marketingTotalSalary / marketingCounter;
      }
    }
    var aelement = new Department(
      "Administration",
      administrationCounter,
      administrationAvarageSalary,
      administrationTotalSalary
    );
    var felement = new Department(
      "Finance",
      financeCounter,
      financeAvarageSalary,
      financeTotalSalary
    );
    var delement = new Department(
      "Development",
      developmentCounter,
      developmentAvarageSalary,
      developmentTotalSalary
    );
    var melement = new Department(
      "Marketing",
      marketingCounter,
      marketingAvarageSalary,
      marketingTotalSalary
    );
    console.log(aelement, "aelement");

    aelement.render();

    felement.render();

    delement.render();

    melement.render();

    let finaltotal_noOfEmployee =
      administrationCounter +
      marketingCounter +
      financeCounter +
      developmentCounter;
    let finaltotal_avg =
      administrationAvarageSalary +
      marketingAvarageSalary +
      financeAvarageSalary +
      developmentAvarageSalary;

    let finaltotal_total =
      administrationTotalSalary +
      marketingTotalSalary +
      financeTotalSalary +
      developmentTotalSalary;

    var totalFooter = new Department(
      "Total",
      finaltotal_noOfEmployee,
      finaltotal_avg,
      finaltotal_total
    );

    totalFooter.render();
  }
}

reciveData();
