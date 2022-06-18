$(document).ready(onReady);

function onReady(){
    console.log('JS has arrived');
    console.log('jQuery is here too');
    $('#add-employee').on('click', addEmployee);
}



// create a function to collect inputs
function addEmployee() {
    console.log('clicked');
    let firstname = $('#first-name').val();
    let lastname = $('#last-name').val();
    console.log(firstname);
    console.log(lastname);
    $('#employee-table').append(`<ti id="#f-name">${firstname}</li>`);
    $('#employee-table').append(`<ti id="#l-name">${lastname}</li>`);
}
//append input info to the table

//create a function that takes the annual summary and calculates the monthly expense

//create a function that removes an employee from the table