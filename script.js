let accountBalance = 5000;
let transactionHistory = [];

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0) {
        accountBalance += amount;
        transactionHistory.push(`Deposited: $${amount.toFixed(2)}`);
        updateAccountDisplay();
    } else {
        alert("Please enter a valid amount.");
    }
    document.getElementById('amount').value = ''; // Clear input
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0 && amount <= accountBalance) {
        accountBalance -= amount;
        transactionHistory.push(`Withdrew: $${amount.toFixed(2)}`);
        updateAccountDisplay();
    } else {
        alert("Insufficient funds or invalid amount.");
    }
    document.getElementById('amount').value = ''; // Clear input
}

function updateAccountDisplay() {
    document.getElementById('accountBalance').innerText = accountBalance.toFixed(2);
    const historyList = document.getElementById('transactionHistory');
    historyList.innerHTML = ''; // Clear previous history
    transactionHistory.forEach(transaction => {
        const li = document.createElement('li');
        li.innerText = transaction;
        historyList.appendChild(li);
    });
}
