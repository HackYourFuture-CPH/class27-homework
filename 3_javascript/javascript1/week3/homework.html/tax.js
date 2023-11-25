function calculateTax(income) {
    let taxPercentage;
    if (income < 50000) {
        taxPercentage = 8;
    }
    if (income > 50000 && income <= 100000) {
        taxPercentage = 15;
    }
    if (income > 100000 && income < 300000) {
        taxPercentage = 30;
    }
    else {
        taxPercentage = 50;
    }
    const taxAmountToPay = (taxPercentage / 100) * income;
    return taxAmountToPay;
}
const income = [40000, 70000, 10000];
income.forEach(income => {
    const tax = calculateTax(income);
    console.log(`For an income of $${income}, the tax amount is $${tax}`)
});
