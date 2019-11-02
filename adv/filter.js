/*jshint esversion: 6 */
/*
 * filter(citeria) creates a new array from an existing array
 * with elements that fall under a given criteria/condition.
 */

function filterAnyArray() {
  let names = ["Shaaran", "Athul", "Swapan", "Jaykumar", "Bhargav"];
  /* let filteredNames = names.filter(function(name) {
    return name.length > 5;
  }); */
  let filteredNames = names.filter(name => name.length > 5);
  return filteredNames;
}
//console.log(filterAnyArray());

function filterArrayOfObjects() {
  let employees = [
    { name: "Sharan H", role: "PDM Developer" },
    { name: "Athul Dev", role: "PDM Developer" },
    { name: "Bhargav Vatul", role: "PDM Administrator" },
    { name: "Jaykumar P", role: "PDM Administrator" },
    { name: "Swapan U", role: "VE Manager" }
  ];
  /* let developers = employees.filter(function(emp) {
    return emp.role.includes("Developer");
  }); 
  });*/
  let developers = employees.filter(emp => emp.role.includes("Developer"));
  return developers;
}
console.log(filterArrayOfObjects());
