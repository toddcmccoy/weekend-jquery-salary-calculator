$(document).ready(onReady);

function onReady(){
    console.log('JS has arrived');
    console.log('jQuery is here too');
    $('#add-employee').on('click', addEmployee);
}

let employees = [];


// create a function to collect inputs
function addEmployee() {
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let idNumber = $('#emp-number').val();
    let employeeTitle = $('#emp-title').val();
    let salary = $('#annual-salary').val();

//adding inputted data to the DOM
    $('#employee-table tr:last').after(
        `<td>${firstName}</td>`,
        `<td>${lastName}</td>`,
        `<td>${idNumber}</td>`,
        `<td>${employeeTitle}</td>`,
        `<td>${salary}</td></tr>`,
        '<tr>'
        );

//take employee data and create an object that will be used to calculate monthly salary
    let anotherEmployee={
        firstname: $('#first-name').val(),
        lastname: $('#last-name').val(),
        idnumber: Number($('#emp-number').val()),
        emptitle: $('#emp-title').val(),
        salary: Number($('#annual-salary').val()),
    };
//storing each employee object in an array
    employees.push(anotherEmployee);
//calling function to show monthly salaries
    getMonthlySalary();
//clear the input fields
    emptyFields();
}

//clear inputs function

//append input info to the table

//create a function that takes the annual summary and calculates the monthly expense
function getMonthlySalary(){
    console.log('in getMonthlySalary');
    let result=0;
    for (employee of employees){ 
        result += employee.salary/12;
    }
    $('#salary-obligations').text(result);
}

function emptyFields(){
    $('#first-name').val(''),
    $('#last-name').val(''),
    $('#emp-number').val(''),
    $('#emp-title').val(''),
    $('#annual-salary').val('')
}
//create a function that removes an employee from the table