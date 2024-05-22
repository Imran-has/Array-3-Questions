// Define an array named employees containing employee objects
const employees = [
    {
        name: "Imran",
        hoursWorked: 25,
        hourlyRate: 250,
        salary: 0 // Placeholder value, will be calculated
    },
    {
        name: "Kamran",
        hoursWorked: 15,
        hourlyRate: 230,
        salary: 0 // Placeholder value, will be calculated
    },
    // Add more employee objects as needed
];
// Implement a function named calculateSalary
function calculateSalary(employee) {
    let baseSalary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked >= 20) {
        // Apply a 10% bonus if hours worked is 20 or more
        baseSalary *= 1.1;
    }
    return baseSalary;
}
// Calculate salaries for each employee
employees.forEach(employee => {
    employee.salary = calculateSalary(employee);
});
console.log(employees);
export {};
