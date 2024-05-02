import inquirer from "inquirer"

let user_ans = await inquirer.prompt({
    type: "input",
    name: "words",
    message: "please enter your sentence"
    
})

let word_count = user_ans.words.trim().split(" ").lenght

console.log(`your sentence has ${word_count} words.`);