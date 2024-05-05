'use strict'

//Declaring Arrays 

let department = ["Administration","Marketing","Development","Finance"];
let level = ["Junior","Mid-Senior","Senior"];
let headerTitles =["Employee ID","Full Name","Department","Level","Image URL","Salary"];
let allEmployees = [];
let min,max;
// Creating The Constructor Function

function Employee (id,name,department,level,url) {
    this.fullName = name ;
    this.employeeID = id ;
    this.department = department ;
    this.level = level ;
    this.url = url ;
    this.salary = this.generateNetSal();
    allEmployees.push(this);

    }


// Calculating Random Salary
Employee.prototype.generateRandomSal = function(){
    if (this.level === "Senior") {
        min = 1500;
        max = 2000;
     
    }
    else if (this.level === "Mid-Senior") {
     max = 1500;
     min = 1000;
    }
    else if (this.level === "Junior") {
     max = 1000;
     min = 500;
    }
    let newSalary = Math.floor(Math.random() * (max - min) + min); 
    return newSalary
};
console.log(Math.floor(10.7)) ;

// Calculating New Salary
Employee.prototype.generateNetSal = function() {
    var netSalary= this.generateRandomSal()
    this.salary = netSalary * 0.925
};

//Filling Employees Data (Creating Objects)

const ghazi = new Employee(1000,"Ghazi Samer","Administration","Senior")
const lana = new Employee(1001,"Lana Ali","Finance","Senior")
const tamara = new Employee(1002,"Tamara Ayoub","Marketing","Senior")
const safi = new Employee(1003,"Safi Walid","Administration","Mid-Senior")
const omar = new Employee(1004,"Omar Zaid","Development","Senior")
const rana = new Employee(1005,"Rana Saleh","Development","Junior")
const hadi = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior")

console.log(ghazi)

// Creating rendering Prototype function
Employee.prototype.renderEmployee = function() {
    document.write(`</br><p>Employee Name : ${this.fullName}</p>`)
    document.write(`<p>Employee Salary : ${this.netSalary}</p>`)
}

// loop through allEmployee Array to Display it on Main

for (let i=0; i < allEmployees.length; i++){
    allEmployees[i].generateRandomSal();
    allEmployees[i].generateNetSal();
    allEmployees[i].renderEmployee();
}







// Constructor Object gets its values (Parameters) from linked Objects 
// Methods (Functions) give value to the objects through the prototype function exist in constructor 
// it has to be prototype function so it doesnt consume process power or memory unneeded (DRY)
// "this" a very strong method that update the constructor with new Key,Property