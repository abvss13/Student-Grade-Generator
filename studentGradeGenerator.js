function calculateGrade(marks) {
    if (marks >= 0 && marks <= 100) {
      if (marks > 79) {
        return "A";
      } else if (marks >= 60 && marks <= 79) {
        return "B";
      } else if (marks >= 50 && marks <= 59) {
        return "C";
      } else if (marks >= 40 && marks <= 49) {
        return "D";
      } else {
        return "E";
      }
    } else {
      return "Invalid marks.";
    }
  }
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Enter student marks (between 0 and 100): ', (answer) => {
    const studentMarks = parseFloat(answer);
    const grade = calculateGrade(studentMarks);
    console.log(`The grade for the student is: ${grade}`);
    rl.close();
  });
  