/*jshint esversion: 6 */

function objectMapping() {
  let employees = [
    { name: "Sharan H", role: "PDM Developer" },
    { name: "Athul Dev", role: "PDM Developer" },
    { name: "Bhargav Vatul", role: "PDM Administrator" },
    { name: "Jaykumar P", role: "PDM Administrator" },
    { name: "Swapan U", role: "VE Manager" }
  ];

  let names = employees.map(emp => emp.name);
  return names;
}

console.log(objectMapping());
