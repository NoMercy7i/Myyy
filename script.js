let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let darkMode = localStorage.getItem("darkMode") === "enabled";

// تحميل الوضع الداكن عند فتح التطبيق
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
    expenses.push({ name, amount, date: today });

    localStorage.setItem("expenses", JSON.stringify(expenses));

    document.getElementById("expenseName").value = "";
    document.getElementById("expense").value = "";

    updateTotals();
}

function updateTotals() {
    let today = new Date().toISOString().split("T")[0];
    let dailyTotal = 0, weeklyTotal = 0, monthlyTotal = 0, yearlyTotal = 0;

    let list = document.getElementById("expenseList");
    list.innerHTML = "";

    expenses.forEach(expense => {
        let expenseDate = new Date(expense.date);
        let expenseYear = expenseDate.getFullYear();

        if (expense.date === today) dailyTotal += expense.amount;
        if (expenseYear === new Date().getFullYear()) yearlyTotal += expense.amount;

        let listItem = document.createElement("li");
        listItem.textContent = `📌 ${expense.name} - ${expense.amount} ريال`;
        list.appendChild(listItem);
    });

    document.getElementById("dailyTotal").innerText = dailyTotal + " ريال";
    document.getElementById("yearlyTotal").innerText = yearlyTotal + " ريال";
}

function resetExpenses() {
    if (confirm("هل أنت متأكد من مسح جميع البيانات؟")) {
        expenses = [];
        localStorage.removeItem("expenses");
        updateTotals();
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
}

updateTotals();
