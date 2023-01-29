/* 
another solution is pure JS
*/

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

// create a main function where we transfer the salaries of specializations and team members
const calculateTeamFinanceReport = (salaries, team) => {
    let countSpecialization = {};
    let outBudget = {};
    let totalBudget = 0;
    team.forEach(function(a){
        countSpecialization[a.specialization] = countSpecialization[a.specialization] + 1 || 1;
    });
    for (let key in countSpecialization) {
        outBudget[key] = countSpecialization[key] * (salaries[key].salary + salaries[key].salary * Number(String(salaries[key].tax).slice(0, 2)) / 100);
        totalBudget += countSpecialization[key] * (salaries[key].salary + salaries[key].salary * Number(String(salaries[key].tax).slice(0, 2)) / 100);
    }
    outBudget['Total Budget'] = totalBudget;
    return outBudget;
}

const financeReport1 = calculateTeamFinanceReport(salaries1, team1)
console.log(JSON.stringify(financeReport1))