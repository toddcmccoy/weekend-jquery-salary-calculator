$(document).ready(onReady);

function onReady(){
    console.log('JS has arrived');
    console.log('jQuery is here too');
    $('#add-employee').on('click', addEmployee);
}



// create a function to collect inputs
function addEmployee() {
    let firstname = $('#first-name').val();
    let lastname = $('#last-name').val();
    let idnumber = $('#emp-number').val();
    let emptitle = $('#emp-title').val();
    let salary = $('#annual-salary').val();
    
    console.log('clicked');
    console.log(firstname);
    console.log(lastname);
    console.log(idnumber);
    console.log(emptitle);
    console.log(salary);

    $('#employee-table tr:last').after(
        `<td id="#f-name">${firstname}</td>`,
        `<td id="#l-name">${lastname}</td>`,
        `<td id="#id-number">${idnumber}</td>`,
        `<td id="#job-title">${emptitle}</td>`,
        `<td id="#emp-salary">${salary}</td></tr>`,
        '<tr>'
        );
    // $('#employee-table').append(`<ti id="#f-name">${firstname}</ti>`);
    // $('#employee-table').append(`<ti id="#l-name">${lastname}</ti>`);
    // $('#employee-table').append(`<ti id="#id-number">${idnumber}</ti>`);
    // $('#employee-table').append(`<ti id="#job-title">${emptitle}</ti>`);
    // $('#employee-table').append(`<ti id="#emp-salary">${salary}</ti>`);
}
//append input info to the table

//create a function that takes the annual summary and calculates the monthly expense

//create a function that removes an employee from the table