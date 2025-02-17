let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let darkMode = localStorage.getItem("darkMode") === "enabled";

if (darkMode) {
    document.body.classList.add("dark-mode");
}

function addExpense() {
    let name = document.getElementById("expenseName").value.trim();
    let amount = parseFloat(document.getElementById("expense").value);

    if (!name || isNaN(amount) || amount <= 0) {
        alert("رجاءً أدخل اسم المصروف والمبلغ بشكل صحيح!");
        return;
    }

    let today = new Date().toISOString().split("T")[0];
    let existingExpense = expenses.find(exp => exp.name === name);

    if (existingExpense) {
        existingExpense.amount += amount;
    } else {
        expenses.push({ name, amount, date: today });
    }

    localStorage.setItem("expenses", JSON.stringify(expenses));
    document.getElementById("expenseName").value = "";
    document.getElementById("expense").value = "";
    updateTotals();
}

function updateTotals() {
    let today = new Date().toISOString().split("T")[0];
    let dailyTotal = 0, yearlyTotal = 0;

    let list = document.getElementById("expenseList");
    list.innerHTML = "";

    expenses.forEach((expense, index) => {
        let expenseYear = new Date(expense.date).getFullYear();

        if (expense.date === today) dailyTotal += expense.amount;
        if (expenseYear === new Date().getFullYear()) yearlyTotal += expense.amount;

        let listItem = document.createElement("li");
        listItem.innerHTML = `📌 <span onclick="editExpense(${index})">${expense.name}</span> - ${expense.amount} ريال`;
        list.appendChild(listItem);
    });

    document.getElementById("dailyTotal").innerText = dailyTotal + " ريال";
    document.getElementById("yearlyTotal").innerText = yearlyTotal + " ريال";
}

let editIndex = -1;

function editExpense(index) {
    editIndex = index;
    let expense = expenses[index];
    document.getElementById("editExpenseName").innerText = `✏️ تعديل: ${expense.name}`;
    document.getElementById("editExpenseAmount").value = "";
    document.getElementById("editBox").style.display = "block";
}

function updateExpense() {
    let newAmount = parseFloat(document.getElementById("editExpenseAmount").value);
    if (isNaN(newAmount) || newAmount <= 0) {
        alert("رجاءً أدخل مبلغ صحيح!");
        return;
    }

    expenses[editIndex].amount += newAmount;
    localStorage.setItem("expenses", JSON.stringify(expenses));
    document.getElementById("editBox").style.display = "none";
    updateTotals();
}

function cancelEdit() {
    document.getElementById("editBox").style.display = "none";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
}

function resetExpenses() {
    if (confirm("هل أنت متأكد من مسح جميع البيانات؟")) {
        expenses = [];
        localStorage.removeItem("expenses");
        updateTotals();
    }
}

updateTotals();
