let balance = 0;

function addTransaction() {
    const transactionType = document.getElementById("transactionType").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid positive amount.");
        return;
    }

    const transaction = {
        type: transactionType,
        amount: amount
    };

    updateBalance(transaction);
    updateTransactionList(transaction);
}

function updateBalance(transaction) {
    if (transaction.type === "income") {
        balance += transaction.amount;
    } else {
        balance -= transaction.amount;
    }

    document.getElementById("balance").innerText = balance.toFixed(2);
}

function updateTransactionList(transaction) {
    const transactionsList = document.getElementById("transactions");

    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}:</strong> Rs${transaction.amount.toFixed(2)}`;
    
    transactionsList.appendChild(listItem);
}
