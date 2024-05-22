// Define a type alias for Student
type Student = {
    name: string;
    grades: number[];
};

// Create an array of student objects
const students: Student[] = [
    { name: "Hassan", grades: [80, 75, 90] },
    { name: "Imran", grades: [85, 90, 95] },
    { name: "Hamza", grades: [70, 65, 80] }
];

// Function to calculate average grade
function calculateAverageGrade(grades: number[]): number {
    const total = grades.reduce((acc, grade) => acc + grade, 0);
    return total / grades.length;
}

// Display each student's name and average grade
students.forEach(student => {
    const averageGrade = calculateAverageGrade(student.grades);
    console.log(`${student.name}'s average grade is ${averageGrade.toFixed(2)}`);
});
