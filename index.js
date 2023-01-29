// create an example to verify the correctness of the function
const salaries1 = {
    Manager: { salary: 1000, tax: "10%" },
    Designer: { salary: 600, tax: "30%" },
    Artist: { salary: 1500, tax: "15%" },
}
const team1 = [
    { name: "Misha", specialization: "Manager" },
    { name: "Max", specialization: "Designer" },
    { name: "Vova", specialization: "Designer"},
    { name: "Leo", specialization: "Artist"},
]
// create a function for calculating salary by category
const calculateSalaryByCategory = (salaries, specialization, count) => {
    let categoryObj = new Object();
    // categoryObj.spec = specialization;
    categoryObj[specialization] = (salaries[specialization].salary + salaries[specialization].salary * Number(String(salaries[specialization].tax).slice(0, 2)) / 100) * count;
    return categoryObj
}
// create a basis for the main function
const calculateTeamFinanceReport = (salaries, team) => {
    let result = {};
    let salaryByCategoryArr = [];
    let outputBudget = []
    const totalBudget = new Object();
    team.forEach(function(a){
        result[a.specialization] = result[a.specialization] + 1 || 1;
    });
    for (let specialization in result) {
        salaryByCategoryArr.push(calculateSalaryByCategory(salaries, specialization, result[specialization]))
    }
    totalBudget['Total Budget'] = 0;
    salaryByCategoryArr.forEach(el => {
        outputBudget.push(el)
        for (let k in el) {
            totalBudget['Total Budget'] += (el[k]);
        }
    })
    outputBudget.push(totalBudget)
    return outputBudget
}
const financeReport1 = calculateTeamFinanceReport(salaries1, team1)
console.log(JSON.stringify(financeReport1))