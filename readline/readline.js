const readline = require('readline')

const interface = readline.createInterface ({
                  input: process.stdin,
                  output: process.stdout
});

interface.question("Number 1 = ", (num1) => {
    interface.question("Number 2 = ", (num2) => {
        const sum = Number (num1) + Number (num2);
        console.log(sum);
    })
})