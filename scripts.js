/* ### Sistema de gastos familiar

*/


let family = {
    incomes: [2500, 3200, 250, 400, 110.90, 600],
    expenses: [290.80, 140.50, 90.60, 1000.00]
}

function sum(array) {
    let total = 0;

    for(let value of array){
        total += value 
    }


    return total 
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
}


calculateBalance()