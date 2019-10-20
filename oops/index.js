var emp1 = {};
emp1.firstName = "Bhabadyuti";
emp1.lastName = "Bal";
emp1.gender = "M";
emp1.designation = "JC";


var emp2 = {};
emp1.firstName = "Subash";
emp1.lastName = "J";
emp1.gender = "M";
emp1.designation = "JC";


function createEmployeeObject(firstName, lastName, gender, designation){
    var newObject = {};
    newObject.firstName = firstName;
    newObject.lastName = lastName;
    newObject.gender = gender;
    newObject.designation = designation;
    return newObject;
}


var emp3 = createEmployeeObject("Jim", "Jhon", "M", "SSE");



