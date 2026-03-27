// Fundamentals Practice Exercise
// Inside, create variables of different types (string, number, boolean, array, object) and assign appropriate values to them. Then, print these variables to the console.
// Use a comparison operator to check if your age is greater than 18.
// Use a logical operator to check if your age is greater than 18 and you are learning automation.

// Expected output example:

//Name: "Joshua"
//Age: 36
//Learning Automation: true
//Favorite Tools: ["Selenium", "Cypress", "Playwright"]
//Is age greater than 18? true
//Is learning automation? true

let userName: string = "Joshua";
let userAge: number = 36;
let learningAutomation: boolean = true;
let favoriteTools: string[] = ["Selenium", "Cypress", "Playwright"];
const age: number = 36;
if (age > 18) {
    console.log("You are an older than 18.");
}
const isLearningAutomation: boolean = true;

if (age > 18 && isLearningAutomation) {
    console.log("You are older than 18 and learning automation.");
}

/* console.log("Name:", userName);
console.log("Age:", userAge);
console.log("Learning Automation:", learningAutomation);
console.log("Favorite Tools:", favoriteTools);
console.log("Is age greater than 18?", userAge > 18);
console.log("Is learning automation?", userAge > 18 && learningAutomation); */